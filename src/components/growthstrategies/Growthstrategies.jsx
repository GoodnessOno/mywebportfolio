import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Strategy1 from '../Strategy1'

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
      </Row>
    </Container>
  )
}

export default Growthstrategies
