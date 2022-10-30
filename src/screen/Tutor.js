import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import heroimg from '../images/techerBG_hero.png';
import typeTeacher1 from '../images/typeTeacher1.png';
import typeTeacher2 from '../images/typeTeacher2.png';
import typeTeacher3 from '../images/typeTeacher3.png';
import typeTeacher4 from '../images/typeTeacher4.png';
import fitur1 from '../images/fitur1.png';
import fitur2 from '../images/fitur2.png';
import fitur3 from '../images/fitur3.png';
import fitur4 from '../images/fitur4.png';
import fitur5 from '../images/fitur5.png';
import iconImg1 from '../images/iconImg1.png';
import iconImg2 from '../images/iconImg2.png';
import iconImg3 from '../images/iconImg3.png';
import iconImg4 from '../images/iconImg4.png';
import iconImg5 from '../images/iconImg5.png';
import iconWA from '../Icon/whatsappLink.png';
import iconEmail from '../Icon/emailLink.png';
import iconWAm from '../Icon/WALinkM.png';
import iconEmailm from '../Icon/EmailLinkM.png';
import teacherJoin from '../images/joinTeacher.png';
import sosmed1 from '../Icon/igLink.png';
import sosmed2 from '../Icon/fbLink.png';
import sosmed3 from '../Icon/inLink.png'
import locate from '../Icon/location.png';
import imgandroid3 from '../images/app5.png';
import downloadapp from '../images/download_app.png';


