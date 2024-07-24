import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import jsfatigueimage  from '../assets/JSFATIGUEIMAGE.png'

const post1 = () => {
  return (
    <Card style={{ backgroundColor: '#f8f9fa', marginBottom: '40px'}}>
        <Card.Body>
        <Card.Img
                variant="top"
                src=
                {jsfatigueimage}
                width={300}
                height={200}
            />
            <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#333' }}>
              Is JavaScript Fatigue Real, and Is It Hindering Innovation in Frontend Development?</Card.Title>
            <Card.Text>
            While some argue that this fast-paced innovation is necessary for progress, others believe that it may be doing more harm than good. 
            In this article, we will explore the concept of JavaScript fatigue, examine its impact on developers and the industry, and discuss whether it is ultimately hindering or driving innovation in frontend development.
            </Card.Text>
            <Link 
            className="btn btn-light" 
            to="/is-javascript-fatigue-real"
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

export default post1
