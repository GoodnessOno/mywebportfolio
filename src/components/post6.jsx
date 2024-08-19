import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import customerretentionimage  from '../assets/Customer-retention.jpg'

const post6 = () => {
  return (
    <Card style={{ backgroundColor: '#f8f9fa', marginBottom: '40px' }}>
        <Card.Body>
        <Card.Img
                variant="top"
                src=
                {customerretentionimage}
                width={320}
                height={200}
            />
            <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#333' }}>
            Boost Your Startup’s Growth: Proven Growth Hacking Strategies to Optimize Customer Retention and Reduce Churn</Card.Title>
            <Card.Text>
            Customer retention is crucial for any startup, as it drives sustainable growth and helps maintain the loyalty and trust of its customers.
            Here are some proven growth hacking strategies to optimize customer retention and reduce churn for your startup.
            </Card.Text>
            <Link 
            className="btn btn-light" 
            to="/blog/proven-growth-hacking-strategies-to-optimize-customer-retention" 
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

export default post6
