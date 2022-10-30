import React from 'react';
import { Link } from 'react-router-dom';

const Biaya = () => {
    return (
        <div>
           <div className="jumbotron bgColor-biaya">
               <div className="container">
                   <div className="box-hero-biaya">
                       <div>
                            <h1 className="fw-bold" style={{color:"#FF0000"}}>Jangan berhenti belajar karena kendala biaya</h1>
                            <div style={{display:"flex"}}>
                                <img src={require("../Icon/cek-biaya.png").default} alt="" />
                                <h3 className="text-white fw-bold pt-1">Mau belajar, cari yang gratis, Okay</h3>
                            </div>
                            <div style={{display:"flex"}}>
                                <img src={require("../Icon/cek-biaya.png").default} alt="" />
                                <h3 className="text-white fw-bold pt-1">Mau belajar, bayat dengan uang jajan, Okay</h3>
                            </div>
                            <div style={{display:"flex"}}>
                                <img src={require("../Icon/cek-biaya.png").default} alt="" />
                                <h3 className="text-white fw-bold pt-1">Tampa perlu berlangganan</h3>
                            </div>
                       </div>
                       <img src={require("../images/ilustrasiBiaya.png").default} alt="" />
                   </div>
               </div>
           </div>

           <div className="container">
                <div className="py-4">
                    <h4 class="text-center bold" style={{color:"#FF0000"}}>Apa yang bisa kami berikan untuk anda yang <br /> ingin belajar secara gratis</h4>

                    <div className="boxes-free-fitur">

                        <div className="sub-boxes-free-fitur1">
                            <div className="box-free-fitur">
                                <img style={{backgroundColor:"#FFE1E1", padding:"5px", borderRadius:"100px", width:"36px", height:"36px"}} src={require("../Icon/free-fitur1.png").default} alt="" />
                                <p style={{color:"#FF7878", paddingLeft:"15px"}}>Akses semua video belajar level awal - lever profesional yang meningkatkan jumlah kosa kata dan pemahaman grammer anda</p>
                            </div>

                            <div className="box-free-fitur">
                                <img style={{backgroundColor:"#FFE1E1", padding:"5px", borderRadius:"100px", width:"36px", height:"36px"}} src={require("../Icon/free-fitur2.png").default} alt="" />
                                <p style={{color:"#FF7878", paddingLeft:"15px"}}>Akses kelas Live, dan tanytakan kebingunganmu langsung ke master teacher</p>
                            </div>
                        </div>

                        <div className="sub-boxes-free-fitur">
                            <div className="box-free-fitur">
                                <img style={{backgroundColor:"#FFE1E1", padding:"5px", borderRadius:"100px", width:"36px", height:"36px"}} src={require("../Icon/free-fitur3.png").default} alt="" />
                                <p style={{color:"#FF7878", paddingLeft:"15px"}}>Akses soal latihan yang mengasah kemampuan kosa kata dan grammer</p>
                            </div>

                            <div className="box-free-fitur">
                                <img style={{backgroundColor:"#FFE1E1", padding:"5px", borderRadius:"100px", width:"36px", height:"36px"}} src={require("../Icon/free-fitur4.png").default} alt="" />
                                <p style={{color:"#FF7878", paddingLeft:"15px"}}>Temukan teman speaking di fitur penpal</p>
                            </div>
                        </div>
                    </div>

                    <div style={{display:"flex", justifyContent:"center"}}>
                        <a href=" https://play.google.com/store/apps/details?id=com.zn.zonaenglish" target="_blank">
                        <img style={{marginRight:"30px"}} src={require("../images/download_app.png").default} alt="" />
                        </a>
                        

                        <a href="https://wa.wizard.id/65d17f" target="_blank">
                            <div class="btn border border-danger me-2 fw-bold border-2">
                                <img src={require("../Icon/WALinkM.png").default} style={{width:"20px", marginRight:"10px"}} />
                                <button class="btnFAKE fw-bold text-danger text-uppercase">Zona WhatsApp</button>
                            </div>
                        </a>
                    </div>
                </div>
           </div>

           <div className="bgColor">
                <div className="container py-4">
                    <h4  class="text-center bold" style={{color:"#FF0000"}}>Belajar dan bayar dengan uang jajan, dapat apa ya?</h4>

                    <div className="boxex-harga-list">
                        <div className="box-card-harga">
                            <div style={{padding:"20px 10px 0 10px"}}>
                                <p style={{textAlign:"center", color:"#FF0000", fontWeight:"bold"}}>Pesan online class</p>
                                <hr style={{backgroundColor:"#FF0000"}} />
                                
                                <div className="sub-box-content-harga">
                                    <div style={{lineHeight:"20px"}}>
                                        <div style={{display:"flex"}}>
                                            <img style={{width:"22px", height:"22px", marginRight:"10px"}} src={require("../Icon/cek-harga.png").default} alt="" />
                                            <p>Belajar dalam group kecil 4-8 orang</p>
                                        </div>
                                        <div style={{display:"flex"}}>
                                            <img style={{width:"22px", height:"22px", marginRight:"10px"}} src={require("../Icon/cek-harga.png").default} alt="" />
                                            <p>Langsung speaking dengan tutor</p>
                                        </div>
                                        <div style={{display:"flex"}}>
                                            <img style={{width:"22px", height:"22px", marginRight:"10px"}} src={require("../Icon/cek-harga.png").default} alt="" />
                                            <p>3x lebih cepat sukses</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{backgroundColor:"#FF0000", paddingTop:"10px", textAlign:"center", color:"#fff", fontWeight:"bold"}}>
                                <p>Mulai Rp. 20.000/Meeting</p>
                            </div>
                        </div>

                        <div className="box-card-harga">
                            <div style={{padding:"20px 10px 0 10px"}}>
                                <p style={{textAlign:"center", color:"#FF0000", fontWeight:"bold"}}>Pesan private class Online</p>
                                <hr style={{backgroundColor:"#FF0000"}} />
                                
                                <div className="sub-box-content-harga">
                                    <div>
                                        <div style={{display:"flex"}}>
                                            <img style={{width:"22px", height:"22px", marginRight:"10px"}} src={require("../Icon/cek-harga.png").default} alt="" />
                                            <p>Beragam pilihan tutor</p>
                                        </div>
                                        <div style={{display:"flex"}}>
                                            <img style={{width:"22px", height:"22px", marginRight:"10px"}} src={require("../Icon/cek-harga.png").default} alt="" />
                                            <p>Speaking one on one</p>
                                        </div>
                                        <div style={{display:"flex"}}>
                                            <img style={{width:"22px", height:"22px", marginRight:"10px"}} src={require("../Icon/cek-harga.png").default} alt="" />
                                            <p>5x lebih cepat sukses</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{backgroundColor:"#FF0000", paddingTop:"10px", textAlign:"center", color:"#fff", fontWeight:"bold"}}>
                                <p>Mulai Rp. 70.000/Meeting</p>
                            </div>
                        </div>

                        <div className="box-card-harga">
                            <div style={{padding:"20px 10px 0 10px"}}>
                                <p style={{textAlign:"center", color:"#FF0000", fontWeight:"bold"}}>Pesan Offline class</p>
                                <hr style={{backgroundColor:"#FF0000"}} />
                                
                                <div className="sub-box-content-harga">
                                    <div style={{lineHeight:"20px"}}>
                                        <div style={{display:"flex"}}>
                                            <img style={{width:"22px", height:"22px", marginRight:"10px"}} src={require("../Icon/cek-harga.png").default} alt="" />
                                            <p>Praktek real di lapangan, mall, pasar restaurant, dll</p>
                                        </div>
                                        <div style={{display:"flex"}}>
                                            <img style={{width:"22px", height:"22px", marginRight:"10px"}} src={require("../Icon/cek-harga.png").default} alt="" />
                                            <p>Speaking langsung bersama tutor dan teman</p>
                                        </div>
                                        <div style={{display:"flex"}}>
                                            <img style={{width:"22px", height:"22px", marginRight:"10px"}} src={require("../Icon/cek-harga.png").default} alt="" />
                                            <p>100% menyenangkan</p>
                                        </div>
                                        <div style={{display:"flex"}}>
                                            <img style={{width:"22px", height:"22px", marginRight:"10px"}} src={require("../Icon/cek-harga.png").default} alt="" />
                                            <p>5x lebih cepat sukses</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{backgroundColor:"#FF0000", paddingTop:"10px", textAlign:"center", color:"#fff", fontWeight:"bold"}}>
                                <p>Mulai Rp. 50.000/Meeting</p>
                            </div>
                        </div>

                        <div className="box-card-harga">
                            <div style={{padding:"20px 10px 0 10px"}}>
                                <p style={{textAlign:"center", color:"#FF0000", fontWeight:"bold"}}>Pesan kelas Insight</p>
                                <hr style={{backgroundColor:"#FF0000"}} />
                                
                                <div className="sub-box-content-harga">
                                    <div style={{lineHeight:"20px"}}>
                                        <div style={{display:"flex"}}>
                                            <img style={{width:"22px", height:"22px", marginRight:"10px"}} src={require("../Icon/cek-harga.png").default} alt="" />
                                            <p>Siap Toefl</p>
                                        </div>
                                        <div style={{display:"flex"}}>
                                            <img style={{width:"22px", height:"22px", marginRight:"10px"}} src={require("../Icon/cek-harga.png").default} alt="" />
                                            <p>Siap IEITS</p>
                                        </div>
                                        <div style={{display:"flex"}}>
                                            <img style={{width:"22px", height:"22px", marginRight:"10px"}} src={require("../Icon/cek-harga.png").default} alt="" />
                                            <p>Siap Beasiswa ke luar negri</p>
                                        </div>
                                        <div style={{display:"flex"}}>
                                            <img style={{width:"22px", height:"22px", marginRight:"10px"}} src={require("../Icon/cek-harga.png").default} alt="" />
                                            <p>Belajar dalam group</p>
                                        </div>
                                        <div style={{display:"flex"}}>
                                            <img style={{width:"22px", height:"22px", marginRight:"10px"}} src={require("../Icon/cek-harga.png").default} alt="" />
                                            <p>100% expert coach</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{backgroundColor:"#FF0000", paddingTop:"10px", textAlign:"center", color:"#fff", fontWeight:"bold"}}>
                                <p>Mulai Rp. 500.000</p>
                            </div>
                        </div>
                    </div>

                    <div style={{display:"flex", justifyContent:"center", marginTop:"30px"}}>
                        <a href=" https://play.google.com/store/apps/details?id=com.zn.zonaenglish" target="_blank">
                            <img style={{marginRight:"30px"}} src={require("../images/download_app.png").default} alt="" />
                        </a>
                        

                        <a href="https://wa.wizard.id/65d17f" target="_blank">
                            <div class="btn border border-danger me-2 fw-bold border-2">
                                <img src={require("../Icon/WALinkM.png").default} style={{width:"20px", marginRight:"10px"}} />
                                <button class="btnFAKE fw-bold text-danger text-uppercase">Zona WhatsApp</button>
                            </div>
                        </a>
                    </div>
                </div>
           </div>

           <div className="container py-4">
                <h4 class="text-center bold" style={{color:"#FF0000"}}>Dapatkan Best Teacher, Best Friends, dan Best Price</h4>
                <p class="text-center bold" style={{color:"#FF0000"}}>Promo Best Price</p>

                <div className="boxes-promo">
                    <div style={{width:"336px", height:"150px" ,backgroundColor:"#c4c4c4", borderRadius:"8px",backgroundImage:"linear-gradient(to right, #193361 , #FF0000)"}}></div>
                    <div style={{width:"336px", height:"150px" ,backgroundColor:"#c4c4c4", borderRadius:"8px",backgroundImage:"linear-gradient(to right, #193361 , #FF0000)"}}></div>
                    <div style={{width:"336px", height:"150px" ,backgroundColor:"#c4c4c4", borderRadius:"8px",backgroundImage:"linear-gradient(to right, #193361 , #FF0000)"}}></div>
                    {/* <div style={{width:"250px", height:"150px" ,backgroundColor:"#c4c4c4", borderRadius:"8px",backgroundImage:"linear-gradient(to right, #193361 , #FF0000)"}}></div> */}
                </div>

                <div className="circle-slider-promo">
                    <div style={{width:"16px", height:"16px", backgroundColor:"#FF0000", borderRadius:"100px", marginRight:"10px"}}></div>
                    <div style={{width:"16px", height:"16px", border:"2px solid #FF0000", borderRadius:"100px", marginRight:"10px"}}></div>
                    <div style={{width:"16px", height:"16px", border:"2px solid #FF0000", borderRadius:"100px", marginRight:"10px"}}></div>
                    <div style={{width:"16px", height:"16px", border:"2px solid #FF0000", borderRadius:"100px", marginRight:"10px"}}></div>
                </div>
           </div>

           <div style={{backgroundColor:"#F3F3F3"}}>
                <div className="container py-4">
                    <h4  class="text-center bold" style={{color:"#FF0000"}}>Pesan kelas pilihanmu tampa perlu berlangganan</h4>
                    <p className="text-center" style={{fontSize:"15px", color:"#8D8D8D"}}>Cukup top up saldo belajar anda, langsung bisa pilih berbagai macam kelas yang tersedia di semua fitur-fitur ZONAENGLSIH</p>

                    <h4  class="text-center bold" style={{color:"#FF0000", marginTop:"30px"}}>Begini cara mudah top up saldo belajar di APP</h4>

                    <div className="topUp-boxes">
                        <div className="topUP-card-box">
                            <div style={{backgroundColor:"#FF0000", width:"40px", textAlign:"center", borderRadius:"100%", padding:"5px", fontWeight:"bold", color:"#fff", fontSize:"20px"}}>
                                1
                            </div>
                            <img style={{display:"block", marginLeft:"auto", marginRight:"auto"}} src={require("../images/top-up-fitur/top-up1.png").default} alt="" />
                            <p style={{textAlign:"center", paddingTop:"10px",fontWeight:"bold",color:"#FF0000"}}>Pilih Top up</p>
                        </div>

                        <div className="topUP-card-box">
                            <div style={{backgroundColor:"#FF0000", width:"40px", textAlign:"center", borderRadius:"100%", padding:"5px", fontWeight:"bold", color:"#fff", fontSize:"20px"}}>
                                2
                            </div>
                            <img style={{display:"block", marginLeft:"auto", marginRight:"auto"}} src={require("../images/top-up-fitur/top-up2.png").default} alt="" />
                            <p style={{textAlign:"center", paddingTop:"10px",fontWeight:"bold",color:"#FF0000"}}>Pilih cara top up</p>
                        </div>

                        <div className="topUP-card-box">
                            <div style={{backgroundColor:"#FF0000", width:"40px", textAlign:"center", borderRadius:"100%", padding:"5px", fontWeight:"bold", color:"#fff", fontSize:"20px"}}>
                                3
                            </div>
                            <img style={{display:"block", marginLeft:"auto", marginRight:"auto"}} src={require("../images/top-up-fitur/top-up3.png").default} alt="" />
                            <p style={{textAlign:"center", paddingTop:"10px",fontWeight:"bold",color:"#FF0000"}}>Masukkan nominal</p>
                        </div>

                        <div className="topUP-card-box">
                            <div style={{backgroundColor:"#FF0000", width:"40px", textAlign:"center", borderRadius:"100%", padding:"5px", fontWeight:"bold", color:"#fff", fontSize:"20px"}}>
                                4
                            </div>
                            <img style={{display:"block", marginLeft:"auto", marginRight:"auto"}} src={require("../images/top-up-fitur/top-up4.png").default} alt="" />
                            <p style={{textAlign:"center", paddingTop:"10px",fontWeight:"bold",color:"#FF0000"}}>Informasi top up sukses</p>
                        </div>
                    </div>

                    <div style={{display:"flex", justifyContent:"center", marginTop:"30px"}}>
                        <a href="https://play.google.com/store/apps/details?id=com.zn.zonaenglish" target="_blank">
                            <img style={{marginRight:"30px"}} src={require("../images/download_app.png").default} alt="" />
                        </a>
                        

                        <a href="https://wa.wizard.id/65d17f" target="_blank">
                            <div class="btn border border-danger me-2 fw-bold border-2">
                                <img src={require("../Icon/WALinkM.png").default} style={{width:"20px", marginRight:"10px"}} />
                                <button class="btnFAKE fw-bold text-danger text-uppercase">Zona WhatsApp</button>
                            </div>
                        </a>
                    </div>
                </div>
           </div>

           <div style={{backgroundColor:"#091C44"}}>
                <div class="container py-5 BoxFooter">
                    <div>
                        <h3 className="text-white">Download App</h3>
                            <a href="https://play.google.com/store/apps/details?id=com.zn.zonaenglish" target="_blank">
                                <img src={require("../images/download_app.png").default} />
                            </a>
                            
                            <div class="mt-4">
                            <a href="https://www.instagram.com/zonaenglish.id/" target="_blank">
                                <img class="me-3" src={require("../Icon/igLink-white.png").default} />
                            </a>
                            <a href="#">
                                <img class="me-3" src={require("../Icon/fbLink-white.png").default} />
                            </a>
                            <a href="#">
                                <img class="me-2" src={require("../Icon/inLink-white.png").default} />
                            </a>
                        </div>
                    </div>
                    <div class="mgrT">
                        <h4 className="text-white">Alamat</h4>
                        <div class="d-flex">
                            <img class="me-3" style={{width:"32px", height:"32px"}} src={require("../Icon/location-white.png").default} />
                            <p className="text-white">ZonaEnglish indonesia HQ <br/> Jln. Pemuda No. 352 Kolaka <br/> Sulawesi Tenggara</p>
                        </div>
                    </div>
                    <img src={require("../images/app5.png").default} />
                </div>
            </div>

            <div style={{paddingTop:"20px"}}>
                <div class="container">
                    <div class="d-flex justify-content-between">
                        <p>ZonaEnglish2021presed.byzonaenglish</p>
                        <div class="d-flex justify-content-between" style={{width:"300px"}}>
                            <p>Terms and Condition</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Biaya;