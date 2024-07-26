import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import futurefrontendimage  from '../assets/FUTURE FRONTEND DEV.png'

const post4 = () => {
  return (
    <Card style={{ backgroundColor: '#f8f9fa', marginBottom: '40px' }}>
        <Card.Body>
        <Card.Img
                variant="top"
                src=
                {futurefrontendimage}
                width={350}
                height={200}
            />
            <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#333' }}>
              The Future of Front-end Development: Trends to Watch</Card.Title>
            <Card.Text>
            Staying ahead of these trends is crucial for developers who want to remain competitive and create cutting-edge web applications. 
            This article explores the key trends shaping the future of front-end development and how developers can leverage these advancements to enhance their projects.
            </Card.Text>
            <Link 
            className="btn btn-light" 
            to='/future-of-frontend-development'
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

export default post4
