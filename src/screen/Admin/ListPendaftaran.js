import React ,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
    Table,
  } from "react-bootstrap";

const ListPendaftaran = () => {
//   const [success, setSuccess] = useState('');
  const [data , setData] = useState([]);
  useEffect(() => {
      async function getData() {
        try{
            let res = await axios.get(`http://localhost:8080/api/data-teacher`)
            setData(res.data);
        }catch(error){
            console.error(error);
        }
      }
      getData();
  }, [])

  console.log(data);

    return (
        <div style={{backgroundColor:"#F2F2F2"}}>
            <Container>
                <Row>
                    <Col md="12" className="mt-4">
                        <Card className="strpied-tabled-with-hover">
                            <Card.Header style={{padding:"15px 15px 0", backgroundColor:"#ffffff", borderBottom:"none"}}>
                                <Card.Title as="h4" className="CardTitleDaftar" >Pendaftaran Academy Teacher</Card.Title>
                                <p className="card-category">
                                List pendaftar sebagai tutor
                                </p>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover table-striped">
                              
                                <thead>
                                    <tr>
                                    <th className="border-0">ID</th>
                                    <th className="border-0">Name</th>
                                    <th className="border-0">Jenis Kelamin</th>
                                    <th className="border-0">Nomor HP</th>
                                    <th className="border-0">Email</th>
                                    <th className="border-0 text-center">Status</th>
                                    </tr>
                                </thead>
                                <tbody style={{borderTop:"1px solid #d3d3d3"}}>
                                {data.map((user) => {
                                    if(user.jenis_kelamin === 'laki_laki'){
                                        user.jenis_kelamin = 'laki-laki';
                                    }

                                    if(user.status === null){
                                        user.status = '-'
                                    }
                                    return (
                                    <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.nama_lengkap}</td>
                                    <td>{user.jenis_kelamin}</td>
                                    <td>{user.no_hp}</td>
                                    <td>{user.email}</td>
                                    <td className="text-center">{user.status}</td>
                                    <td>
                                        <Link to="/admin/detail-pendaftar/:id">
                                            <button type="button" class="btn btn-primary" style={{padding:"0 10px"}}>Detail</button>
                                        </Link>
                                        <Link to="/#" style={{paddingLeft:"5px"}}>
                                            <button type="button" class="btn btn-danger" style={{padding:"0 10px"}}>Delete</button>
                                        </Link>
                                    </td>
                                    </tr>
                                    )
                                })}
                                </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ListPendaftaran;