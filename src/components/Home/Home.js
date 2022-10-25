import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import homeImg from '../../image/homeImg.gif'
import './Home.css'

const Home = () => {
    return (
      <div className="my-4">
        <Container>
          <Row>
            <Col md="6">
              <div className="mt-4 d-flex flex-column justify-content-center text-sm-start text-center h-75 w-100">
                <h2>Welcome To</h2>
                <h1 className='text-info'>
                  <Typewriter
                    options={{
                      strings: ["Learning-Hub"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <h2>Website</h2>
                <div>
                  <p>
                    Dive in and learn form scratch! learning all you want to
                    know. and explore the world
                  </p>
                  <p>
                    I am glad that you have made it here to send a distress
                    signal, and inform the Senate that all on board were killed.
                    Dantooine. I’m not going to Alderaan. I really got to go.
                    But that to me.
                  </p>
                  <p className='btn btn-info'><Link className='btn_c' to='/courses'>See Course</Link></p>
                </div>
              </div>
              <div></div>
            </Col>
            <Col md="6">
              <div>
                <img className="img-fluid" src={homeImg} alt="" />
              </div>
            </Col>
          </Row>
          <div>
            <Row>
                <Col md='6'>
                    <img className='img-fluid w-100' src="https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1659633680/BestColleges.com/BC_Header-2022-Online-Education-Trends_3.22/BC_Header-2022-Online-Education-Trends_3.22.22_26539ecd1a?_i=AA" alt="" />
                </Col>
                <Col md='6'>
                    <div className='ps-md-5 mt-4'>
                        <p className='btn bg-info'>About Us</p>
                        <h2>We help individuals to </h2>
                        <h2>become their best version</h2>
                        <br />
                        <p>I am glad that you have made it here to send a distress signal, and inform the Senate that all on board were killed. Dantooine. I’m not going to Alderaan. I really got to go. But that to me.</p>
                    </div>
                </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
};

export default Home;