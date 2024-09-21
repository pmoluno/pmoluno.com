import './TopPost.css';
import SampleImage from '../../assets/images/sample-image.jpg'
import { useState } from 'react';

export default function TopPosts() {
    const [hoveredPost, setHoveredPost] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredPost(index);
    }

    const handleMouseLeave = () => {
        setHoveredPost(null);
    }

    const posts = [
        {
            date: "September 19, 2024",
            title: "LinkedIn Images: Best Practices and Top Design Resources",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto, natus aliquam doloribus inventore nobis."
        },
        {
            date: "September 19, 2024",
            title: "LinkedIn Images: Best Practices and Top Design Resources",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto, natus aliquam doloribus inventore nobis."
        },
        {
            date: "September 19, 2024",
            title: "LinkedIn Images: Best Practices and Top Design Resources",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto, natus aliquam doloribus inventore nobis."
        }
    ];

    return (
        <div className='top-posts'>
            <div className="container">
                <h2>Top Posts</h2>
                <div className="row">
                    {posts.map((post, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="post-snippet">
                                <div 
                                    className="img-container" 
                                    onMouseEnter={() => handleMouseEnter(index)} 
                                    onMouseLeave={handleMouseLeave} 
                                    style={{ backgroundImage: `url(${SampleImage})` }}
                                >
                                    {hoveredPost === index && <button className='btn btn-see'>See More</button>}
                                </div>
                                <p className='date'>{post.date}</p>
                                <h3>{post.title}</h3>
                                {hoveredPost !== index && <p className='desc'>{post.description}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}