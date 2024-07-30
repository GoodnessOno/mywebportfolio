import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import growthhackingfrontendimage  from '../assets/Growth frontend image.png'

const post5 = () => {
  return (
    <Card style={{ backgroundColor: '#f8f9fa', marginBottom: '40px' }}>
        <Card.Body>
        <Card.Img
                variant="top"
                src=
                {growthhackingfrontendimage}
                width={350}
                height={200}
            />
            <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#333' }}>
              Integrating Growth Hacking with Frontend Development: Strategies for Success</Card.Title>
            <Card.Text>
            Growth hacking involves innovative marketing strategies aimed at quickly scaling a company, while frontend development focuses on creating engaging and functional user interfaces. 
            By combining these two disciplines, businesses can create powerful, data-driven experiences that drive user acquisition, engagement, and retention.
            </Card.Text>
            <Link 
            className="btn btn-light" 
            to='/blog/integrating-growth-hacking-for-frontend-development'
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

export default post5
