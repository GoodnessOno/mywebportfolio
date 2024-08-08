import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Strategy1 from '../Strategy1'
import Strategy2 from '../Strategy2'

const Growthstrategies = () => {
  return (
    <Container>
      <Row className='growthstrategies-row'>
      <Col xs={12} sm={12} md={6} lg={4} className='growthhacking-col1'>
        <h3>GROWTH STRATEGIES</h3>
        </Col>
      </Row>
      <Row className='growthstrategies-row'>
        <Col xs={12} sm={12} md={6} lg={4} className='growthstrategies-col'>
        <Strategy1 />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} className='growthstrategies-col'>
        <Strategy2 />
        </Col>
      </Row>
    </Container>
  )
}

export default Growthstrategies
