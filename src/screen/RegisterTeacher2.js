import React from 'react';
import regispick from '../images/pickregis2.png';
import dropfoto from '../Icon/dropfotofile.png';
import uploadicon from '../Icon/upload2.png';

const RegisterTeacher2 = () => {
    return (
        <div class="bgRegister2">
            <div>
                <div class="boxContentRegis">
                    <div class="boxbgRegis2">
                        <img style={{overflow:"hidden"}} src={regispick} />
                    </div>
                    <div class="boxlistRegis">
                        <h3 class="titleregis fw-bold" style={{color:"#033059"}}> <span style={{borderBottom:"4px solid"}}>Formulir</span> pendaftaran teacher</h3>
                        <p class="sub1" style={{color:"#497FAF"}}>Zonaenglish is an EdTech start up that wanted to make all students in Indonesia can speak English and reach their dreams.<br/><br/>If you have passion in teaching English and get big income opportunities,<br/><span class="fw-bold" style={{color:"#FF0404"}}>WE ARE HIRING!</span></p>
                        
                        <form class="contentregis" style={{marginTop:"50px"}}>
                            <div class="contentsub1">
                                {/* <div style={{backgroundColor:"#D4DCE3", borderRadius:"5px", padding:"5px"}}>
                                    <div style={{border:"2px dashed black", textAlign:'center'}}>
                                    <img src={dropfoto} />
                                    <p>Click Here To Upload</p>
                                    </div>
                                </div> */}

                                <div style={{marginTop:"10px"}}>
                                    <label className="fw-bold">Nama Lengkap</label>
                                    <input type="text"/>
                                </div>

                                <div style={{marginTop:"10px"}}>
                                    <label className="fw-bold">Jenis Kelamin</label>
                                    <div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                            <label class="form-check-label fw-bold" for="inlineRadio1">Laki-Laki</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                            <label class="form-check-label fw-bold" for="inlineRadio1">Perempuan</label>
                                        </div>    
                                    </div>
                                </div>
                                
                                <div style={{marginTop:"10px"}}>
                                    <label className="fw-bold">Tanggal Lahir</label>
                                    <div class="row gap-2">
                                        <select class="col">
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
                                        <select class="col">
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
                                        <select class="col">
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
                                    <label className="fw-bold">Nomor Hp</label>
                                    <input type="text"/>
                                </div>
                            </div>

                            <div class="contentsub2">
                                <div>
                                    <label className="fw-bold">Email</label>
                                    <input type="email" />
                                </div>
                                <div>
                                    <label className="fw-bold">University/Organization</label>
                                    <input type="text"/>
                                </div>
                                <div>
                                    <label className="fw-bold">Sosial Media Accounts</label>
                                    <input type="text"/>
                                </div>
                                <div>
                                    <button type="button" class="btn fw-bold" style={{color:"#033059", border:"1px solid #033059"}}>Upload CV 
                                    <img style={{marginLeft:"5px"}} src={uploadicon} />
                                    </button>
                                </div>
                                
                                <div class="d-grid gap-2" style={{marginTop:"50px"}}>
                                    <button class="btn text-white fw-bold" style={{backgroundColor:"#033059", letterSpacing:"5px"}} type="button">DAFTAR</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterTeacher2;