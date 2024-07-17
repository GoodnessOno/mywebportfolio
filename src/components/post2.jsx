import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import optimizedreactimage  from '../assets/optimizedreactperformance.png'

const post1 = () => {
  return (
    <Card>
        <Card.Body>
        <Card.Img
                variant="top"
                src=
                {optimizedreactimage}
                width={250}
                height={250}
                margin-bottom={30}
            />
            <Card.Title>Optimizing Performance in React Applications</Card.Title>
            <Card.Text margin-bottom={30}>
            Performance optimization in React applications is critical for delivering a fast and seamless user experience. 
            Optimized performance not only enhances user satisfaction but also improves SEO rankings and reduces resource consumption, leading to lower operational costs. 
            In this article, we will explore various techniques to identify and resolve performance bottlenecks in React applications, ensuring that your app runs smoothly and efficiently.
            </Card.Text>
            <Link className="btn btn-primary" to="/is-javascript-fatigue-real">Click to read full article</Link>
        </Card.Body>
    </Card>
  )
}

export default post1