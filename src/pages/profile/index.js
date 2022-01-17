import React from 'react';
import { Row, Col, Container, ListGroup } from 'react-bootstrap';
import { FiArrowLeftCircle, FiMinusCircle, FiMapPin, FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import './style.css';




export default function Profile() {
  return (
    <Container>
      <Row className="p-4">
        <Col className='text-orange animate__animated animate__fadeInTopLeft '>
          <h1 className="">&nbsp;<FiArrowLeftCircle className='events'/></h1>
        </Col>  
        <Col className='text-orange animate__animated animate__fadeInTopLeft '>
          <h1 className="text-end "><FiMinusCircle className='events'/></h1>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} className="justify-content-center">
          <Row>
            <Col sm={6} md={6} className='offset-3 mb-2'>
              <img src="https://pbs.twimg.com/profile_images/1479994028586381320/FgzUwWAj_normal.jpg"
                className="rounded-circle p-2 mx-auto d-block border-orange events" lt="..." />
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col sm={12} className="text-center">
              <h2 className="text-capitalize">L A R I</h2>
              <span className="text-orange animate__animated animate__fadeInUp">
                @bllckmage
                <span className="text-muted text-lowercase">
                  (Ela)
                </span>
                <br />
                <span className="text-muted fw-bold animate__animated animate__animated animate__delay-2s">
                  <FiMapPin />&nbsp;Elfhame
                </span>
              </span>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col className='text-center'>
              <p className="text-muted text-break animate__animated animate__animated animate__delay-2s">
                futura estudante de física e nerdola até demais • intj • 19y • bookstan • she/her
              </p>
            </Col>
          </Row>
          {/* Seguidores */}
          <Row className='mb-5 text-center'>
            <Col className='border-end'>
              <h5 className="card-title mb-2">1419</h5>
              <h6 className="card-subtitle mb2 text-orange  animate__animated animate__fadeInUp">Seguidores</h6>
            </Col>
            <Col>
              <h5 className="card-title mb-2">23234</h5>
              <h6 className="card-subtitle mb2 text-orange  animate__animated animate__fadeInUp">Seguindo</h6>
            </Col>
          </Row>
          {/* likes and dislikes */}
          <Row className='mb-3'>
            <Col sm={9} md={9} className='offset-1 justify-content-center'>
              <Row className='justify-content-center'>
                <Col md={2} className='offset-2 p-3 rounded border border-success text-center text-success animate__animated animate__pulse'>
                  <FiThumbsUp size={30} />
                </Col>
                <Col md={2} className='offset-4 p-3 rounded border border-danger text-center text-danger animate__animated animate__pulse'>
                  <FiThumbsDown size={30} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='p-2 mb-5'>
            <Col sm={4} className='offset-2 border-end text-center text-success animate__animated animate__fadeInUp'>
              <ListGroup>
                <ListGroup.Item className='bg-dark text-success border-0'>This</ListGroup.Item>
                <ListGroup.Item className='bg-dark text-success border-0'>ListGroup</ListGroup.Item>
                <ListGroup.Item className='bg-dark text-success border-0'>renders</ListGroup.Item>
                <ListGroup.Item className='bg-dark text-success border-0'>horizontally!</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={5} className='text-center text-danger'>
              <ListGroup>
                <ListGroup.Item className='bg-dark text-danger border-0'>This</ListGroup.Item>
                <ListGroup.Item className='bg-dark text-danger border-0'>ListGroup</ListGroup.Item>
                <ListGroup.Item className='bg-dark text-danger border-0'>renders</ListGroup.Item>
                <ListGroup.Item className='bg-dark text-danger border-0'>horizontally!</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container >
  )
}