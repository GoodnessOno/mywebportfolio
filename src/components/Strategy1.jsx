import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import onlinedatingpic from '../assets/customer image.jpg'


const Strategy1 = () => {
  return (
    <div>
      <Card style={{ backgroundColor: '#f8f9fa', marginBottom: '40px'}}>
        <Card.Body style={{ marginBottom: '15rem'}}>
        <Card.Img
                variant="top"
                src=
                {onlinedatingpic}
                width={300}
                height={200}
            />
            <Card.Title style={{ marginTop: '42px', fontWeight: 'bold', fontSize: '1.5rem', color: '#333' }}>
              GROWTH STRATEGIES -AI-POWERED CUSTOMIZATION FOR ONLINE DATING SERVICE PROVIDERS</Card.Title>
            <Card.Text>
            We all want to feel special and well taken care of, but many startup founders tend to miss this very important factor. 
            Customers are the lifeblood of any business. When scaling startups, your customer's journey from the second they desire the services your industry provides to the actual purchase holds more value for industry expansion and creation than you think.
            </Card.Text>
            <Link 
            className="btn btn-light" 
            to='/growthhacking/ai-in-online-dating-services'
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '10px 20px',
              textDecoration: 'none',
              borderRadius: '5px',
              marginTop: '10px',
              display: 'inline-block'
            }}>Click to read full article
            </Link>
            </Card.Body>
        </Card>
      </div>
  )
}

export default Strategy1
