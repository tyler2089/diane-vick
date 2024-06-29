import React from 'react';
import Navbar from '../components/navbar';
import fetchData from '../components/fetchblogdata';
import { Fade } from 'react-reveal';
import { useEffect, useState } from 'react';
import '../styles/blog.css';
const Blog = () => {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        fetchData().then((data) => {
            setBlogData(data);
        });
    }, []);

    const BlogDisplay = () => {
        if (blogData) {
            return blogData.map((item, index) => {
                // Parse the date
                const date = new Date(item.created_at);
                // Format the date and time
                const formattedDateTime = date.toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                });
                return (
                    <Fade right cascade>
                    <div className="blog-post" key={index} style={{ borderBottom: index !== blogData.length - 1 ? '1px solid #ccc' : 'none', paddingBottom: index !== blogData.length - 1 ? '20px' : '0' }}>
                        <h1>{item.title}</h1>
                        <h2>By: Diane</h2>
                        <h3>{formattedDateTime}</h3>
                        <p>{item.content}</p>
                    </div>
                    </Fade>
                );
            });
        }
    };

    return (
        <div >
            <Navbar />
            
            <div className='blog-container'>
            <BlogDisplay />
            </div>
            
        </div>
    );
};

export default Blog;