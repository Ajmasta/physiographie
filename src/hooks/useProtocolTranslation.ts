import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { ProtocolData } from "../interfaces/protocol";

export const useProtocolTranslation = (protocolPath: string) => {
  const { i18n } = useTranslation();
  const [protocolData, setProtocolData] = useState<ProtocolData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTranslation = async () => {
      try {
        console.log(
          `Attempting to load protocol: ${protocolPath} in language: ${i18n.language}`
        );

        // Use the glob import for Vite
        const modules = import.meta.glob<{ default: ProtocolData }>(
          "../i18n/*/protocols/**/*.json"
        );
        const path = `../i18n/${i18n.language}/protocols/${protocolPath}.json`;

        if (modules[path]) {
          const data = await modules[path]();
          console.log("Successfully loaded protocol data:", data);
          setProtocolData(data.default);
          setError(null);
        } else {
          throw new Error(`Protocol file not found: ${path}`);
        }
      } catch (error) {
        console.error("Failed to load protocol translation:", error);
        setError(error.message);

        // Fallback to French if translation is not available
        if (i18n.language !== "fr") {
          try {
            console.log(
              `Attempting to load French fallback for protocol: ${protocolPath}`
            );
            const frPath = `../i18n/fr/protocols/${protocolPath}.json`;
            const modules = import.meta.glob<{ default: ProtocolData }>(
              "../i18n/fr/protocols/**/*.json"
            );

            if (modules[frPath]) {
              const frData = await modules[frPath]();
              console.log("Successfully loaded French fallback data:", frData);
              setProtocolData(frData.default);
              setError(null);
            } else {
              throw new Error(`French fallback file not found: ${frPath}`);
            }
          } catch (fallbackError) {
            console.error("Failed to load French fallback:", fallbackError);
            setError(fallbackError.message);
          }
        }
      }
    };

    loadTranslation();
  }, [i18n.language, protocolPath]);

  return { data: protocolData, error };
};
