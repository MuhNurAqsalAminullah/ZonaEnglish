import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
// import Icon1 from '../Icon/fa-solid_wifi.png';
// import Icon2 from '../Icon/bi_search.png';

const NavbarComp = () => {
    const [styles1, setStyles1] = useState('navA')
    const [styles2, setStyles2] = useState('navB')
    const [styles3, setStyles3] = useState('navC')
    const [style, setStyle] = useState(null)

    const changeStyle1 = () => {
        console.log("telah terklik")
        setStyles1("navA2")
        setStyles2("navTetap")
        setStyles3("navTetap")
    }

    const changeStyle2 = () => {
        console.log('klik 2');
        setStyles2("navB2")
        setStyles1("navTetap")
        setStyles3("navTetap")
    } 

    const changeStyle3 = () => {
        console.log('klik 3');
        setStyles3("navC2")
        setStyles1("navTetap")
        setStyles2("navTetap")
    } 

    const changeStyle = () => {
        setStyles1("navTetap")
        setStyles2("navTetap")
        setStyles3("navTetap")
    }

    // const navHover = document.querySelector('.boldD')
    // const addHover = () => {
    //     navHover.classList.contains('nav-hovers')
    // }
    return (
        <div>
            <Navbar style={{position:"fixed", width:"100%", background:"#fff", zIndex:"100", boxShadow:"1px 1px 20px rgba(0, 0, 0, 0.3)"}} bg="ligh" expand="lg">
                <div class="container py-2">
                    <Link onClick={changeStyle} to="/">
                        <Navbar.Brand>
                            <img src={logo} />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <div class="navbar-nav align-items-center">
                        {/* <Link to="/">Home</Link>
                        <Link to="/Murid">Murid</Link>
                        <Link to="/Tutor">Tutor</Link> */}
                        {/* <a class="nav-link me-5 text-center">
                            <img src={downloadapp} />
                        </a> */}
                        <Link class="nav-link" to="/#">
                            <a onClick={changeStyle} class="nav-link me-5 text-center text-danger bg-danger text-white rounded-3" style={{paddingLeft:"20px", paddingRight:"20px"}}>Aplikasi</a>
                        </Link>
                        <Link className={styles1} to="/menjadi_murid">
                            <a onClick={changeStyle1} class="me-5 text-center">Menjadi Murid</a>
                        </Link>
                        <Link className={styles2} to="/menjadi_tutor">
                            <a onClick={changeStyle2}  class=" me-5 text-center">Menjadi Tutor</a>
                        </Link>
                        <Link className={styles3} to="/lihat_biaya">
                            <a onClick={changeStyle3} class=" me-5 text-center">Biaya</a>
                        </Link>
                    </div>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default NavbarComp;

{/* <Nav
                    className="mr-auto">
                        <Row>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Col ms={5}> */}
                                {/* <Nav.Link className="bg-danger text-white rounded d-flex mx-1 " href="#action1">
                                    <img className="mx-1" src={Icon1} />
                                    <span className="mx-1 text-uppercase">live</span> <span className="mx-1 text-uppercase">class</span>  
                                    </Nav.Link> */}
                                    {/* <Nav.Link>Aplikasi</Nav.Link>
                            </Col>
                            <Col>
                                <Nav.Link href="#action2">Murid</Nav.Link>
                            </Col>
                            <Col>
                                <Nav.Link href="#action2">INFO</Nav.Link> */}
                                {/* <NavDropdown title="Button" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                </NavDropdown> */}
                            {/* </Col>
                            <Col>
                                <Nav.Link href="#action2">CONTACT</Nav.Link> */}
                                {/* <Nav.Link href="#" disabled>
                                    Link
                                </Nav.Link> */}
                            {/* </Col> */}
                            {/* <Col sm={5}>
                            <Form className="d-flex text-center">
                            <Button variant="outline-success">Search</Button>
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                                
                            />
                            </Form>
                            </Col> */}
                            {/* </Navbar.Collapse>
                        </Row>
                        
                        
                    </Nav> */}