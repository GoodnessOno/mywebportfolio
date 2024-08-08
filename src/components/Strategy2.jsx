import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import customerjourneypic from '../assets/bridge-customerjourney.jpg'


const Strategy1 = () => {
  return (
    <div>
      <Card style={{ backgroundColor: '#f8f9fa', marginBottom: '40px'}}>
        <Card.Body style={{ marginBottom: '15rem'}}>
        <Card.Img
                variant="top"
                src=
                {customerjourneypic}
                width={300}
                height={230}
            />
            <Card.Title style={{ marginTop: '45px', fontWeight: 'bold', fontSize: '1.5rem', color: '#333' }}>
              GROWTH OPPORTUNITIES WITHIN YOUR CUSTOMER'S JOUNEY</Card.Title>
            <Card.Text>
                Your customer's journey from the second they develop a desire for the service your company provides to the comparison phase where
                they decide if they want Company A or Company B, holds more growth opportunities than you think. In this article, I will be giving tips to effectively monitor and take advantage of the
                growth opportunities in every step of your customer's journey.
            </Card.Text>
            <Link 
            className="btn btn-light" 
            to="/growthhacking/pay-attention-to-your-customer's-journey"
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '10px 20px',
              textDecoration: 'none',
              borderRadius: '5px',
              marginTop: '15px',
              display: 'inline-block'
            }}>Click to read full article
            </Link>
            </Card.Body>
        </Card>
      </div>
  )
}

export default Strategy1
