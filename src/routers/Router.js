import React, { Fragment } from 'react';
// import { Navbar } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import NavbarComp from '../components/NavbarComp';
import Biaya from '../screen/Biaya';
import Home from '../screen/Home';
import ListPendaftaran from '../screen/Admin/ListPendaftaran';
import Murid from '../screen/Murid';
import RegisterTeacher1 from '../screen/RegisterTeacher1';
import RegisterTeacher2 from '../screen/RegisterTeacher2';
import Tutor from '../screen/Tutor';
import DetailPendaftar from '../screen/Admin/DetailPendaftar';
import Login from '../screen/Admin/Login';
import UjiCoba from '../screen/UjiCoba';

const Router = () => {
    return (
        <Fragment>
        <BrowserRouter>
            <NavbarComp />
            
            <Route exact path="/" component={Home} />
            <Route path="/menjadi_murid" component={Murid} />
            <Route path="/menjadi_tutor" component={Tutor} />
            <Route path="/lihat_biaya" component={Biaya} />
            <Route path="/formulir_pendaftaran_teacher" component={RegisterTeacher1} />
            {/* <Route path="/formulir_pendaftaran_academy_teacher" component={RegisterTeacher2} /> */}
            <Route path="/admin/list-pendaftar" component={ListPendaftaran} />
            <Route path="/admin/detail-pendaftar/:id" component={DetailPendaftar} />
            <Route path="/login" component={Login} />
            <Route path="/uji-boba" component={UjiCoba} />
        </BrowserRouter>
        </Fragment>
    );
};

export default Router;