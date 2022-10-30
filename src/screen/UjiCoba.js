import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
// import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import imgandroid from '../images/app1.png';
import imgandroid2 from '../images/app4.png';

const UjiCoba = () => {
    let history = useHistory();
    let promise = () => {
        const resolveAfter3Sec = new Promise((resolve, reject) => {
            setTimeout(resolve,3000);
            setTimeout(() => {
                history.push("/")
            }, 8000);
            // if (resolve) {
            //     setTimeout(resolve,3000);
            // } else {
            //     setTimeout(reject,3000)
            // }
        });
        toast.promise(resolveAfter3Sec, {
            pending: "Sedang memesiksa",
            success: "Data diri anda succes",
        })
        // history.push("/")
    }
   
    return (
        <div>
            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" >
                <ol class="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="container boxslider" style={{backgroundColor:"blue", width:"250px", height:"150px"}}>
                            {/* <h1>Example Headline</h1>
                            <p>Lorem Ipsum is simply dummy text of 
                                the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of 
                                type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries,</p>
                                <a class="btn btn-lg btn-primary">Sign Up today</a> */}
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container boxslider" style={{backgroundColor:"red", width:"250px", height:"150px"}}>
                            {/* <h1>Example Headline</h1>
                            <p>Lorem Ipsum is simply dummy text of 
                                the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of 
                                type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries,</p>
                                <a class="btn btn-lg btn-primary">Sign Up</a> */}
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


            <br />
            <br />

            <ToastContainer/>
            <button onClick={promise}>Notify</button>
            {/* <ToastContainer/> */}
        </div>
        // <div>
        //     <div class="container">
        //         <div class="row ">
        //             <div class="col-lg-6">
        //                 <div class="d-flex">
        //                     <h1 class="me-3 col">Hello World 1</h1>
        //                     <h1 class="">Hello World 2</h1>
        //                 </div>
        //             </div>
        //             <div class="col-lg-6">
        //                 <div class="d-flex flex-row-reverse ">
        //                     <h1 class="">Hello World 3</h1>
        //                     <h1 class="me-3 col">Hello World 4</h1>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div class="container py-3">
        //         <div class="d-flex flex-row-reverse bd-highlight">
        //             <h1 class="ms-5">Hello World2</h1>
        //             <h1>Hello World2</h1>
        //         </div>
        //         <div class="d-flex flex-row-reverse bd-highlight">
        //             <h1 class="ms-5">Hello World3</h1>
        //             <h1>Hello World4</h1>
        //         </div>
        //         <div class="d-flex flex-row bd-highlight">
        //             <h1>Hello World4</h1>
        //             <h1 class="ms-5">Hello World2</h1>
        //         </div>
        //         <div class="d-flex flex-row bd-highlight">
        //             <h1>Hello World4</h1>
        //             <h1 class="ms-5">Hello World2</h1>
        //         </div>
        //     </div>

        //     <div class="container py-5">
        //         <h4 class="text-center bold">Kenali Dua Tipe Pelajaran Zona English</h4>
        //         <div class="pt-5">
        //             <div class="">
        //                 <div>
        //                     <div class="boxOne">
        //                         {/* <h1 class="me-3">Hello World 1</h1> */}
        //                         <div class="imgN"></div>
        //                         <p class="bold contentP">Saya ingin berbahasa inggris tapi sama sekali tidak punya dasar, mau belajar dari nol bisa gak yah ...!</p>
        //                     </div>
        //                 </div>
        //                 <div>
        //                     <div class="boxTwo">
        //                         <div class=" imgN"></div>
        //                         {/* <p class=" bold text-danger">Saya sudah lumayan tahu bahasa inggris tapi <br/> tidak bisa berkomunikasi dengan lancar, masih <br/> butuh belajar lagi</p> */}
        //                         <p class="bold text-danger contentP">saya sudah lumayan tahu bahasa inggris tapi tidak bisa berkomunikasi dengan lancar, masih butuh belajar lagi</p>
        //                         {/* <h1 class="">Hello World 4</h1> */}
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     <div class="d-flex flex-row mt-5">
        //             <div class="imgN"></div>
        //                 <div>
        //                     <h1 class="ms-5">Hello World1</h1>
        //                 </div>
        //             </div>
        //             <div class="d-flex flex-row mt-5">
        //             <div class="imgN"></div>
        //                 <div>
        //                     <h1 class="ms-5">Hello World1</h1>
        //                 </div>
        //             </div>
        //     <img className="imgW" src={imgandroid} />

        //     <div class="container py-5">
        //         <div class="lytTwo">
        //             <div class="CBoxOne">
        //                 <div class="SCBox">
        //                     <div class="IconC rounded-circle"></div>
        //                     <p class="pt-2">Menyediakan 1000 lebih tutor tersebar seluruh indonesia</p>
        //                 </div>
        //                 <div class="SCBox">
        //                     <div class="IconC rounded-circle"></div>
        //                     <p class="pt-2">Menyediakan kelas online setiap hari, Group dan private</p>
        //                 </div>
        //             </div>
        //             <img class="Rwidth mt-2" src={imgandroid2} />
        //             <div class="mt-4">
        //                 <div class="SCBox">
        //                     <div class="IconC rounded-circle"></div>
        //                     <p class="pt-2">menyediakan video Belajar gratis untuk semualevel</p>
        //                 </div>
        //                 <div class="SCBox">
        //                     <div class="IconC rounded-circle"></div>
        //                     <p class="pt-2">Menyediakan 300 lebih tempat realistis Point sebagai tempat prakterk dan ruang belajar</p>
        //                 </div>
        //                 <div class="SCBox">
        //                     <div class="IconC rounded-circle"></div>
        //                     <p class="pt-2">Menyediakan komunitas teman speaking di seluruh kota indonesia</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     <div class="container py-5">
        //         <h4 class="text-center">Mengapa menjadi solusi No.1</h4>
        //         <div class="lyt mt-5">
        //             <div class="text-center">
        //                 <div class="IconC rounded-circle"></div>
        //                 <p class="pt-2">Biaya untuk semua <br/> kalangan</p>
        //             </div>
        //             <div class="text-center">
        //                 <div class="IconC rounded-circle"></div>
        //                 <p class="pt-2">Biaya untuk semua <br/> kalangan</p>
        //             </div>
        //             <div class="text-center">
        //                 <div class="IconC rounded-circle"></div>
        //                 <p class="pt-2">Biaya untuk semua <br/> kalangan</p>
        //             </div>
        //             <div class="text-center">
        //                 <div class="IconC rounded-circle"></div>
        //                 <p class="pt-2">Biaya untuk semua <br/> kalangan</p>
        //             </div>
        //             <div class="text-center">
        //                 <div class="IconC rounded-circle"></div>
        //                 <p class="pt-2">Biaya untuk semua <br/> kalangan</p>
        //             </div>
        //         </div> 
        //     </div>

            
        // </div>
        
        
        
    );
};

export default UjiCoba;