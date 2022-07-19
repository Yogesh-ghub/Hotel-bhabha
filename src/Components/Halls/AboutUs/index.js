import React from 'react'
import bigImg from '../../../Assets/images/weeding.jpg'
import smallImg1 from '../../../Assets/images/gallery8.jpg'
import { Container, Row, Col} from 'react-bootstrap'

import './index.css'
const AboutHall = () => {
  return (
    <Container>
        <Row>
            <Col md={6}>
                <div className="parent">
                    <div className="left"></div>
                    <div className="right">
                        <h1>This is a heading</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia assumenda dolore reprehenderit ullam blanditiis ex sapiente pariatur tempore incidunt facilis?</p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    
  )
}

export default AboutHall