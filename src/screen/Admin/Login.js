import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="BackgroundLogin">
                <div className="login-boxes">
                    <img style={{width:"300px"}} src={require("../../images/iluLogin.png").default} alt="" />
                    <div style={{ padding:"10px", width:"450px"}}>
                        <div style={{textAlign:"center"}}>
                            <img style={{width:"100px",}} src={require("../../images/adminPage.png").default} alt="" />
                            <h1 style={{textTransform:"uppercase"}}>welcome</h1>
                        </div>
                        <div style={{marginTop:"20px"}}>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <label style={{paddingLeft:"20px", color:"#8F8F8F"}}>Username</label>
                                <input className="inputText" style={{border:"none", borderBottom:"2px solid #DF4649", outline:"none", paddingLeft:"30px", marginTop:"5px"}} type="text" />
                                <img style={{width:"21px", position:"relative", bottom:"25px"}} src={require("../../images/user.png").default} alt="" />
                            </div>

                            <div style={{display:"flex", flexDirection:"column", marginTop:"10px"}}>
                                <label style={{paddingLeft:"20px", color:"#8F8F8F"}}>Password</label>
                                <input style={{border:"none", borderBottom:"2px solid #DF4649", outline:"none", paddingLeft:"30px", marginTop:"5px", backgroundColor:"#fff"}} type="password" />
                                <img style={{width:"21px", position:"relative", bottom:"25px"}} src={require("../../images/pass.png").default} alt="" />
                            </div>

                            <Link to="/admin/list_pendaftar">
                                <button class="buttonlogin"  type="button">Login</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;