const Tutor = () => {

    useEffect(() => {
        Aos.init({duration:500});
    }, []);
    return (
        <div>
           <div class="jumbotron bgcolorTeacher">
               <div class="container-fluid">
                   <div class="boxHeroTutuor">
                        <div class="boxconterhero">
                            <h1 class="fw-bold" style={{color:"#FF0000"}}>Ayo, Wujudkan Harapan 1 Juta Pelajar Bisa Bahasa Inggris</h1>
                            <h3 class="text-white fw-bold">dengan semangat terus belajar, dan senang memberi Ilmu, Kreatif & Inovatif</h3>
                            <p class="text-white fw-bold">Jadilah <span style={{color:"#FF0000"}}>#Teacher Perubahan</span></p>
                            <h5 class="text-white fw-bold" style={{marginTop:"3em"}}>*Ubah harapan mereka menjadi nyata</h5>
                        </div>
                        <img class="wtB" src={heroimg} />
                   </div>
               </div>
           </div>

           <div class="container py-5">
               <h4 class="text-center bold" style={{color:"#FF0000"}}>4 Type Pengajar Kami</h4>
               <div class="contentBoxType mt-5">
                    <div class="card" style={{width: "262px", borderRadius:"18px"}}>
                        <img src={typeTeacher1} class="card-img-top"  alt="..." />
                        <div class="card-body">
                            <div>
                                <h5 class="card-title fw-bold text-center" style={{fontSize:"18px", color:"#FF0000"}}>Master Teacher Indonesia</h5>
                                <ul style={{color:"#8E8E8E"}}>
                                    <li>Fluent In English</li>
                                    <li>Has experience in teaching</li>
                                </ul>
                            </div>
                            
                            {/* <div> */}
                                <Link to="/formulir_pendaftaran_teacher">
                                    <button class="button-daftar" type="button">Daftar</button>
                                </Link>
                            {/* </div> */}
                            
                        </div>
                    </div>
                    <div class="card" style={{width: "262px", borderRadius:"18px"}}>
                        <img src={typeTeacher2} class="card-img-top"  alt="..." />
                        <div class="card-body">
                            <div>
                                <h5 class="card-title fw-bold text-center" style={{fontSize:"18px", color:"#FF0000"}}>Native Speaker</h5>
                                <ul style={{color:"#8E8E8E"}}>
                                    <li>English is Mother Tongue</li>
                                </ul>
                            </div>
                            <Link to="/formulir_pendaftaran_teacher">
                                    <button class="button-daftar" type="button">Daftar</button>
                            </Link>
                        </div>
                    </div>
                    <div class="card" style={{width: "262px", borderRadius:"18px"}}>
                        <img src={typeTeacher3} class="card-img-top"  alt="..." />
                        <div class="card-body">
                            <div>
                                <h5 class="card-title fw-bold text-center" style={{fontSize:"18px", color:"#FF0000"}}>Foreign Teacher</h5>
                                <ul style={{color:"#8E8E8E"}}>
                                    <li>English is your second language</li>
                                </ul>
                            </div>
                            <Link to="/formulir_pendaftaran_teacher">
                                    <button class="button-daftar" type="button">Daftar</button>
                            </Link>
                        </div>
                    </div>
                    <div class="card" style={{width: "262px", borderRadius:"18px"}}>
                        <img src={typeTeacher4} class="card-img-top"  alt="..." />
                        <div class="card-body">
                            <div>
                                <h5 class="card-title fw-bold text-center" style={{fontSize:"18px", color:"#FF0000"}}>Volunter</h5>
                                <ul style={{color:"#8E8E8E"}}>
                                    <li>Aktif in speaking English</li>
                                    <li>Still at campus</li>
                                    <li>From difterent major</li>
                                    <li>Wanna get experionce in teaching</li>
                                </ul>
                            </div>
                            <Link to="/formulir_pendaftaran_teacher">
                                <button class="button-daftar" type="button">Daftar</button>
                            </Link>
                        </div>
                    </div>
               </div>
           </div>

           <div class="bgColor">
               <div class="container py-5">
                    <h4 class="bold" style={{color:"#FF0000"}}>Apa yang Tutor bisa lakukan?</h4>
                    <p class="fw-bold" style={{color:"#737373"}}>Bantu pelajar berbahasa inggris dengan beberapa cara</p>
                    <div class="content_boxes">
                        <div class="contentBoxFitur">
                            <img src={fitur1} />
                            <div>
                                <label class="fw-bold" style={{color:"#FF0000"}}>Video Belajar</label>
                                <p style={{lineHeight:"20px"}}>Buat video belajar yang menarik dan memudahkan pelajar paham</p>
                            </div>
                        </div>
                        <div class="contentBoxFitur">
                            <img src={fitur2} />
                            <div>
                                <label class="fw-bold" style={{color:"#FF0000"}}>Online Class Group</label>
                                <p style={{lineHeight:"20px"}}>Mengajar kelas online dari tempat yang nyaman</p>
                            </div>
                        </div>
                        <div class="contentBoxFitur">
                            <img src={fitur3} />
                            <div>
                                <label class="fw-bold" style={{color:"#FF0000"}}>Private Classes</label>
                                <p style={{lineHeight:"20px"}}>Mulai dulu dengan 1 pelajar , bantu seminimal yang kamu bisa</p>
                            </div>
                        </div>
                        <div class="contentBoxFitur">
                            <img src={fitur4} />
                            <div>
                                <label class="fw-bold" style={{color:"#FF0000"}}>Offline Class</label>
                                <p style={{lineHeight:"20px"}}>Menemani pelajar praktek di tempat yang keren, dan nyaman</p>
                            </div>
                        </div>
                        <div class="contentBoxFitur">
                            <img src={fitur5} />
                            <div>
                                <label class="fw-bold" style={{color:"#FF0000"}}>Zona Insight</label>
                                <p style={{lineHeight:"20px"}}>Bagi pengalaman dan wawasan anda dalam meraih sukses dari kemampuan berbahasa Inggris</p>
                            </div>
                        </div>
                    </div>
               </div>
           </div>

           <div class="container py-5">
                <h4 class="text-center bold" style={{color:"#FF0000"}}>Kenapa mengajar di ZonaEnglish?</h4>
                <p class="text-center fw-bold" style={{color:"#737373"}}>Dapat berbagi keuntungan dan bantu kami untuk meningkatkan <br/> kemampuan Bahasa Inggris Pelajar Indonesia</p>
                <div class="conntet_boxesThree">
                    <div class="card" style={{width: "210px"}} data-aos="zoom-in-down" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <img src={iconImg1} class="card-img-top" style={{padding:"10px"}}  alt="..." />
                        <div class="card-body">
                            <div>
                                <h5 class="card-title fw-bold text-center" style={{fontSize:"14px", color:"#FF0000"}}>Waktu dan lokasi mengajar yang Fleksibel</h5>
                                <ul style={{fontSize:"12px", color:"#616161"}}>
                                    <li>Mengajar sambil liburan ok</li>
                                    <li>Mengajar di tempat favorit kamu pun ok</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card" style={{width: "210px"}} data-aos="zoom-in-down" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <img src={iconImg2} class="card-img-top"  alt="..." />
                        <div class="card-body">
                            <div>
                                <h5 class="card-title fw-bold text-center" style={{fontSize:"14px", color:"#FF0000"}}>Tingkatkan penghasilan 2x lipat</h5>
                                <ul style={{fontSize:"12px", color:"#616161"}}>
                                    <li>Jaminan penghasilan tiap bulan</li>
                                    <li>bisa dapat tambahan penghasilan</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card" style={{width: "210px"}} data-aos="zoom-in-down" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <img src={iconImg3} class="card-img-top"  alt="..." />
                        <div class="card-body">
                            <div>
                                <h5 class="card-title fw-bold text-center" style={{fontSize:"14px", color:"#FF0000"}}>Selalu mensuport Anda</h5>
                                <ul style={{fontSize:"12px", color:"#616161"}}>
                                    <li>Berkembang bersama kominitas teacher</li>
                                    <li>Pusat bantuan aplikasi 24 jam</li>
                                    <li>Program pelatihan online & offline</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card" style={{width: "210px"}} data-aos="zoom-in-down" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <img src={iconImg4} class="card-img-top"  alt="..." />
                        <div class="card-body">
                            <div>
                                <h5 class="card-title fw-bold text-center" style={{fontSize:"14px", color:"#FF0000"}}>Wujudkan Kelas Impian</h5>
                                <ul style={{fontSize:"12px", color:"#616161"}}>
                                    <li>Bebas berkreasi dan berinovasi dalam mengajar</li>
                                    <li>Bebas memilih tempat praktek di mana saja yang anda suka. Mall, Taman, Pasar dll</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card" style={{width: "210px"}} data-aos="zoom-in-down" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <img src={iconImg5} class="card-img-top"  alt="..." />
                        <div class="card-body">
                            <div>
                                <h5 class="card-title fw-bold text-center" style={{fontSize:"14px", color:"#FF0000"}}>Dapatkan sebanyak banyaknya pelajar</h5>
                                <ul style={{fontSize:"12px", color:"#616161"}}>
                                    <li>Karena ZonaEnglish adalah startup Education yang ada di seluruh Indonesia</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
           </div>

           <div class="bgColor">
                <div class="container pt-5">
                    <h4 class="text-center bold" style={{color:"#FF0000"}}>Ayo gabung sekarang!</h4>
                    <div class="boxContent_Join">
                        <div class="mt-4">
                            <h5 class="fw-bold">Langka - langkah Mendaftar di ZONAEnglish.ID</h5>
                            <div class="LinkCTN">
                                <img src={iconWAm} style={{width:"20px", height:"20px", marginRight:"10px"}} />
                                <p class="fw-bold" style={{color:"#FF0000"}}>Hubungi Whatsaap ZONAEnglish.ID jika anda memiliki pertanyaan</p>
                            </div>
                            <div class="LinkCTN">
                                <img src={iconEmailm} style={{width:"20px", height:"20px", marginRight:"10px"}} />
                                <p class="fw-bold" style={{color:"#FF0000"}}>Email ke Teacher@ZONAEnglish.id berisi Curriculum Vitae</p>
                            </div>
                            <p class="fw-bold">Anda akan segera di hubungi tim ZONAEnglish.ID untuk proses selanjutnya</p>
                            <div class="pt-3">
                                <a href="https://wa.wizard.id/4b8267">
                                    <div class="btn border border-danger me-2 fw-bold border-2">
                                        <img src={iconWAm} style={{width:"20px", marginRight:"10px"}} />
                                        <button class="btnFAKE fw-bold text-danger text-uppercase">Zona WhatsApp</button>
                                    </div>
                                </a>
                                <Link to="#">
                                <div class="btn border border-danger me-2 fw-bold border-2 MTop">
                                        <img src={iconEmailm} style={{width:"20px", marginRight:"10px"}} />
                                        <button class="btnFAKE fw-bold text-danger text-uppercase">Zona Email</button>
                                    </div>
                                </Link>
                                <Link to="/formulir_pendaftaran_teacher">
                                <div class="btn border border-danger bg-danger me-2 fw-bold border-2 MTop">
                                        {/* <img src={iconEmailm} style={{width:"20px", marginRight:"10px"}} /> */}
                                        <button class="btnFAKE fw-bold text-white text-uppercase">Daftar</button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <img src={teacherJoin} />
                    </div>
                </div>
           </div>

           <div class="container py-5 BoxFooter">
                <div>
                    <h3>Download App</h3>
                    <a href="https://play.google.com/store/apps/details?id=com.zn.zonaenglish" target="_blank">
                        <img src={downloadapp} />
                    </a>                  
                    <div class="mt-4">
                    <a href="https://www.instagram.com/zonaenglish.id/" target="_blank">
                            <img class="me-3" src={sosmed1} />
                        </a>
                        <a href="#">
                            <img class="me-3" src={sosmed2} />
                        </a>
                        <a href="#">
                            <img class="me-2" src={sosmed3} />
                        </a>
                    </div>
                </div>
                <div class="mgrT">
                    <h4>Alamat</h4>
                    <div class="d-flex">
                        <img class="me-3" style={{width:"32px", height:"32px"}} src={locate} />
                        <p>ZonaEnglish indonesia HQ <br/> Jln. Pemuda No. 352 Kolaka <br/> Sulawesi Tenggara</p>
                    </div>
                </div>
                <img src={imgandroid3} />
            </div>

            <div class="bgColor" style={{paddingTop:"20px"}}>
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

export default Tutor;