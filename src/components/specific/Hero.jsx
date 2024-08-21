import "./Hero.css";
import Arrow from "../common/Arrow";
import Star from "../common/Star";
import Brands from "../common/Brands";

const Hero = () => {
  return (
    <>
    <div className="hero container" id="hero">
      <h1>
        <span> Hi I'm P Moluno, </span>
        <br /> I build web applications <Star /> <br /> that work. <Arrow />
      </h1>
      <p>
        With almost a decade of experience i develop web application that <br />
        clients love, and helps business thrive!
      </p>
      <a href="https://www.linkedin.com/in/pureheart-moluno/" className="btn btn-secondary btn-style-1">Let's Talk</a>
    </div>
    {/* <Brands/> */}
    </>
  );
};

export default Hero;
