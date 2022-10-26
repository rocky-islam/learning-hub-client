import React, { useContext, useState } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import './Header.css'
import brand from '../../image/brandImg.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Form, Image, Tooltip } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const Header = () => {
    // toggle btn
    const [open, setOpen] = useState(true);
    
    // toggle btn

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
                        // <Image style={{height:'30px'}} roundedCircle src={user?.photoURL}></Image>
                        <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip id="button-tooltip-2">{user?.displayName}</Tooltip>}
                            >
                            {({ ref, ...triggerHandler }) => (
                                <Nav
                                    {...triggerHandler}
                                    className="d-inline-flex align-items-center"
                                    >
                                    <Image
                                        ref={ref}
                                        roundedCircle
                                        src={user?.photoURL} style={{height:'40px'}}/>
                                </Nav>
                            )}
                        </OverlayTrigger>
                        : <FaUserAlt></FaUserAlt>
                    }
                </Nav.Link>
                <Nav.Link className={open ? 'd-none' : 'd-block'}>
                    night
                </Nav.Link>
                    <Nav className='align-items-md-center ms-2'>
                    <Form className='text-white'>
                        <Form.Check 
                        onClick={()=>setOpen(!open)}
                        type="switch"
                        id="custom-switch"
                        label="Change Theme"
                        />
                    </Form>
                    </Nav>
                {/* tooltip */}
                
                {/* tooltip */}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
    );
};

export default Header;