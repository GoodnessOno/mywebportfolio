import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './wordpress.css';
import { Link } from 'react-router-dom'

const Wordpress = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(`https://public-api.wordpress.com/wp/v2/sites/vibrant-goodnessn.wordpress.com/posts?page=${page}&search=${search}`)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from WordPress:', error);
      });
  }, [page, search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page > 1 ? page - 1 : 1);
  };

  return (
    <div>
      <h1>WordPress Posts</h1>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={handleSearchChange}
      />
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <Link to={`/wordpress/${post.id}`}>Read more</Link>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={prevPage} disabled={page === 1}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};

export default Wordpress;
