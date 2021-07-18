import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom';
import wave from '../images/wave.svg'
import go from '../images/go.svg'

const Login =() => {
    const history = useHistory();
    const goHomepage=()=>{
        history.push('/userHomePage');
    }
    const goAdmin=()=>{
        history.push('/adminHomePage');
    }
    const goSign=()=>{
        history.push('/signup');
    }
    return (
        <div id="body">
            <section className="login-page section-b-space">
                <div className="container" style={{paddingTop:'30%',paddingBottom:'30%'}}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div class="d-block text-logo">Login<span class="dot">.</span></div>
                            <div class="container">
                                <div className="theme-card">
                                    <form className="theme-form">
                                        <div class="column col-md-12">
                                            <div class="form-group mt-4">
                                                <input type="text" class="form-control" id="InputSubject" name="InputSubject" placeholder="Name" required="required" data-error="Subject is required." />
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="column col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="InputSubject" name="InputSubject" placeholder="Password" required="required" data-error="Subject is required." />
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="column col-md-6 float-sm-end">
                                            <button class="btn btn-default btn-full" onClick={goHomepage}>
                                                <span className="smallText">Login</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 right-login" style={{display:'inline-block',float:'none',textalign:'left',marginright:'-4px'}}>
                            <dic class="container" onClick={goSign}>
                                <div class="widget-header text-center">
                                    <h3 class="widget-title">New Customer</h3>
                                    <img src={wave} class="wave" alt="wave" />
                                </div>
                                <div class="container">
                                    <div className="theme-card authentication-right">
                                        <h3 class="widget-title text-center" style={{fontSize:15}}>Sign up for a free account at our website<span class="text-logo">.</span><br/>
                                        Registration is quick and easy<span class="text-logo">.</span>
                                        </h3>
                                    </div>
                                </div>
                                <div class="d-block text-logo float-md-end mt-4">REGISTER NOW<img src={go} ></img></div>
                            </dic>
                        </div>
                    </div>
                </div>
            </section>
            <div class="column col-md-4 float-sm-end">
                <button class="btn btn-default btn-full" onClick={goAdmin}>
                    <span className="smallText">For admin page test</span>
                </button>
            </div>
        </div>
    )
}

export default Login;