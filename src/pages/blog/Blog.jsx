import React from 'react';
import Post1 from '../../components/post1';
import Post2 from '../../components/post2';
import { Container, Row, Col } from 'react-bootstrap';
import './blog.css';
import { Navbar, Footer } from '../../components';

const Posts = () => {
  return (
    <div className='blog'>
      <Navbar />
      <Container>
      <Row className='blog-row'>
          <Col xs={12} sm={12} md={6} lg={4} className="blog-col">
            <Post1 />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} className="blog-col">
          <Post2 />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className="blog-col">
            <Post1 />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} className="blog-col">
          <Post1 />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className="blog-col">
            <Post1 />
          </Col>
        </Row>
        <Row className='blog-row'>
          <Col xs={12} sm={12} md={6} lg={4} className="blog-col">
            <Post1 />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} className="blog-col">
          <Post1 />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className="blog-col">
            <Post1 />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} className="blog-col">
          <Post1 />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className="blog-col">
            <Post1 />
          </Col>
        </Row>
        <Row className='blog-row'>
          <Col xs={12} sm={12} md={6} lg={4} className="blog-col">
            <Post1 />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} className="blog-col">
          <Post1 />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className="blog-col">
            <Post1 />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} className="blog-col">
          <Post1 />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className="blog-col">
            <Post1 />
          </Col>
        </Row>
        <Row className='blog-row'>
          <Col xs={12} sm={12} md={6} lg={4} className="blog-col">
            <Post2 />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} className="blog-col">
            <Post1 />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} className="blog-col">
          <Post1 />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className="blog-col">
            <Post1 />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} className="blog-col">
            <Post1 />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
};

export default Posts;
