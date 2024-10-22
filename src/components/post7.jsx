import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import owaspjuiceimage  from '../assets/Owasp image.jfif'

const post7 = () => {
  return (
    <Card style={{ backgroundColor: '#f8f9fa', marginBottom: '40px' }}>
        <Card.Body>
        <Card.Img
                variant="top"
                src=
                {owaspjuiceimage}
                width={320}
                height={200}
            />
            <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#333' }}>
            Penetration Testing on OWASP Juice Shop: Vulnerabilities and Mitigation</Card.Title>
            <Card.Text>
            The goal of this project was to conduct a thorough penetration test on Juice Shop to identify vulnerabilities and propose remediation strategies based on OWASP best practices.
            </Card.Text>
            <Link 
            className="btn btn-light" 
            to="/blog/owasp-juice-shop-pentesting" 
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

export default post7
