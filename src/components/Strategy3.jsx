import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import innovationforstartupspic from '../assets/innovation picture.jpg'


const Strategy3 = () => {
  return (
    <div>
      <Card style={{ backgroundColor: '#f8f9fa', marginBottom: '40px'}}>
        <Card.Body style={{ marginBottom: '15rem'}}>
        <Card.Img
                variant="top"
                src=
                {innovationforstartupspic}
                width={300}
                height={230}
            />
            <Card.Title style={{ marginTop: '45px', fontWeight: 'bold', fontSize: '1.5rem', color: '#333' }}>
            INNOVATIVE TECHNOLOGIES, TOOLS AND METHODOLOGIES TRANSFORMING STARTUPS</Card.Title>
            <Card.Text>
            With limited resources and intense competition, startups must be strategic in adopting solutions that are not only innovative but also practical and tested. 
            Here is a look at some of the most promising and impactful advancements that are currently helping startups thrive.
            </Card.Text>
            <Link 
            className="btn btn-light" 
            to="/growthhacking/innovative-technologies-tools-and-methodologies-for-startups"
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

export default Strategy3
