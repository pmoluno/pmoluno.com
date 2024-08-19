import { Carousel } from "react-bootstrap";
import NpmPackageInfo from '../common/NpmPackageInfo';
import "./Portfolio.css";
import imageOne from "../../assets/images/logistics.png"
import imageTwo from "../../assets/images/strataone.png"
import imageThree from "../../assets/images/tracker.png"

const Portfolio = () => {
  return (
    <div className="portfolio container" id="portfolio">
      <h2>My Projects</h2>
      <p>
        Here are some projects I've completed that demonstrate my web
        development expertise.
      </p>
      <Carousel className="no-arrows" interval={3000}>
        <Carousel.Item>
          <div className="snipet container">
            <div className="row">
              <div className="col-md-6">
                <img src={imageOne} alt="" className="slide-img img-fluid" />
              </div>
              <div className="col-md-6">
                <div className="description">
                  <h3>Comprehensive Logistics System - Chebna Logistics</h3>
                  <ul>
                    <li>
                      <strong>Description: </strong>Developed a logistics system
                      to streamline supply chain management, tracking, and
                      reporting.
                    </li>
                    <li>
                      <strong>Key Features: </strong>Real-time shipment
                      tracking, inventory management, automated reporting, and
                      route optimization.
                    </li>
                    <li>
                      <strong>Skills Highlighted: </strong>{" "}
                      <span>
                        JavaScript, Node.js, MySQL, Twilio, Bootstrap, Express,
                        OneSignal
                      </span>
                    </li>
                  </ul>
                  <a href="https://github.com/pmoluno" className="btn btn-style-1">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="snipet container">
            <div className="row">
              <div className="col-md-6">
                <img src={imageTwo} alt="" className="slide-img img-fluid"/>
              </div>
              <div className="col-md-6">
                <div className="description">
                  <h3>Custom Content Management System (CMS) - StrataOne</h3>
                  <ul>
                    <li>
                      <strong>Description: </strong>Built a bespoke CMS tailored
                      to client needs, enabling easy content creation,
                      management, and publishing.
                    </li>
                    <li>
                      <strong>Key Features: </strong>Role-based access control,
                      WYSIWYG editor, media management, and SEO-friendly URL
                      structures.
                    </li>
                    <li>
                      <strong>Skills Highlighted: </strong>{" "}
                      <span>
                        JavaScript, Node.js, Bootstrap, Express, EJS, MongoDB
                      </span>
                    </li>
                  </ul>
                  <a href="https://github.com/pmoluno" className="btn btn-style-1">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="snipet container">
            <div className="row">
              <div className="col-md-6">
                <img src={imageThree} alt="" className="slide-img img-fluid" />
              </div>
              <div className="col-md-6">
                <div className="description">
                  <h3>
                    Interactive Web Application for Real-Time Data Visualization
                    - ST-One Portfolio Tracker
                  </h3>
                  <ul>
                    <li>
                      <strong>Description: </strong>Created an interactive web
                      application that visualizes real-time data through dynamic
                      charts and graphs.
                    </li>
                    <li>
                      <strong>Key Features: </strong>Real-time data updates,
                      user-friendly interface, customizable data views, and
                      responsive design.
                    </li>
                    <li>
                      <strong>Skills Highlighted: </strong>{" "}
                      <span>
                        {" "}
                        D3.js, Chart.js, WebSockets,JavaScript, React.js,
                        Bootstrap Express, EJS, MongoDB
                      </span>
                    </li>
                  </ul>
                  <a href="https://github.com/pmoluno" className="btn btn-style-1">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <h3 className="pt-3 pb-2">Other Notable Projects  👇</h3>
      <div className="row">
        <div className="col-6 col-md">
          <img src="/images/1.png" alt="" className="img-fluid" />
        </div>
        <div className="col-6 col-md">
          <img src="/images/2.png" alt="" className="img-fluid" />
        </div>
        <div className="col-6 col-md">
          <img src="/images/3.png" alt="" className="img-fluid" />
        </div>
        <div className="col-6 col-md">
          <img src="/images/4.png" alt="" className="img-fluid" />
        </div>
        <div className="col-6 col-md">
          <img src="/images/5.png" alt="" className="img-fluid" />
        </div>
      </div>
      <h3 className="pt-3 pb-5">JS libraries & Modules Published  👇</h3>
      <div className="row">
        <div className="col-md-4">
        <NpmPackageInfo packageName="ejs-live-reload" />
        </div>
        <div className="col-md-4">
        <NpmPackageInfo packageName="u-css-purge" />
        </div>
        <div className="col-md-4">
        <NpmPackageInfo packageName="u-date-formatter" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
