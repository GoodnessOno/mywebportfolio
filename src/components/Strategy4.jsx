import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import growthforindustriespic from '../assets/growthkey.jpg'


const Strategy4 = () => {
  return (
    <div>
      <Card style={{ backgroundColor: '#f8f9fa', marginBottom: '40px'}}>
        <Card.Body style={{ marginBottom: '15rem'}}>
        <Card.Img
                variant="top"
                src=
                {growthforindustriespic}
                width={300}
                height={200}
            />
            <Card.Title style={{ marginTop: '45px', fontWeight: 'bold', fontSize: '1.5rem', color: '#333' }}>
              GROWTH STRATEGIES FOR STARTUPS ACROSS INDUSTRIES - AI, SAAS, TECH, FITNESS etc</Card.Title>
            <Card.Text>
            While originally associated with tech startups, growth hacking strategies can be effectively applied across various industries, including health, AI, tech, fitness, SaaS, and IT.
            In this article, we will explore comprehensive growth hacking strategies tailored to different industries. 
            Whether you're in the health sector looking to increase patient engagement, an AI startup aiming to scale, or a SaaS company trying to boost user retention, these strategies will provide you with actionable insights to drive your startup's growth.
            </Card.Text>
            <Link 
            className="btn btn-light" 
            to='/growthhacking/growthhacking-strategies-for-startups-across-industries'
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

export default Strategy4
