import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import aipersonalisedmarketimage  from '../assets/AI PERSONALISED MARKETING.png'

const post3 = () => {
  return (
    <Card style={{ backgroundColor: '#f8f9fa', marginBottom: '40px'}}>
        <Card.Body>
        <Card.Img
                variant="top"
                src=
                {aipersonalisedmarketimage}
                width={300}
                height={200}
            />
            <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#333' }}>
            Leveraging AI for Personalized Marketing in React Development</Card.Title>
            <Card.Text>
            By leveraging AI, React developers can create highly personalized experiences that cater to individual user preferences and behaviors. 
            This article explores how AI can be used to enhance personalized marketing in React development and provides practical techniques for implementation
            </Card.Text>
            <Link 
            className="btn btn-light" 
            to="/blog/leveraging-ai-for-personalised-marketing"
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

export default post3
