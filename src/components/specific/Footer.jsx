import './Footer.css';
import EmailForm from '../common/EmailForm';
const Footer = () => {
  const logoStyle ={
    color: '#f47e05',
    textTransform: 'lowercase',
  }
  return (
    <section id="footer-section" className="pt-5">
      <div className="container">
        <div className="container newsletter">
          <div className="row vertical-center">
            <div className="col-md-8 mt-5">
              <div className="container">
                <p className="newsletter-tag pb-0">NEWSLETTER</p>
                <h2 className="pb-3" id="mail-message">Join My Premium Newsletter</h2>
                <EmailForm/>
              </div>
            </div>
            <div className="col-12 col-md-3 mt-5 bl-1">
              <div className="container d-none d-md-block">
                <p className="newsletter-icon p-0"><i className="bi bi-envelope"></i></p>
                <h3 style={{ color: '#ffffff' }} className='p-0'>Email</h3>
                <p className="small-text">hi@pmoluno.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-12 col-md-3">
              <div style={{fontWeight: '700', color: 'white'}}>
              Pmoluno<span style={logoStyle}>.com</span>
              </div>
              <p className="pt-4 pb-3" style={{ color: '#ffffff', fontSize: '12px' }}>With almost a decade of experience I develop web application that
              clients love, and helps business thrive!</p>
            </div>
            <div className="col-6 col-md-3">
              <h2>Resources</h2>
              <ul className="footer-ul">
                <li><a href="#about">About</a></li>
                <li><a href="https://medium.com/@pmoluno">Blog</a></li>
              </ul>
            </div>
            <div className="col-6 col-md-3 d-none">
              <h2>Legal</h2>
              <ul className="footer-ul">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <h2>Social</h2>
              <ul className="footer-ul">
                <li><a href="https://www.linkedin.com/in/pureheart-moluno/">LinkedIn</a></li>
                <li><a href="https://github.com/pmoluno">Github</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        <div className=" footer-end d-flex">
          <div className='container'>Copyright &copy; 2024. All rights reserved.</div>
      </div>
    </section>
  );
};


export default Footer;