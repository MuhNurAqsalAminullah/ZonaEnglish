import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import imgandroid from '../images/app3.png';
import imgandroid2 from '../images/app4.png';
import imgandroid3 from '../images/app5.png';
import downloadapp from '../images/download_app.png';
import imgregister from '../images/regisimg.png';
import locate from '../Icon/location.png';
import picturesone from '../images/pictures1.png';
import picturessecond from '../images/pictures2.png';
import picturesthree from '../images/pictures3.png';
import picturesfour from '../images/pictures4.png';
import picturesfive from '../images/pictures5.png';
import picturessix from '../images/pictures6.png';
import pickicon1 from '../images/pick1.png';
import pickicon2 from '../images/pick2.png';
import pickicon3 from '../images/pick3.png';
import pickicon4 from '../images/pick4.png';
import pickicon5 from '../images/pick5.png';
import pickicon6 from '../images/pickIcon1.png';
import pickicon7 from '../images/pickIcon2.png';
import pickicon8 from '../images/pickIcon3.png';
import pickicon9 from '../images/pickIcon4.png';
import pickicon10 from '../images/pickIcon5.png';
import sosmed1 from '../Icon/igLink.png';
import sosmed2 from '../Icon/fbLink.png';
import sosmed3 from '../Icon/inLink.png'

