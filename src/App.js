import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import SongsSection from "./components/SongsSection/SongsSection";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section title="Top Albums" type="top" />
      <Section title="New Albums" type="new" />

      {/* Songs Section */}
      <SongsSection />
    </div>
  );
}

export default App;
