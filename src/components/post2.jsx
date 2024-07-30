import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import aireactimage  from '../assets/AI IN REACT PROJECTS.png'

const post2 = () => {
  return (
    <Card style={{ backgroundColor: '#f8f9fa', marginBottom: '40px' }}>
        <Card.Body>
        <Card.Img
                variant="top"
                src=
                {aireactimage}
                width={300}
                height={200}
            />
            <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#333' }}>
              Integrating AI into React Projects for Enhanced User Experience</Card.Title>
            <Card.Text>
            Integrating Artificial Intelligence-AI, into React projects can significantly enhance user experience by making web applications smarter and more responsive. 
            This article explores various AI tools and techniques that React developers can use to improve the functionality and interactivity of their web projects.
            </Card.Text>
            <Link 
            className="btn btn-light" 
            to="/blog/integrating-ai-into-react-projects"
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '10px 20px',
              textDecoration: 'none',
              borderRadius: '5px',
              marginTop: '10px',
              display: 'inline-block'
            }}>Click to read full article</Link>
        </Card.Body>
    </Card>
  )
}

export default post2
