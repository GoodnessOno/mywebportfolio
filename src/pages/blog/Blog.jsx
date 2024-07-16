import React from 'react';
import Post1 from '../../components/post1';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './blog.css';

const Blog = () => {
  return (
    <Container className='blog'>
      <Row className="justify-content-between mt-5">
        <Col lg={8} className="mb-5">
          <Post1 />
        </Col>
        <Col lg={4} className='mb-5'>
          <Card>
            <Card.Body>
              <Card.Title>Recent Posts</Card.Title>
              <ul className='list-unstyled'>
                <li>
                  <Link to="/is-javascript-fatigue-real">IS JAVASCRIPT FATIGUE REAL?</Link>
                </li>
                {/* Add more links as needed */}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;

