import "./App.css";
import { HeroSection } from "./components/heroSection";
import { IntroBanner } from "./components/introBanner";
import { NavigationBar } from "./components/navigationBar";
import Protocol from "./pages/protocols/Protocol";

function App() {
  return (
    
    <div className="relative" style={{overflow:"clip"}}>
      <NavigationBar />
      <IntroBanner />
      <HeroSection />
      <Protocol />

    </div>
  );
}

export default App;
