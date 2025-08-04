import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

// Define a type for your theory data if you have one
export interface TheoryData {
  // Define the structure here, or use `any` if unknown
  [key: string]: unknown;
}

export function useTheoryTranslation(section: string) {
  const { i18n } = useTranslation();
  const [data, setData] = useState<TheoryData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTranslation = async () => {
      try {
        // Use Vite's glob import for all theory sections
        const modules = import.meta.glob<{ default: TheoryData }>(
          "../i18n/*/theorie/*.json"
        );
        const path = `../i18n/${i18n.language}/theorie/${section}.json`;

        if (modules[path]) {
          const mod = await modules[path]();
          setData(mod.default);
          setError(null);
        } else {
          throw new Error(`Theory file not found: ${path}`);
        }
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Unknown error");

        // Fallback to French if not already in French
        if (i18n.language !== "fr") {
          try {
            const frPath = `../i18n/fr/theorie/${section}.json`;
            const modules = import.meta.glob<{ default: TheoryData }>(
              "../i18n/fr/theorie/*.json"
            );
            if (modules[frPath]) {
              const frMod = await modules[frPath]();
              setData(frMod.default);
              setError(null);
            } else {
              throw new Error(`French fallback file not found: ${frPath}`);
            }
          } catch (fallbackError: unknown) {
            setError(
              fallbackError instanceof Error
                ? fallbackError.message
                : "Unknown error"
            );
          }
        }
      }
    };

    loadTranslation();
  }, [i18n.language, section]);

  return { data, error };
}
