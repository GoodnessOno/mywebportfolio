import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import jsfatigueimage  from '../assets/JSFATIGUEIMAGE.png'

const post1 = () => {
  return (
    <Card>
        <Card.Body>
        <Card.Img
                variant="top"
                src=
                {jsfatigueimage}
                width={250}
                height={250}
            />
            <Card.Title>Is JavaScript Fatigue Real, and Is It Hindering Innovation in Frontend Development?</Card.Title>
            <Card.Text>
            While some argue that this fast-paced innovation is necessary for progress, others believe that it may be doing more harm than good. 
            In this article, we will explore the concept of JavaScript fatigue, examine its impact on developers and the industry, and discuss whether it is ultimately hindering or driving innovation in frontend development.
            </Card.Text>
            <Link className="btn btn-primary" to="/is-javascript-fatigue-real">Click to read full article</Link>
        </Card.Body>
    </Card>
  )
}

export default post1
