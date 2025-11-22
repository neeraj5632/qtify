import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section title="Top Albums" type="top" />
      <Section title="New Albums" type="new" />
    </div>
  );
}

export default App;
