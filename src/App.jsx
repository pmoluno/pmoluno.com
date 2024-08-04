import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ReactFullpage from "@fullpage/react-fullpage";
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
      <ReactFullpage
        navigationTooltips={["Intro", "About Me", "Projects", "Articles"]}
        navigation={true}
        slidesNavigation={true}
        slidesNavPosition="bottom"
        controlArrows={true}
        licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx"
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section hero-section">
              <Hero />
              <Brands />
            </div>
            <div className="section about-section">
              <About />
            </div>
            <div className="section portfolio-section">
              <Portfolio />
            </div>
            <div className="section articles-section">
              <Articles />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
      <Footer />
    </div>
  );
};

export default App;
