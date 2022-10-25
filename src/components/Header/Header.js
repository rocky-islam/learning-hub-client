import React, { useContext } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import './Header.css'
import brand from '../../image/brandImg.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .catch(error => console.error(error))
    }

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
                <Nav.Link>
                    {
                        user?.uid ?
                        <>
                            <span>{user?.displayName}</span>
                            <button onClick={handleLogOut} className='btn btn-outline-danger mx-1'>Log Out</button>
                        </>
                        :
                        <>
                            <Link className='nav-color mx-2' to='/login'>Login</Link>
                            <Link className='nav-color' to='/register'>Register</Link>
                        </>
                    }
                    
                </Nav.Link>
                <Nav.Link eventKey={2}>
                    {
                        user?.photoURL ?
                        <Image style={{height:'30px'}} roundedCircle src={user?.photoURL}></Image>
                        : <FaUserAlt></FaUserAlt>
                    }
                </Nav.Link>
                {/* <Nav.Link>
                    <Link className='nav-color' to='/login'>Login</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link className='nav-color' to='/register'>Register</Link>
                </Nav.Link> */}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    );
};

export default Header;