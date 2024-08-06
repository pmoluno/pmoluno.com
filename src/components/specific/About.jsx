import "./About.css";
import Technologies from "../common/Technologies";
const About = () => {
  return (
    <div className="about">
      <div className="container">
      <div className="row">
        <div className="col-md-5 pb-5">
          <h2>About Me</h2>
          <p>
            With almost a decade of experience, I bring a lot of know-how and
            attention to detail to every project. I'm skilled in a range of
            technologies and have a solid track record of building user-friendly
            web applications & websites.
          </p>
          <p>
            I understand both front-end and back-end development well and keep
            up with the latest industry trends to deliver high-quality
            solutions. Known for my problem-solving skills and teamwork, I'm
            good at turning complex requirements into smooth digital
            experiences.
          </p>
        </div>
        <div className="col-md-7">
          <h3>Technologies I use 👇 </h3>
          <Technologies />
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
