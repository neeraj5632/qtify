import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* Top Albums section */}
      <Section title="Top Albums" type="top" />

      {/* New Albums section */}
      <Section title="New Albums" type="new" />
    </div>
  );
}

export default App;
