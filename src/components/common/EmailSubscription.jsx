import './EmailSubscription.css';
import imageOne from '../../assets/images/sub-one.webp';
import imageTwo from '../../assets/images/sub-two.webp';
import imageThree from '../../assets/images/sub-three.webp';
import imageFour from '../../assets/images/sub-four.webp';
import imageFive from '../../assets/images/sub-five.webp';
export default function EmailSubscription() {
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
                                    <img src={imageOne} className=''/>
                                    <img src={imageTwo} className='shift-1'/>
                                    <img src={imageThree} className='shift-2'/>
                                    <img src={imageFour} className='shift-3'/>
                                    <img src={imageFive} className='shift-4'/>
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
                                <form action="">
                                    <input type="email" name="email" className='email form-control' placeholder='Email Address' />
                                    <button type='submit' className='btn btn-submit form-control'>Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}