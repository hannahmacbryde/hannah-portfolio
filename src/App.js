import styles from "./App.css";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Experience />
    <Contact />
  </div>;
}

export default App;
