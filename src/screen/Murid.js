import React from 'react';
import { Link } from 'react-router-dom';
// import { Carousel } from 'react-bootstrap';
// import bgg from '../images/bg_hero.jpg'

const Murid = () => {
    return (
        <div>
            <div className="jumbotron bgcolorStudent">
                <div className="container">
                    <div className="boxHeroStudent">
                        <div className="boxconterhero-Student">
                            <h1 className="fw-bold" style={{color:"#FF0000"}}>Ayo, Belajar dan Praktekkan Bahasa Inggrismu</h1>
                            <h3 className="text-white fw-bold">#Mau Belajar dari Nol</h3>
                            <h3 className="text-white fw-bold">#Mau lancar Speaking</h3>
                            <h3 className="text-white fw-bold">#Mau keluar Negeri</h3>
                            <br />
                            <h5 className="text-white fw-bold">Semua bisa di <span style={{color:"#FF0000"}}>ZonaEnglish.ID</span></h5>
                        </div>
                        <img className="wtBB" src={require("../images/studentBG_hero.png").default} alt="" />
                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <h4 class="text-center bold" style={{color:"#FF0000"}}>Apakah anda yang merasakan hal-hal ini dalam belajar ?</h4>

                <div className="content-boxes-student">
                    <div className="contentBoxStudet">
                        <img src={require("../images/ilustrasiStudent1.png").default} alt="" />
                        <p style={{textAlign:"center", lineHeight:"20px", paddingTop:"20px"}}>
                        Nggak punya waktu khusus untuk belajar karena kesibukan
                        </p>
                    </div>
                    <div className="contentBoxStudet">
                        <img src={require("../images/ilustrasiStudent2.png").default} alt="" />
                        <p style={{textAlign:"center", lineHeight:"20px", paddingTop:"20px"}}>
                        Mindset bahasa Inggris itu sulit
                        </p>
                    </div>
                    <div className="contentBoxStudet">
                        <img src={require("../images/ilustrasiStudent3.png").default} alt="" />
                        <p style={{textAlign:"center", lineHeight:"20px", paddingTop:"20px"}}>
                        Cepat bosan karena Metode belajarnya Biasa saja
                        </p>
                    </div>
                    <div className="contentBoxStudet">
                        <img src={require("../images/ilustrasiStudent4.png").default} alt="" />
                        <p style={{textAlign:"center", lineHeight:"20px", paddingTop:"20px"}}>
                        Biayanya mahal jadi Harus putus belajar
                        </p>
                    </div>
                </div>
            </div>

            <div className="bgColor mt-4">
                <div className="container py-4">
                    <h4 class="text-center bold" style={{color:"#FF0000"}}>Coba bayangkan jika nantinya ada solusi seperti ini <br /> anda pasti akan sangat semangat belajarnya</h4>
                
                    <div className="content-boxes-student2">
                        <div className="subcontent-boxes-student2">
                            <h5 class="fw-bold text-center" style={{ color:"#FF0000"}}>Fleksibel</h5>
                            <div style={{display:"flex", marginBottom:"10px"}}>
                                <img style={{width:"21px", height:"21px"}} src={require("../Icon/chek.png").default} alt="" />
                                <span style={{position:"relative", left:"5px"}}>Bebas Pilih Jadwal</span>
                            </div>
                            <div style={{display:"flex", marginBottom:"10px"}}>
                                <img style={{width:"21px", height:"21px"}} src={require("../Icon/chek.png").default} alt="" />
                                <span style={{position:"relative", left:"5px"}}>Bebas Pilih Tutor</span>
                            </div>
                            <div style={{display:"flex", marginBottom:"10px"}}>
                                <img style={{width:"21px", height:"21px"}} src={require("../Icon/chek.png").default} alt="" />
                                <span style={{position:"relative", left:"5px"}}>Bebas Pilih Topik</span>
                            </div>
                            <div style={{display:"flex", marginBottom:"10px"}}>
                                <img style={{width:"21px", height:"21px"}} src={require("../Icon/chek.png").default} alt="" />
                                <span style={{position:"relative", left:"5px"}}>Bebas Pilih Tempat belajar</span>
                            </div>
                        </div>

                        <div className="subcontent-boxes-student2">
                            <h5 class="fw-bold text-center" style={{ color:"#FF0000"}}>Mudah</h5>
                            <div style={{display:"flex", marginBottom:"10px"}}>
                                <img style={{width:"21px", height:"21px"}} src={require("../Icon/chek.png").default} alt="" />
                                <span style={{position:"relative", left:"5px"}}>Nonton video belajar yang bikin paham</span>
                            </div>
                            <div style={{display:"flex", marginBottom:"10px"}}>
                                <img style={{width:"21px", height:"21px"}} src={require("../Icon/chek.png").default} alt="" />
                                <span style={{position:"relative", left:"5px"}}>Di ajar oleh teacher yang pengalaman</span>
                            </div>
                            <div style={{display:"flex", marginBottom:"10px"}}>
                                <img style={{width:"21px", height:"21px"}} src={require("../Icon/chek.png").default} alt="" />
                                <span style={{position:"relative", left:"5px"}}>Bahasa bukan Rumus</span>
                            </div>
                            <div style={{display:"flex", marginBottom:"10px"}}>
                                <img style={{width:"21px", height:"21px"}} src={require("../Icon/chek.png").default} alt="" />
                                <span style={{position:"relative", left:"5px"}}>Langsung prektek real di lapangan</span>
                            </div>
                        </div>

                        <div className="subcontent-boxes-student2">
                            <h5 class="fw-bold text-center" style={{ color:"#FF0000"}}>Fun</h5>
                            <div style={{display:"flex", marginBottom:"10px"}}>
                                <img style={{width:"21px", height:"21px"}} src={require("../Icon/chek.png").default} alt="" />
                                <span style={{position:"relative", left:"5px"}}>Lakukan beragam aktifitas, seperti, Camp, Holiday, Hangout, bersama teman yang sedang belajar</span>
                            </div>
                            <div style={{display:"flex", marginBottom:"10px"}}>
                                <img style={{width:"21px", height:"21px"}} src={require("../Icon/chek.png").default} alt="" />
                                <span style={{position:"relative", left:"5px"}}>Punya banyak tempat praktek di seluruh Indonesia</span>
                            </div>
                        </div>

                        <div className="subcontent-boxes-student2">
                            <h5 class="fw-bold text-center" style={{ color:"#FF0000"}}>Murah</h5>
                            <div style={{display:"flex", marginBottom:"10px"}}>
                                <img style={{width:"21px", height:"21px"}} src={require("../Icon/chek.png").default} alt="" />
                                <span style={{position:"relative", left:"5px"}}>Bisa akses semua fitur tampa berlangganan</span>
                            </div>
                            <div style={{display:"flex", marginBottom:"10px"}}>
                                <img style={{width:"21px", height:"21px"}} src={require("../Icon/chek.png").default} alt="" />
                                <span style={{position:"relative", left:"5px"}}>Bayar sesuai buget kamu</span>
                            </div>
                            <div style={{display:"flex", marginBottom:"10px"}}>
                                <img style={{width:"21px", height:"21px"}} src={require("../Icon/chek.png").default} alt="" />
                                <span style={{position:"relative", left:"5px"}}>Bayar saat kamu belajar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-5" style={{marginBottom:"60px"}}>
                <div className="container py-4">
                    <h4 class="text-center bold" style={{color:"#FF0000"}}>Tidak tunggu nanti, tapi sekarang</h4>
                    <div>
                        <p class="fw-bold" style={{color:"#FF0000"}}>Semua kemudahan bahasa inggris ada di <br /> dalam genggamanmu</p>
                        
                        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                            <div>   
                                <div style={{display:"grid", justifyContent:"end"}}>
                                    <img  src={require("../images/bigIlustrasiStudent.png").default} alt="" />
                                    <a href=" https://play.google.com/store/apps/details?id=com.zn.zonaenglish">
                                        <img style={{position:"relative", left:"180px", marginTop:"10px"}} src={require("../images/download_app.png").default} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div style={{marginLeft:"100px"}}>
                            <h1 style={{position:"relative", bottom:"50px",textAlign:"center",color:"#FF0000",fontWeight:"bold"}}>All in One App</h1>
                                <div className="box-circle">
                                    <div className="box-circle-one">
                                        <div className="box-sub-circle circle-position-one">
                                            <img style={{width:"87px"}} src={require("../images/circleStudent/circle1.png").default} alt="" />
                                            <p style={{backgroundColor:"white"}} >Master Teacher, Native, Foreign, & Volunter</p>
                                        </div>
                                        <div className="box-sub-circle circle-position-second">
                                            <img style={{width:"87px"}} src={require("../images/circleStudent/circle2.png").default} alt="" />
                                            <p style={{backgroundColor:"white"}} >Technology <br /> & APP</p>
                                        </div>
                                        <div className="box-sub-circle circle-position-three" >
                                            <img style={{width:"87px"}} src={require("../images/circleStudent/circle3.png").default} alt="" />
                                            <p style={{backgroundColor:"white"}} >Community All Indonesia</p>
                                        </div>
                                    </div>

                                    <div className="box-circle-second">
                                        <div className="box-sub-circle circle-position-one2">
                                            <img style={{width:"87px"}} src={require("../images/circleStudent/circle4.png").default} alt="" />
                                            <p style={{backgroundColor:"white"}} >Pay per <br /> Lesson</p>
                                        </div>
                                        <div className="box-sub-circle circle-position-zonaenglish">
                                            <img src={require("../images/circleStudent/zonaenglishcircle.png").default} alt="" />
                                        </div>
                                        <div className="box-sub-circle circle-position-second2">
                                            <img style={{width:"87px"}} src={require("../images/circleStudent/circle5.png").default} alt="" />
                                            <p style={{backgroundColor:"white"}} >video <br /> Lessons</p>
                                        </div>
                                    </div>

                                    <div className="box-circle-three">
                                        <div className="box-sub-circle circle-position-one3">
                                            <img style={{width:"87px"}} src={require("../images/circleStudent/circle6.png").default} alt="" />
                                            <p style={{backgroundColor:"white"}} >Events,Webinars & Preparation TOEFL, IELTS</p>
                                        </div>
                                        <div className="box-sub-circle circle-position-second3">
                                            <img style={{width:"87px"}} src={require("../images/circleStudent/circle7.png").default} alt="" />
                                            <p style={{backgroundColor:"white"}} >Meeting Point Practice, Prantice & Practice by different Activities</p>
                                        </div>
                                        <div className="box-sub-circle circle-position-three3">
                                            <img style={{width:"87px"}} src={require("../images/circleStudent/circle8.png").default} alt="" />
                                            <p style={{backgroundColor:"white"}} >Offline Class All Indonesia</p>
                                        </div>
                                        <div className="box-sub-circle circle-position-four3">
                                            <img style={{width:"87px"}} src={require("../images/circleStudent/circle9.png").default} alt="" />
                                            <p style={{backgroundColor:"white"}} >Online meeting Group & Private</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bgColor">
                <div className="container py-4">
                    <h4 class="text-center bold" style={{color:"#FF0000"}}>Pengalaman dan wawasanmu akan sangat bertambah dengan <br /> beragam Teacher terbaik dan pilihan</h4>
                
                    <div className="boxex-student-experience mt-5">
                        <div>
                            <div style={{width:"210px", display:"flex", flexDirection:"column", alignItems:"center"}}>
                                <div style={{backgroundColor:"#fff", padding:"5px", borderRadius:"20px", boxShadow:"2px 2px 10px 0 rgba(18, 93, 226, 0.4)"}}>
                                    <img src={require("../images/student1.png").default} alt="" />
                                </div>
                                <p style={{padding:"10px 20px 0 20px", textAlign:"center"}}>Master teacher Indonesia</p>
                            </div>
                        </div>

                        <div>
                            <div style={{width:"210px", display:"flex", flexDirection:"column", alignItems:"center"}}>
                                <div style={{backgroundColor:"#fff", padding:"5px", borderRadius:"20px", boxShadow:"2px 2px 10px 0 rgba(18, 93, 226, 0.4)"}}>
                                    <img src={require("../images/student2.png").default} alt="" />
                                </div>
                                <p style={{padding:"10px 25px 0 25px", textAlign:"center"}}>Native teacher America</p>
                            </div>
                        </div>

                        <div>
                            <div style={{width:"210px", display:"flex", flexDirection:"column", alignItems:"center"}}>
                                <div style={{backgroundColor:"#fff", padding:"5px", borderRadius:"20px", boxShadow:"2px 2px 10px 0 rgba(18, 93, 226, 0.4)"}}>
                                    <img src={require("../images/student3.png").default} alt="" />
                                </div>
                                <p style={{padding:"10px 25px 0 25px", textAlign:"center"}}>Foreign teacher All over theworld</p>
                            </div>
                        </div>

                        <div>
                            <div style={{width:"210px", display:"flex", flexDirection:"column", alignItems:"center"}}>
                                <div style={{backgroundColor:"#fff", padding:"5px", borderRadius:"20px", boxShadow:"2px 2px 10px 0 rgba(18, 93, 226, 0.4)"}}>
                                    <img src={require("../images/student4.png").default} alt="" />
                                </div>
                                <p style={{padding:"10px 20px 0 20px", textAlign:"center"}}>Voluntoer All Indonesian University</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-4">
                <h4 class="text-center bold" style={{color:"#FF0000"}}>Testimoni</h4>

                <div>
                    <div className="testimoni-sub-boxex-one">
                        <img style={{width:"141px", height:"141px", position:"relative", bottom:"20px"}} src={require("../images/left-open.png").default} alt="" />
                        <div style={{borderLeft:"10px solid #FF0000", paddingLeft:"50px", paddingRight:"200px"}}>
                            <div style={{display:"flex"}}>
                                <img src={require("../images/Users1.png").default} alt="" />
                                <div className="users">
                                    <li><h5 style={{fontWeight:"bold", color:"#FF0000"}}>Angel</h5></li>
                                    <li style={{fontSize:"14px", color:"#FF0000"}}>Mahasiswa</li>
                                </div>
                            </div>
                            <p style={{marginTop:"10px"}}>Awalnya iseng coba fitur Tanya, ternyata muncul banyak video solusi yang sama persis dengan soal. Kakak-kakak yang jelasin santai dan gak buru-buru, jadi Dian suka dan ngerti. Karena sekolah daring, Intinya Dian seneng banget jadi salah satu dari sekian banyak anak yang pakai Zona English</p>
                        </div>
                    </div>

                    <div className="testimoni-sub-boxex-second">
                        <img style={{width:"141px", height:"141px", position:"relative", bottom:"20px"}} src={require("../images/right-close.png").default} alt="" />
                        <div style={{borderRight:"10px solid #FF0000", paddingLeft:"200px"}}>
                            <div style={{display:"flex"}}>
                                <img src={require("../images/Users1.png").default} alt="" />
                                <div className="users">
                                    <li><h5 style={{fontWeight:"bold", color:"#FF0000"}}>Angel</h5></li>
                                    <li style={{fontSize:"14px", color:"#FF0000"}}>Mahasiswa</li>
                                </div>
                            </div>
                            <p style={{marginTop:"10px"}}>Awalnya iseng coba fitur Tanya, ternyata muncul banyak video solusi yang sama persis dengan soal. Kakak-kakak yang jelasin santai dan gak buru-buru, jadi Dian suka dan ngerti. Karena sekolah daring, Intinya Dian seneng banget jadi salah satu dari sekian banyak anak yang pakai Zona English</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{backgroundColor:"#091C44"}}>
                <div className="container py-4">
                    <h4 class="text-center bold" style={{color:"#fff"}}>Tempat kamu PD berbahasa Inggris Bukan sok sok Inggris <br /> tapi ingin belajar dan sukses di masa depan</h4>
                
                    <div className="boxex-student-superiority">
                        <div style={{width:"220px"}}>
                            <div style={{border:"5px solid #fff", borderRadius:"18px", textAlign:"center"}}>
                                <img src={require("../images/environment-student1.png").default} alt="" />
                            </div>
                            <p style={{color:"#fff", textAlign:"center", marginTop:"10px", lineHeight:"20px", padding:"0 30px 0 30px"}}>Teacher yang akrab dan menyemangati</p>
                        </div>

                        <div style={{width:"220px"}}>
                            <div style={{border:"5px solid #fff", borderRadius:"18px", textAlign:"center"}}>
                                <img src={require("../images/environment-student2.png").default} alt="" />
                            </div>
                            <p style={{color:"#fff", textAlign:"center", marginTop:"10px", lineHeight:"20px" , padding:"0 30px 0 30px"}}>Teman yang salin support</p>
                        </div>

                        <div style={{width:"220px"}}>
                            <div style={{border:"5px solid #fff", borderRadius:"18px", textAlign:"center"}}>
                                <img src={require("../images/environment-student3.png").default} alt="" />
                            </div>
                            <p style={{color:"#fff", textAlign:"center", marginTop:"10px", lineHeight:"20px", padding:"0 30px 0 30px"}}>Beragam Zona berbahasa Inggris</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-4">
                {/* <div className="style-line-left"></div> */}
                    <div className="boxes-info-student-zonaWA">
                        <img className="lost" src={require("../images/info-WA-student1.png").default} alt="" />
                        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <h5 class="text-center bold" style={{color:"#FF0000"}}>Ingin lebih yakin bahwa ZonaEnglish <br /> pilihan terbaik untuk anda</h5>
                            <div className="linesub">
                                <p style={{textAlign:"center", fontWeight:"bold", color:"#373133"}}>Konsultasi dulu by Whatsapp ZONAEnglish.ID</p>
                                <p style={{textAlign:"center"}}>Anda akan mendapatkan jadwal konsultasi dan temukan solusimu</p>
                            </div>
                            <a href="https://wa.wizard.id/65d17f">
                                <div class="btn border border-danger me-2 fw-bold border-2">
                                    <img src={require("../Icon/WALinkM.png").default} style={{width:"20px", marginRight:"10px"}} />
                                    <button class="btnFAKE fw-bold text-danger text-uppercase">Zona WhatsApp</button>
                                </div>
                            </a>
                        </div> 
                        <img className="lost" src={require("../images/info-WA-student2.png").default} alt="" />
                    </div>
                {/* <div className="style-line-right"></div> */}
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

export default Murid;