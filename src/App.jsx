import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/specific/Navbar";
import Hero from "./components/specific/Hero";
import About from "./components/specific/About";
import Portfolio from "./components/specific/Portfolio";
import Articles from "./components/specific/Articles";
import Footer from "./components/specific/Footer";
import Brands from "./components/common/Brands";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Articles />
      <Footer />
    </div>
  );
};

export default App;
