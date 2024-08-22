import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import unitygrowthimage  from '../assets/unitygrowth.jpg'

const Strategy6 = () => {
  return (
    <Card style={{ backgroundColor: '#f8f9fa', marginBottom: '40px' }}>
        <Card.Body style={{ marginBottom: '15rem'}}>
        <Card.Img
                variant="top"
                src=
                {unitygrowthimage}
                width={300}
                height={200}
            />
            <Card.Title style={{ marginTop: '45px', fontWeight: 'bold', fontSize: '1.5rem', color: '#333' }}>
            UNITY FOR GROWTH: The importance of team work in achieving growth in your startup</Card.Title>
            <Card.Text>
            Team Work makes the dream work, so as a startup founder, whatever growth strategy you have can only be achieved when you have the right team. 
            Without the right team you'd find yourself not working at the optimum level you should be working at. In this article, I will be sharing tips on how you can put together the best team and manage them properly
            </Card.Text>
            <Link 
            className="btn btn-light" 
            to="/growthhacking/the-importance-of-team-work-in-startup-growth"
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

export default Strategy6
