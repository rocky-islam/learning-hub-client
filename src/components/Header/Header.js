import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import './Header.css'
import brand from '../../image/brandImg.png'

const Header = () => {
    return (
      <div>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand >
                <img
                alt="brandImg"
                src={brand}
                width="35"
                height="35"
                className="d-inline-block align-top"
            />
                <Link className='brand ms-2' to='/'>Learning-Hub</Link>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link ><Link className='nav-color' to='/'>Home</Link></Nav.Link>
                <Nav.Link><Link className='nav-color' to='/courses'>Courses</Link></Nav.Link>
                <Nav.Link ><Link className='nav-color' to='/blog'>Blog</Link></Nav.Link>
                <Nav.Link ><Link className='nav-color' to='/faq'>Faq</Link></Nav.Link>
                
                
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;