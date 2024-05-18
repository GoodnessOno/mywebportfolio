import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import blogPosts from '../../blogData'

const MAX_CONTENT_LENGTH = 200;

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h1 className='sidebar-heading'>Latest Blog Posts</h1>
      <div className='sidebar-content'>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: truncateContent(post.content) }} />
            <div className='sidebar-link'>
            <Link to={`/blog/${post.id}`}>CONTINUE READING</Link>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

const truncateContent = (content) => {
  return content.length > MAX_CONTENT_LENGTH
   ? `${content.substring(0, MAX_CONTENT_LENGTH)}...`
    : content;
};

export default Sidebar
