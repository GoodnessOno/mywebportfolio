import React from 'react'
import './growthhacking.css'
import { Navbar, Footer, Scrolltobottombutton, Scrolltotopbutton } from '../../components'
import headerimage from '../../assets/growth header video.mp4'
import { Container, Row, Col } from 'react-bootstrap'
import Strategy1 from '../../components/Strategy1'
import Strategy2 from '../../components/Strategy2'
import Strategy3 from '../../components/Strategy3'
import Strategy4 from '../../components/Strategy4'
import Strategy5 from '../../components/Strategy5'
import Strategy6 from '../../components/Strategy6'

const Growthhacking = () => {
  return (
    <div className='growthhacking'>
      <Navbar />
      <video className='growthhacking-video' autoPlay muted loop>
        <source src={headerimage} type="video/mp4" />
      </video>
      <Container>
        <Row className='growthhacking-row'>
          <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col1'>
            <h1>Growth Hacking</h1>
          </Col>
        </Row>
      <Row className='growthhacking-row'>
      <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col'>
        My journey to becoming a growth hacker is one guided by my deep passion for growth, experimentation and exploring new opportunities. 
        This desire fueled my search for a career that would allow me live my dreams and still make impact. From storytelling, to copywriting, to data analysis, to idea generation, to consumer analysis, and now growth hacking and frontend development,
        my career journey has been one of crafting the best user experience while still engineering growth. I am currently in search of my first real world growth hacking experience and I am open to joining a startup that I can contribute to acheiveing their business goals and expand their outreach.
        <br />
        <br />
        Growth hacking is the intersection of technology, design, and business strategy. It involves creating and launching products or services that are not only profitable but also have a positive impact on people's lives.
        Growth hackers use data analysis, user testing, and market research to identify the most effective ways to improve a product or service. They then develop and launch these products or services, and continue to gather feedback and make improvements based on that feedback.
        Growth hackers are often involved in the early stages of product development, design, and launch, but they also have the opportunity to contribute to the ongoing development and improvement of products and services.
      </Col>
      </Row>
      <Row className='growthhacking-row'>
        <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col'>
        <h2>Why Growth Hacking?</h2>
        <ul>
          <li>Innovation and creativity</li>
          <li>Improve user experience</li>
          <li>Drive business growth</li>
          <li>Enhance customer satisfaction</li>
          <li>Personal growth</li>
        </ul>
      </Col>
      <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col'>
      <h2>Skills</h2>
      <ul>
          <li>Growth hacking - Ideation, Planning, Implementation</li>
          <br />
          <li>Product development</li>
          <br />
          <li>Project Management</li>
          <br />
          <li>Design - UI/UX, Front-end Development</li>
          <br />
          <li>User testing</li>
          <br />
          <li>Data analysis</li>
          <br />
          <li>Market research</li>
        </ul>
      </Col>
      </Row>
      <hr />
      <br />
      <Row className='growthhacking-row'>
      <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col1'>
        <h2>HOW I WORK!</h2>
      </Col>
      </Row>
      <Row className='growthhacking-row'>
      <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col1'>
        <h3>
        1. RESEARCH AND DISCOVERY
        </h3>
      </Col>
      <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col1'>
        <h3>
        2. IDEATION
        </h3>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col1'>
        <h3>3. STRATEGY</h3>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col1'>
        <h3>4. PLANNING</h3>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col1'>
        <h3>5. EXECUTION</h3>
        </Col>
      </Row>
      <Row className='growthhacking-row'>
      <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col1'>
        <h3>6. ANALYSIS</h3>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col1'>
        <h3>7. OPTIMIZATION</h3>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col1'>
        <h3>8. SCALING</h3>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col1'>
        <h3>9. REVIEW AND DOCUMENTATION</h3>
        </Col>
      </Row>
      <hr />
      <br />
      <Row className='growthhacking-row2'>
        <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col3'>
        <h1>GROWTH HACKING STRATEGIES</h1>
        </Col>
      </Row>
      <Row className='growthhacking-row1'>
        <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col2'>
        <Strategy1 />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col2'>
        <Strategy2 />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col2'>
        <Strategy3 />
        </Col>
      </Row>
      <Row className='growthhacking-row1'>
        <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col2'>
        <Strategy4 />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col2'>
        <Strategy5 />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col2'>
        <Strategy6 />
        </Col>
      </Row>
      </Container>
      <br />
      <br />
      <Scrolltobottombutton />
      <Scrolltotopbutton />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default Growthhacking
