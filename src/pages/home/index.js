import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import './style.css';


export default function Home() {
  return (
    <Container className='mb-3 mt-5 rounded text-dark'>
      <Row className='mt-5 mb-5'>
        <Col sm={12} md={10}>
          <Row className='mb-3 animate__animated animate__pulse'>
            <Col sm={12} md={12} className="text-center text-white">
              <h2 className="fs-1"> Bem Vindo !! </h2>
              <p className="fw-light">Veja os perfis já cadastrados no site.</p>
            </Col>
          </Row>
          <Row>
            {/* arr of profiles */}
            <Col md={4} sm={12} className='mb-4 animate__bounceIn animate__delay-2s'>
              <Card className="shadow">
                <Card.Body>
                  <Row>
                    {/* picture profile */}
                    <Col sm={12} className='justify-content-center mb-3'>
                      <img src="https://pbs.twimg.com/profile_images/1479994028586381320/FgzUwWAj_normal.jpg" className="rounded-circle mx-auto d-block" alt="..." />
                    </Col>
                    {/* title and @ */}
                    <Col sm={12} className='text-center'>
                      <Card.Title className="text-uppercase fs-6">
                        L A R I
                      </Card.Title>
                      <Card.Subtitle className="mb-2 username-text">
                        @bllckmage
                      </Card.Subtitle>
                    </Col>
                  </Row>
                  <Row className='mb-3 text-center'>
                    <Col className='border-end'>
                      <Card.Title className="mb-2">
                        1419
                      </Card.Title>
                      <Card.Subtitle className="text-muted">
                        Seguidores
                      </Card.Subtitle>
                    </Col>
                    <Col>
                      <Card.Title className="mb-2">
                        251
                      </Card.Title>
                      <Card.Subtitle className="text-muted">
                        Seguindo
                      </Card.Subtitle>
                    </Col>
                  </Row>
                  <div class="d-grid gap-2">
                    <button type="button" class="btn btn-orange btn-lg">Ver </button>
                  </div>
              </Card.Body>
            </Card>
        </Col>
      </Row>
    </Col>
      </Row >
    </Container >
  )
};