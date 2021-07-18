import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Button, Row} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import back from '../images/back.svg'

const Sign =() => {
    const history = useHistory();
    const goLogin=()=>{
        history.push('/login');
    }
    return (
        <div id="body">
            <section className="login-page section-b-space">
                <div className="container" style={{paddingTop:'30%',paddingBottom:'30%'}}>
                    <div className="row">
                        <div className="col-lg-6" onClick={goLogin} style={{marginTop:'15%'}}>
                            <span class="d-block text-logo" ><img src={back} ></img> Back Login</span>
                        </div>
                        <div className="col-lg-6 right-login" style={{display:'inline-block',float:'none',textalign:'left',marginright:'-4px'}}>
                            <div class="d-block text-logo">Sign Up<span class="dot">.</span></div>
                            <div class="container">
                                <div className="theme-card">
                                    <form className="theme-form">
                                        <div class="column col-md-12">
                                            <div class="form-group mt-4">
                                                <input type="text" class="form-control" id="InputSubject" name="InputSubject" placeholder="Email" required="required" data-error="Subject is required." />
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="column col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="InputSubject" name="InputSubject" placeholder="Password" required="required" data-error="Subject is required." />
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="column col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="InputSubject" name="InputSubject" placeholder="Confirm Password" required="required" data-error="Subject is required." />
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="column col-md-6 float-sm-end">
                                            <button class="btn btn-default btn-full" >
                                                <span className="smallText">Sign Now</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sign;