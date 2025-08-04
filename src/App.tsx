import "./App.css";
import { HeroSection } from "./components/heroSection";
import { IntroBanner } from "./components/introBanner";
import { NavigationBar } from "./components/navigationBar";
import TeamHome from "./components/TeamHome";
import { usePageTranslation } from "./hooks/usePageTranslation";

function App() {
  const { data: homepageData, isLoading } = usePageTranslation("homepage");

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-32 h-32 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!homepageData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600">
          Failed to load content. Please try refreshing the page.
        </div>
      </div>
    );
  }

  return (
    <>
      <NavigationBar />
      <IntroBanner />
      <HeroSection cardSection={homepageData.cardSection} />
      <TeamHome descriptionText={homepageData.descriptionSection} />
    </>
  );
}

export default App;
