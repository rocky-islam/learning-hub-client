import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
      <div className="my-4">
        <Container>
          <Row>
            <Col md="6" sm='6'>
              <div className='text-center text-sm-start'>
                <h2>Welcome To</h2>
                <h1>
                  <Typewriter
                    options={{
                      strings: ["Learning-Hub"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <h2>Website</h2>
              </div>
            </Col>
            <Col md="6" sm='6'>Logo</Col>
          </Row>
        </Container>
      </div>
    );
};

export default Home;