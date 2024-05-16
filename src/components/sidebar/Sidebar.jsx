import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import blogPosts from '../../blogData'

const MAX_CONTENT_LENGTH = 200;

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h2>Latest Blog Posts</h2>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: truncateContent(post.content) }} />
            <Link to={`/blog/${post.id}`}>CONTINUE READING</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const truncateContent = (content) => {
  return content.length > MAX_CONTENT_LENGTH
   ? `${content.substring(0, MAX_CONTENT_LENGTH)}...`
    : content;
};

export default Sidebar
