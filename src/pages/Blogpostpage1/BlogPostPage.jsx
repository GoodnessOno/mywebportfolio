import React from 'react'
import { useParams } from 'react-router-dom'
import blogPosts from '../../blogData'

const BlogPostPage = () => {
    const { id } = useParams()
    const blogPost = blogPosts.find(post => post.id === parseInt(id));
    console.log(blogPost)
  return (
    <div className='blog-post-page'>
      <h2>{blogPost.title}</h2>
      <p>{blogPost.content}</p>
      <p>{blogPost.author}</p>
      <small>{blogPost.date}</small>
    </div>
  );
};

export default BlogPostPage
