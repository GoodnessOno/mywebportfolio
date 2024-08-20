import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ideatomarketimage  from '../assets/idea-team-success.jpg'

const Strategy5 = () => {
  return (
    <Card style={{ backgroundColor: '#f8f9fa', marginBottom: '40px' }}>
        <Card.Body style={{ marginBottom: '15rem'}}>
        <Card.Img
                variant="top"
                src=
                {ideatomarketimage}
                width={300}
                height={200}
            />
            <Card.Title style={{ marginTop: '45px', fontWeight: 'bold', fontSize: '1.5rem', color: '#333' }}>
            FROM IDEA TO MARKET LEADER: STEPS TO BUILD A STARTUP THAT THRIVES IN A BLUE OCEAN</Card.Title>
            <Card.Text>
            In a world where competition is fierce and markets are oversaturated, building a startup that not only survives but dominates requires a different approach. 
            This is where the concept of blue ocean strategy comes into play—finding and creating new market spaces with little to no competition. The challenge is turning a raw idea into a thriving, market-leading business. 
            This comprehensive guide will take you through the exact steps to do just that: from ideation to market leadership in uncontested territories.
            </Card.Text>
            <Link 
            className="btn btn-light" 
            to="/growthhacking/from-idea-to-market-leader"
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

export default Strategy5
