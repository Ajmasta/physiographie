import "./App.css";
import { HeroSection } from "./components/heroSection";
import { IntroBanner } from "./components/introBanner";
import { NavigationBar } from "./components/navigationBar";

function App() {
  return (
    <div className="relative" style={{ overflow: "clip" }}>
      <NavigationBar />
      <IntroBanner />
      <HeroSection />
    </div>
  );
}

export default App;