const Home = () => {

    useEffect(() => {
        Aos.init({duration:3000});
    }, []);
    return (
        <div>
            <div class="jumbotron bg-colors">
                <div class="container ctn" style={{paddingTop:"100px"}}>
                    <div class="row py-3">
                        <div class=" col-lg-8 my-auto">
                            <h1 class=" text-left bold-H">Mudah Berbahasa Inggris  <br/> Dengan 1 Aplikasi</h1>
                            <p class="bold text-white mb-5">Belajar kapan saja, dimana saja, pasti seru </p>
                            <a href=" https://play.google.com/store/apps/details?id=com.zn.zonaenglish" target="_blank" >
                            <img class="mb-5" src={downloadapp} />
                            </a>
                            
                        </div>
                        <img class="col-md-8 col-lg-4" src={imgandroid} />
                    </div>
                </div>
            </div>
            <div class="container py-5">
                <h4 class="text-center bold">Kenali Dua Tipe Masalah Pelajar di Zona English</h4>
                <div class="pt-5">
                    <div class="">
                        <div>
                            <div class="boxOne">
                                {/* <div class="imgN"></div> */}
                                <img src={picturesone}/>
                                <p class="bold contentP">Saya ingin berbahasa Inggris tapi saya sama 
                                sekali tidak punya dasar, mau belajar dari nol bisa nggak yah ?</p>
                            </div>
                        </div>
                        <div>
                            <div class="boxTwo">
                                {/* <div class=" imgN"></div> */}
                                <img src={picturessecond}/>
                                <p class="bold text-danger contentP">Saya sudah lumayan tahu bahasa Inggris tapi 
                                saya tidak bisa berkomunikasi dengan lancar, masih butuh belajar lagi, bagaimana caranya yah ?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h6 class="text-center fw-bold">Kalau punya masalah seperti di atas <br /> Zona English hadir sebagai solusi.</h6>
            </div>

            <div className="bgColor">
                <div class="container py-5">
                    <h4 class="text-center fw-bold">Bagaimana ZonaEnglish Membantumu Bisa Berbahasa Inggris hanya <br/> Dengan 1 Aplikasi</h4>
                    <h6 class="mt-5 fw-bold">Mulailah perjalanan belajarmu dari</h6>

                    <div class="boxContentOne mt-4" data-aos="fade-left">
                        {/* <div class="imgN"></div> */}
                        <img class="widthP" src={picturesthree} />
                        <div class="contentOne">
                            <div>
                                <h5 class="">Nonton <span class="fw-bold">Video Belajar</span></h5>
                                <p>Pelajari materinya lebih awal sebelum masuk kelas agar kamu tidak bingung dan bisa aktif di kelas</p>
                            </div>
                            <button type="button" class="btn btn-danger">Pelajari Selengkapnya</button>
                        </div>
                    </div>

                    <div class="boxContentOne mt-5" data-aos="fade-left">
                        {/* <div class="imgN"></div> */}
                        <img class="widthP" src={picturesfour} />
                        <div class="contentOne">
                            <div>
                                <h5 class="">Ikuti <span class="fw-bold">Kelas Online</span></h5>
                                <p>Di kelas Online ini kamu sudah mampu berbahasa Inggris sesuai level yang di pandu oleh Master Tutor dan Native</p>
                            </div>
                            <button type="button" class="btn btn-danger">Pelajari Selengkapnya</button>
                        </div>
                    </div>

                    <div class="mt-5" data-aos="fade-right">
                        <h5 class="centerSubTitle">Langsung Praktek Di <span class="fw-bold">Tempat Belajar Offline</span></h5>
                        <div class="boxContentTwo mt-3">
                            {/* <div class="imgN"></div> */}
                            <img class="widthP" src={picturesfive} />
                            <div class="contentTwo">
                                <div>
                                    <p class="ctnwidth">Menyempurnakan belajar bahasa Inggris kalian dengan praktek real di lapangan, contohnya, kamu berbelanja di Supermarket, Mall, Pasar, Restaurant, Cafe dll, dengan menggunakan bahasa Inggris</p>
                                </div>
                                <button type="button" class="btn btn-danger">Pelajari Selengkapnya</button>
                            </div>
                        </div>
                    </div>

                    <div class="mt-5" data-aos="fade-right">
                        <h5 class="centerSubTitle">Raih Sukses Di <span class="fw-bold">Zona Insight</span></h5>
                        <div class="boxContentTwo mt-3">
                            {/* <div class="imgN"></div> */}
                            <img class="widthP" src={picturessix} />
                            <div class="contentTwo">
                                <div class="ctnwidth">
                                    <p>Kemampuan berbahasa Inggris kamu akan lebih sempurna dengan mengikuti Seminar, Workshop, persiapan test TOEFL, IELTS hingga bimbingan beasiswa ke luar negeri</p>
                                </div>
                                <button type="button" class="btn btn-danger">Pelajari Selengkapnya</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container py-5">
                <h4 class="text-center fw-bold">Mengapa Zona English Jadi Solusi No.1</h4>
                <div class="lyt mt-5">
                    <div class="text-center box">
                        {/* <div class="IconC rounded-circle"></div> */}
                        <img class="IconC" src={pickicon1} />
                        <p class="pt-2">Biaya terjangkau untuk semua kalangan</p>
                    </div>
                    <div class="text-center box">
                        {/* <div class="IconC rounded-circle"></div> */}
                        <img class="IconC" src={pickicon2} />
                        <p class="pt-2">Diajar oleh Native, Foreing & Master Tutor yang semuanya berpengalaman</p>
                    </div>
                    <div class="text-center box">
                        {/* <div class="IconC rounded-circle"></div> */}
                        <img class="IconC" src={pickicon3} />
                        <p class="pt-2">Materi dalam bentuk video yang menarik, dan mudah di pahami sesaui level kemampuan kamu</p>
                    </div>
                    <div class="text-center box">
                        {/* <div class="IconC rounded-circle"></div> */}
                        <img class="IconC" src={pickicon4} />
                        <p class="pt-2">System belajar terbaik O2O (Online To Offline) pertama di Indonesia</p>
                    </div>
                    <div class="text-center box">
                        {/* <div class="IconC rounded-circle"></div> */}
                        <img class="IconC" src={pickicon5} />
                        <p class="pt-2">Fleksibel waktu & tempatnya</p>
                    </div>
                </div> 
            </div>

            <div class="container py-5">
                <div class="lytTwo">
                    <div class="CBoxOne">
                        <div class="SCBox">
                            {/* <div class="IconC rounded-circle"></div> */}
                            <img style={{width:"140px"}} src={pickicon6} />
                            <p class="pt-2">Menyediakan 1000 lebih Tutor tersebar seluruh Indonesia</p>
                        </div>
                        <div class="SCBox">
                            {/* <div class="IconC rounded-circle"></div> */}
                            <img style={{width:"140px"}} src={pickicon7} />
                            <p class="pt-2">Menyediakan kelas Online setiap hari, Group dan Private</p>
                        </div>
                    </div>
                    <img class="Rwidth mt-2" src={imgandroid2} />
                    <div class="mt-4">
                        <div class="SCBox">
                            {/* <div class="IconC rounded-circle"></div> */}
                            <img style={{width:"140px"}} src={pickicon8} />
                            <p class="pt-2">Menyediakan video belajar gratis untuk semua level</p>
                        </div>
                        <div class="SCBox">
                            {/* <div class="IconC rounded-circle"></div> */}
                            <img style={{width:"140px"}} src={pickicon9} />
                            <p class="pt-2">Menyediakan 300 lebih tempat Meeting Poin sebagai tempat prakterk dan ruang belajar</p>
                        </div>
                        <div class="SCBox">
                            {/* <div class="IconC rounded-circle"></div> */}
                            <img style={{width:"140px"}} src={pickicon10} />
                            <p class="pt-2">Menyediakan komunitas teman speaking di seluruh kota Indonesia</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bgColor">
                <div className="container BoxDaftar" style={{paddingLeft:"80px", paddingRight:"80px"}}>
                    <div class="container py-5">
                        <div>
                            <p class="fw-bold">Ingin Menjadi Tutor, Ayo Bergabung Bersama Kami</p>
                            <p>Punya kemampuan speaking aktif <br/>
                                Semua bisa gabung di <span class="fw-bold">ZonaEnglish Teacher Community</span> <br/>
                                Raih kesempatan menjadi Profesional English Teacher</p>
                            
                            <div class="pt-3">
                                <Link to="/formulir_pendaftaran_teacher">
                                <button type="button" class="btn btn-danger me-2 fw-bold">Daftar Sebagai Tutor</button>
                                </Link>
                                <Link to="/#">
                                <button type="button" class=" btn border border-danger text-danger fw-bold border-2 mgrT">Daftar di ZonaEnglish Teacher Community</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <img style={{height:"100%"}} src={imgregister} />
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
    )
};

export default Home;