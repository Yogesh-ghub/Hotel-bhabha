import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import executiveRoom from '../../Assets/images/executive-room.jpeg'
import './index.css'
const RoomDropdown = (props) => {
  return (
    <div >
        {/* <Container> */}
            
            {/* <Row className="justify-content-center"> */}
                <Col lg={2}>
                    <div>
                        <img className="img img-fluid" src={executiveRoom} alt="executive room" /> 
                        <h5 className="text-center">Executive room</h5>
                    </div>
                </Col>
                <Col lg={2}>
                    <div>
                        <img className="img img-fluid" src={executiveRoom} alt="executive room" />
                        <h5 className="text-center">Superior room</h5>
                    </div>
                </Col>
                <Col lg={2}>
                    <div>
                        <img className="img img-fluid" src={executiveRoom} alt="executive room" />
                        <h5 className="text-center">Deluxe room</h5>
                    </div>
                </Col>
                <Col lg={2}>
                    <div>
                        <img className="img img-fluid" src={executiveRoom} alt="executive room" />
                        <h5 className="text-center">Family room</h5>
                        
                    </div>
                </Col>
                <Col lg={2}>
                    <div>
                        <img className="img img-fluid" src={executiveRoom} alt="executive room" />
                        <h5 className="text-center">Standard room</h5>
                    </div>
                </Col>
            {/* </Row> */}
         {/* </Container> */}
    </div>
  )
}

export default RoomDropdown