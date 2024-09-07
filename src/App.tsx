import "./App.css";
import { HeroSection } from "./components/heroSection";
import { IntroBanner } from "./components/introBanner";
import { NavigationBar } from "./components/navigationBar";
import TeamHome from "./components/TeamHome";
import HomepageText from "./i18n/fr/homepage.json";

function App() {
  return (
    <>
      <NavigationBar />
      <IntroBanner />
      <HeroSection />
      <TeamHome descriptionText={HomepageText.descriptionSection} />
    </>
  );
}

export default App;
