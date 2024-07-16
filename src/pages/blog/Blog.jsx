import React from 'react'
import './blog.css'
import Post1  from '../../components/post1'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//import Wordpress from '../../components/wordpress/Wordpress'

const Blog = () => {
  return (
    <Container className='blog'>
      <Row className="justify-content-between">
        <Col md={8} className="mb-4 mt-4">
          <Post1 />
        </Col>
        <Col md={2} className='mt-4 float-right'>
          <Card>
            <Card.Body>
              <Card.Title>Recent Posts</Card.Title>
              <ul className='list-unstyled'>
              <Link to="/is-javascript-fatigue-real">IS JAVASCRIPT FATIGUE REAL?</Link>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Blog
