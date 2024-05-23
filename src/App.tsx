import "./App.css";
import { HeroSection } from "./components/heroSection";
import { IntroBanner } from "./components/introBanner";
import { NavigationBar } from "./components/navigationBar";

function App() {
  return (
    <>
      <NavigationBar />
      <IntroBanner />
      <HeroSection />
    </>
  );
}

export default App;
