import { useState } from 'react';
import axios from 'axios';
import './EmailSubscription.css';
import imageOne from '../../assets/images/sub-one.webp';
import imageTwo from '../../assets/images/sub-two.webp';
import imageThree from '../../assets/images/sub-three.webp';
import imageFour from '../../assets/images/sub-four.webp';
import imageFive from '../../assets/images/sub-five.webp';
export default function EmailSubscription() {
    const savedEmail = localStorage.getItem('userEmail');
    //  localStorage.removeItem('userEmail');
    const buttonClass = ` ${savedEmail !== null ? 'email form-control disabled' : 'email form-control'}`;
    const [spinner, setSpinner] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        setSpinner(true);

        try {
            const response = await axios.post('https://api.pmoluno.com/emails', { email });
            setMessage(response.data.message);
            setSpinner(false);

            // Add email to localStorage if the request is successful
            localStorage.setItem('userEmail', email);

            setEmail('');
        } catch (err) {
            if (err.response) {
                localStorage.setItem('userEmail', email);
                setError(err.response.data.message);

            } else {
                setError('An error occurred. Please try again.');
            }
            setSpinner(false);
        }
    };
    return (
        <>
            <div className="container">
                <div className="email-subscription container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Innovate & Elevate Newsletter</h1>
                            <p>I share everything I learn along the way here. Read by smart enterprenuers who want to stay informed.</p>
                            <div className="review d-flex">
                                <div className="">
                                    <img src={imageOne} className='' />
                                    <img src={imageTwo} className='shift-1' />
                                    <img src={imageThree} className='shift-2' />
                                    <img src={imageFour} className='shift-3' />
                                    <img src={imageFive} className='shift-4' />
                                </div>
                                <div className="shift-5">
                                    <div className="star">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p>from 65 reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="email-form">
                                <p>Join 10k+ smart readers of Innovate & Elevate if you want to stay up to date and make informed business decisions.</p>
                                <form onSubmit={handleSubmit}>
                                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email || savedEmail} className={buttonClass} placeholder='Email Address' required disabled={savedEmail !== null ? true : false} />
                                    <button type='submit' className={savedEmail !== null ? 'btn btn-submit form-control disabled' : "btn btn-submit form-control"}>{savedEmail !== null ? 'Subscribed!' : !spinner ? 'Subscribe' : <div className="spinner-border text-light" style={{ width: "15px", height: "15px" }} role="status">
                                    </div>} </button>
                                    {/* {message && <p style={{ color: 'green' , fontWeight: "700"}} className='pt-3 pb-0 mb-0'>{message}</p>} */}
                                    {error && <p style={{ color: 'red', fontWeight: "700"}} className='pt-3 pb-0 mb-0'>{error}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}