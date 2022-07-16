import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaWifi, FaBath } from "react-icons/fa";
import { IoIosBed } from 'react-icons/io'
import { MdOutlineDoorSliding } from 'react-icons/md'
import { CgScreen } from 'react-icons/cg'

import './index.css'
const Facilities = () => {
  return (
    <Container className="facility-container">
        <Row>
            <div className="facility-title">
                <h2 className="division-heading">Facilities</h2>
            </div>
            
            <Col sm={12} md>
                <div className="facility-item">
                    <div className="d-flex justify-content-center ">
                        <span className="facility-icon"><FaWifi size={48}  /></span>
                    </div>
                   
                    <div className="facility-text">
                        <h3>Wifi</h3>
                    </div>
                </div>
            </Col>
            <Col sm={12} md>
                <div className="facility-item">
                    <div className="d-flex justify-content-center ">
                        <span className="facility-icon"><IoIosBed size={48}  /></span>
                    </div>
                   
                    <div className="facility-text">
                        <h3>Cozy Rooms</h3>
                    </div>
                </div>
            </Col>
            <Col sm={12} md>
                <div className="facility-item">
                    <div className="d-flex justify-content-center ">
                        <span className="facility-icon"><MdOutlineDoorSliding size={48}  /></span>
                    </div>
                   
                    <div className="facility-text">
                        <h3>Wardrobe</h3>
                    </div>
                </div>
            </Col>
            <Col sm={12} md>
                <div className="facility-item">
                    <div className="d-flex justify-content-center ">
                        <span className="facility-icon"><CgScreen size={48}  /></span>
                    </div>
                   
                    <div className="facility-text">
                        <h3>plasma TV</h3>
                    </div>
                </div>
            </Col>
            <Col sm={12} md>
                <div className="facility-item">
                    <div className="d-flex justify-content-center ">
                        <span className="facility-icon"><FaBath size={48}  /></span>
                    </div>
                   
                    <div className="facility-text">
                        <h3>Bath Tub</h3>
                    </div>
                </div>
            </Col>
            
        </Row>
    </Container>
  )
}

export default Facilities