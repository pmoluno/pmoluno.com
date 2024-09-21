import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container d-flex">
                <div className="copyright">
                    <p> &copy; 2024. All Rights Reserved.</p>
                </div>
                <div className="links ms-auto">
                    <Link to='/privacy'>Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;