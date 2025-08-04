import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { HomepageData } from "../interfaces/homepage";

type PageData = HomepageData; // Add more page types here as needed with |

export const usePageTranslation = (pagePath: string) => {
  const { i18n } = useTranslation();
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTranslation = async () => {
      setIsLoading(true);
      try {
        // First try to load the detected/selected language
        const data = await import(`../i18n/${i18n.language}/${pagePath}.json`);
        setPageData(data.default);
      } catch (error) {
        console.error("Failed to load page translation:", error);
        try {
          // If the selected language fails, try French as fallback
          if (i18n.language !== "fr") {
            const frData = await import(`../i18n/fr/${pagePath}.json`);
            setPageData(frData.default);
            // Optionally switch the language to French
            await i18n.changeLanguage("fr");
          }
        } catch (fallbackError) {
          console.error("Failed to load French fallback:", fallbackError);
          setPageData(null);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslation();
  }, [i18n.language, pagePath]);

  return { data: pageData, isLoading };
};
