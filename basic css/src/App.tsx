import "./App.css";
import { Container } from "./components/Container";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="layout">
      <Container>
        <div className="layout-lines-container">
          <div className="left-line" />
          <div className="right-line" />
        </div>
        <Navbar />
        <Hero />
      </Container>
      <div className="hero-img-container">
        <div className="horizontal-line" />
        <img src="./hero-ui-v6.webp" className="hero-img" />
      </div>
    </div>
  );
}

export default App;
