import React, { useState } from 'react';
import regispick from '../images/pickregis1.png';
import dropfoto from '../Icon/dropfotofile.png';
import uploadicon from '../Icon/upload.png';
import DropZoneComponent from '../components/DropZoneComponent';
import DropZoneComponentCV from '../components/DropZoneComponentCV';
import { toast, ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router';
import axios from 'axios';
import FromData from 'form-data'

const RegisterTeacher1 = () => {

    const [file ,setFile] = useState('')
    const [fileCV ,setFileCV] = useState('')
    const [formData ,setFormData] = useState({
        nama_lengkap:'',
        tgl :'',
        bulan :'',
        tahun :'',
        jenis_kelamin :'',
        email :'',
        noHp :'',
        organization :'',
        sm :'',
    });
    let history = useHistory();
    const tanggal_lahir = formData.tahun +'/'+formData.bulan + '/'+ formData.tgl;
        const onSubmitData = async (event) => {
        event.preventDefault();
        const status = null;

            const data = new FormData();
            data.append('nama_lengkap' , formData.nama_lengkap)
            data.append('jenis_kelamin' , formData.jenis_kelamin)
            data.append('tgl_lahir' , tanggal_lahir)
            data.append('email' , formData.email)
            data.append('no_hp' , formData.noHp)
            data.append('organization' , formData.organization)
            data.append('sm_acount' , formData.sm)
            data.append('status' , status)
            data.append('photoProfile' ,file)
            data.append('photoCV' , fileCV)
        try {
            const res = await axios({
                method : 'POST',
                url : 'http://localhost:8080/api/create-teacher',
                data :data,
                headers : { "Content-Type": "multipart/form-data" }
            });
                const resolveAfter3Sec = new Promise((resolve, reject) => {
                    setTimeout(resolve, 3000);
                    setTimeout(() => {
                        history.push("/")
                    }, 8000);
                });
                toast.promise(resolveAfter3Sec, {
                    pending: "Sedang Memeriksa",
                    success: "Terima Kasih ,Anda Telah Terdaftar",
                })
            
        }catch(error){

            console.log('error');
                const resolveAfter3Sec = new Promise((resolve, reject) => {
                    setTimeout(resolve, 3000);
                    setTimeout(() => {
                        history.push("/formulir_pendaftaran_teacher")
                    }, 8000);
                });
                toast.promise(resolveAfter3Sec, {
                    pending: "Sedang Memeriksa",
                    error: "Data Anda Gagal terkirim, Periksa Kembali",
                })
        }
    }

    

    return (
        <div class="bgRegister1">
            <div>
                <div class="boxContentRegis">
                    <div class="boxbgRegis1">
                        <img style={{overflow:"hidden"}} src={regispick} />
                    </div>
                    <div class="boxlistRegis">
                        <h3 class="titleregis fw-bold" style={{color:"#FF0404"}}> BECOME A TUTOR</h3>
                        <p class="sub1" style={{color:"#C78B8B"}}>ZONA English is a place for all teachers to collaborate, to share, and to find solution about educational problems in Indonesia. <br/>Be part of us to level up education in Indonesia!!</p>
                        
                        <form class="contentregis" style={{marginTop:"20px"}} onSubmit={onSubmitData}>
                            <div class="contentsub1">
                                
                                <DropZoneComponent setFile={setFile} />
                                <p className="box-image-file">
                                    {
                                        file?.name
                                    }
                                </p>
                                {/* <div style={{backgroundColor:"#FF8D8D", borderRadius:"5px", padding:"5px"}}>
                                    <div style={{border:"2px dashed black", textAlign:'center'}}>
                                    <img src={dropfoto} />
                                    <p>Click Here To Upload</p>
                                    </div>
                                </div> */}

                                <div>
                                    <label className="fw-bold">Full Name</label>
                                    <input
                                    onChange = { (e) => setFormData({...formData, nama_lengkap : e.target.value})} 
                                    type="text"/>
                                </div>

                                <div >
                                    <label className="fw-bold">Gender</label>
                                    <div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="laki_laki" onChange={(e) => setFormData({...formData , jenis_kelamin : e.target.value})}/>
                                            <label class="form-check-label fw-bold" for="inlineRadio1">Male</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="perempuan" onChange={(e) => setFormData({...formData , jenis_kelamin : e.target.value})}/>
                                            <label class="form-check-label fw-bold" for="inlineRadio1">Famele</label>
                                        </div>    
                                    </div>
                                </div>
                                
                                <div style={{marginTop:"10px"}}>
                                    <label className="fw-bold">Date of birth</label>
                                    <div class="row gap-2">
                                        <select class="col" onChange ={(e) => setFormData({...formData , tgl: e.target.value})}>
                                        <option value="" disabled selected>Date</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="30">31</option>
                                        </select>
                                        <select class="col" onChange ={(e) => setFormData({...formData, bulan : e.target.value})}>
                                        <option value="" disabled selected>Month</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                        <select class="col" onChange ={(e) => setFormData({...formData, tahun: e.target.value})}>
                                        <option value="" disabled selected>Year</option>
                                            <option value="2000">2000</option>
                                            <option value="1999">1999</option>
                                            <option value="1998">1998</option>
                                            <option value="1997">1997</option>
                                            <option value="1996">1996</option>
                                            <option value="1995">1995</option>
                                            <option value="1994">1994</option>
                                            <option value="1993">1993</option>
                                            <option value="1992">1992</option>
                                            <option value="1991">1991</option>
                                            <option value="1990">1990</option>
                                            <option value="1989">1989</option>
                                            <option value="1988">1988</option>
                                            <option value="1987">1987</option>
                                            <option value="1986">1986</option>
                                            <option value="1985">1985</option>
                                            <option value="1984">1984</option>
                                            <option value="1983">1983</option>
                                            <option value="1982">1982</option>
                                            <option value="1981">1981</option>
                                            <option value="1980">1980</option>
                                        </select>
                                    </div>
                                </div>
        
                                <div style={{marginTop:"10px"}}>
                                    <label className="fw-bold">Cellphone Number</label>
                                    <input type="text" onChange ={(e) => setFormData({...formData, noHp: e.target.value})}/>
                                </div>
                                <div>
                                    <label className="fw-bold">Email</label>
                                    <input type="email" onChange ={(e) => setFormData({...formData, email : e.target.value})}/>
                                </div>
                            </div>

                            <div class="contentsub2">
                                <div>
                                    <label className="fw-bold">Current location</label>
                                    <input type="text" onChange ={(e) => setFormData({...formData, organization : e.target.value})}/>
                                </div>
                                <div>
                                    <label className="fw-bold">Highest level of education</label>
                                    <input type="text" onChange ={(e) => setFormData({...formData, organization : e.target.value})}/>
                                </div>
                                <div>
                                    <label className="fw-bold"> university</label>
                                    <input type="text" onChange ={(e) => setFormData({...formData, organization : e.target.value})}/>
                                </div>
                                <div>
                                    <label className="fw-bold">Social Media Account</label>
                                    <input type="text" onChange ={(e) => setFormData({...formData, sm : e.target.value})}/>
                                </div>
                                <DropZoneComponentCV setFileCV={setFileCV} />
                                <p className="box-CV">
                                    {
                                        fileCV?.name
                                    }
                                </p>
                                {/* <div>
                                    <button type="button" class="btn fw-bold" style={{color:"#FF0404", border:"1px solid #FF0404"}}>Upload CV 
                                    <img style={{marginLeft:"5px"}} src={uploadicon} />
                                    </button>
                                </div> */}
                                <ToastContainer />
                                <div class="d-grid gap-2 mtop">
                                    <button class="btn text-white fw-bold" style={{backgroundColor:"#FF0404", letterSpacing:"5px"}} type="submit">DAFTAR</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterTeacher1;