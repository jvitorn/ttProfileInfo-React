import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Form, Container } from 'react-bootstrap';
//stylesheet
import './style.css';
//services from api 
import service from '../../services/api';

export default function Logon() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const history = useNavigate();
  //handle para logar
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const dados = await service.login(user,pass);
      const {token} = dados.data;
      localStorage.setItem('token',token);
      history('/home');
    } catch (err) {
      console.error('erro',err);
    }
  }
  return (
    <section className="mt-5">
      <Container className='mb-3 mt-5 bg-white text-dark rounded p-5'>
        <Row className="justify-content-center mt-5">
          <Col md={12} lg={10} className="rounded">
            <Row>
              <Col md={12} className="p-md-5">
                <div className="d-flex justify-content-center">
                  <div className='w-75'>
                    <img className='img-fluid rounded-circle mx-auto d-block' src='https://i.pinimg.com/originals/71/7c/91/717c910defbeae6273038f2a1cfcdb2f.gif' />
                  </div>
                </div>
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3">
                    <Form.Label>Usuario:</Form.Label>
                    <Form.Control type="text" required value={user} onChange={e => setUser(e.target.value)} className={user.length > 2 ? 'is-valid': null} size="lg" placeholder="Digite o usúario" />
                  </Form.Group>
                  <Form.Group className="mb-5">
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control  type="password" required value={pass} onChange={e => setPass(e.target.value)} className={pass.length > 2 ? 'is-valid': null} size="lg" placeholder="Digite a senha" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <button type="submit" className="form-control btn-orange rounded btn-lg">
                      Entrar
                    </button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};