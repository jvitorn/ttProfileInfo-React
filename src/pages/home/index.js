import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Container, Card } from 'react-bootstrap';
import './style.css';
//services from api 
import service from '../../services/api';

export default function Home() {
  const history = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const token = localStorage.getItem('token');
  //verificar todos os perfils 
  useEffect(async () => {
    if (!token) history('/');
    const perfils = await service.listarPerfis();
    setProfiles(perfils.data.profile);
  }, [token]);
  function handleViewProfile(id) {
    try {
      history(`/profile/${id}`);
    } catch (err) {
      console.error('erro', err);
    }
  }
  return (
    <Container className='mb-3 mt-5 rounded text-dark'>
      <Row className='mt-5 mb-5'>
        <Col sm={12} md={12}>
          <Row className='mb-3 animate__animated animate__pulse'>
            <Col sm={12} md={12} className="text-center text-white">
              <h2 className="fs-1"> Bem Vindo !! </h2>
              <p className="fw-light">Veja os perfis já cadastrados no site.</p>
            </Col>
          </Row>
          <Row>
            {/* arr of profiles */}
            {profiles.map(profile => (
              <Col md={4} sm={12} className='mb-4 animate__bounceIn animate__delay-2s'>
                <Card className="shadow">
                  <Card.Body>
                    <Row>
                      {/* picture profile */}
                      <Col sm={12} className='justify-content-center mb-3'>
                        <img src={profile.img} className="rounded-circle mx-auto d-block" alt="..." />
                      </Col>
                      {/* title and @ */}
                      <Col sm={12} className='text-center'>
                        <Card.Title className="text-uppercase fs-6">
                          {profile.title}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 username-text">
                          @{profile.username}
                        </Card.Subtitle>
                      </Col>
                    </Row>
                    <Row className='mb-3 text-center'>
                      <Col className='border-end'>
                        <Card.Title className="mb-2">
                          {profile.followers}
                        </Card.Title>
                        <Card.Subtitle className="text-muted">
                          Seguidores
                        </Card.Subtitle>
                      </Col>
                      <Col>
                        <Card.Title className="mb-2">
                          {profile.friends}
                        </Card.Title>
                        <Card.Subtitle className="text-muted">
                          Seguindo
                        </Card.Subtitle>
                      </Col>
                    </Row>
                    <div className="d-grid gap-2">
                      <button type="button" onClick={() => handleViewProfile(profile._id)} className="btn btn-orange btn-lg">Ver </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row >
    </Container >
  )
};