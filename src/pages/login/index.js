import React from 'react';
import { Row, Col, Form, Container } from 'react-bootstrap';
import './style.css';


export default function Logon() {

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={12} lg={10} className="rounded">
          <Row>
            <Col md={12} className="p-md-5">
              <div className="d-flex justify-content-center">
                <div className='w-75'>
                  <img className='img-fluid rounded-circle mx-auto d-block' src='https://i.pinimg.com/originals/71/7c/91/717c910defbeae6273038f2a1cfcdb2f.gif' />
                </div>
              </div>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Usuario:</Form.Label>
                  <Form.Control type="email" size="lg" placeholder="Digite o usúario" />
                </Form.Group>
                <Form.Group className="mb-5">
                  <Form.Label>Senha:</Form.Label>
                  <Form.Control type="password" size="lg" placeholder="Digite a senha" />
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

  );
};