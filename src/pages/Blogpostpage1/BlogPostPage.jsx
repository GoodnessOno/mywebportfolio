import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../../blogData';
import './blogpostpage.css';
import { Navbar, Blogheader } from '../../components';

const BlogPostPage = () => {
    const { id } = useParams();
    const post = blogPosts.find((post) => post.id === parseInt(id));

    return (
        <div className='blog-post-page'>
            <Navbar />
            <Blogheader />
            {post && (
                <>
                    <h1 className='blog-post-title'>{post.title}</h1>
                    <div className='blog-post-intro'>
                    <div className='blog-post-page-image rotate-scale-up'>
                        <img src={require(`../../assets/${post.image}`)} alt={post.title} className="post-image" /></div>
                        <div className='blog-post-page-intro'>
                        <h4>{post.precontent}</h4>
                    </div>    
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    <small>{post.author}</small>
                    <small>{post.date}</small>
                </>
            )}
        </div>
    );
};

export default BlogPostPage;

