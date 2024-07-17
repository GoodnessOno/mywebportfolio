import React from 'react';
import Post1 from '../../components/post1';
import Post2 from '../../components/post2';
import { Container, Row, Col } from 'react-bootstrap';
import './blog.css';
import { Navbar, Footer } from '../../components';
const Posts = () => {
  return (
      <Container className='blog'>
        <Navbar />
      <Row className="blog-row">
          <Col xs={8} md={8} className="blog-col">
            <Post1 />
          </Col>
          <Col xs={12} md={8} className="blog-col">
            <Post2 />
          </Col>
      </Row>
      <Row className="blog-row">
          <Col xs={12} md={8} className="blog-col">
            <Post1 />
          </Col>
      </Row>
      <Footer />
      </Container>
  );
};

export default Posts;
