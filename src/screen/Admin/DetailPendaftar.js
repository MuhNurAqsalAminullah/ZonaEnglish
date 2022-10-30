import React, { useCallback } from 'react';

import {
    Badge,
    Button,
    Card,
    Form,
    Navbar,
    Nav,
    Container,
    Row,
    Col,
  } from "react-bootstrap";

const DetailPendaftar = ({setSuccess}) => {
    // const changeSuccess = useCallback(() =>{
    //     setSuccess("style-success")
    // })
    return (
        <div style={{backgroundColor:"#F2F2F2"}} >
            <Container>
                <Row>
                    <Col md="8" className="mt-4">
                        <Card>
                        <Card.Header>
                            <Card.Title as="h4">Data Profile</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                            <Row>
                                <Col className="pr-1" md="6">
                                <Form.Group>
                                    <label className="labelStayle">University/Organization</label>
                                    <Form.Control
                                    defaultValue="Creative Code Inc."
                                    disabled
                                    placeholder="Company"
                                    type="text"
                                    ></Form.Control>
                                </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                <Form.Group>
                                    <label className="labelStayle" htmlFor="exampleInputEmail1">
                                    Email
                                    </label>
                                    <Form.Control
                                    defaultValue="michael24@gmail.com"
                                    placeholder="Email"
                                    type="email"
                                    ></Form.Control>
                                </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="6">
                                <Form.Group>
                                    <label className="labelStayle">Nama Depan</label>
                                    <Form.Control
                                    defaultValue="Mike"
                                    placeholder="Company"
                                    type="text"
                                    ></Form.Control>
                                </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                <Form.Group>
                                    <label className="labelStayle">Nama Belakang</label>
                                    <Form.Control
                                    defaultValue="Andrew"
                                    placeholder="Last Name"
                                    type="text"
                                    ></Form.Control>
                                </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                <Form.Group>
                                    <label className="labelStayle">Jenis Kelamin</label>
                                    <Form.Control
                                    defaultValue="Laki-Laki"
                                    placeholder="Jenis Kelamin"
                                    type="text"
                                    ></Form.Control>
                                </Form.Group>
                                </Col>
                                <Col md="6">
                                <Form.Group>
                                    <label className="labelStayle">Tanggal Lahir</label>
                                    <Form.Control
                                    defaultValue="01/10/2000" disabled
                                    placeholder="Tanggal Lahir"
                                    type="text"
                                    ></Form.Control>
                                </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <label className="labelStayle">Sosial Media Accounts</label>
                                    <Form.Control
                                    defaultValue="https://www.instagram.com/muh_sallu/" disabled
                                    placeholder="Sosial Media Accounts"
                                    type="text"
                                    ></Form.Control>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <label className="labelStayle">Curriculum Vitae (CV)</label>
                                <div>
                                    <img
                                    class="img-thumbnail"
                                    alt="..."
                                    src={
                                        require("../../images/CV.jpg")
                                        .default
                                    }
                                    ></img>
                                </div>
                                </Col>
                            </Row>
                            <div className="clearfix"></div>
                            </Form>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md="4" className="mt-4">
                        <Card className="card-user">
                        <img src={require("../../images/contoh.JPG").default} class="img-thumbnail" alt="..." />
                        <hr></hr>
                        <div style={{padding:"0 0 10px 10px"}}>
                            <button type="button" class="btn btn-success" style={{marginRight:"10px"}}>Lolos</button>
                            <button type="button" class="btn btn-danger">Gagal</button>
                        </div>
                        {/* <div className="button-container mr-auto ml-auto">
                            <Button
                            className="btn-simple btn-icon"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="link"
                            >
                            <i className="fab fa-facebook-square"></i>
                            </Button>
                            <Button
                            className="btn-simple btn-icon"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="link"
                            >
                            <i className="fab fa-twitter"></i>
                            </Button>
                            <Button
                            className="btn-simple btn-icon"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="link"
                            >
                            <i className="fab fa-google-plus-square"></i>
                            </Button>
                        </div> */}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DetailPendaftar;