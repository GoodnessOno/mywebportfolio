import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../../blogData';
import './blogpostpage.css';

const BlogPostPage = () => {
    const { id } = useParams();
    const post = blogPosts.find((post) => post.id === parseInt(id));

    return (
        <div className='blog-post-page'>
            {post && (
                <>
                    <h2>{post.title}</h2>
                    <img src={post.image} alt={post.title} className="post-image" />
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    <small>{post.author}</small>
                    <small>{post.date}</small>
                </>
            )}
        </div>
    );
};

export default BlogPostPage;

