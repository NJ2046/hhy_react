import React from 'react';
import { useHistory } from 'react-router-dom';

const UHeader = () => {
    const history = useHistory();
    const goLogin=()=>{
        history.push('/login');
    }
    return(
        <>
            <header class="header-personal">
                <div class="container-xl header-top">
                    <div class="row align-items-center">

                        <div class="col-4 d-none d-md-block d-lg-block">
                            
                        </div>

                        <div class="col-md-4 col-sm-12 col-xs-12 text-center">
                            <div class="d-block text-logo">RWT<span class="dot">.</span></div>
                        </div>

                        <div class="col-md-4 col-sm-12 col-xs-12">
                            <div class="header-buttons float-md mt-4 mt-md-0">
                                <button class="search icon-button">
                                    <i class="icon-magnifier"></i>
                                </button>
                                <button class="burger-menu icon-button ms-2 float-end float-md-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                    </svg>
                                </button>
                                <div class="header-buttons float-md-end mt-4 mt-md-0">
                                    <span className="nav-link" href='#footer' onClick={goLogin}><a style={{fontSize:"6px",color:"#6c757d"}}>LogOut &#x25ba;</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div class="post post-list-sm circle"></div>
        </>
    )
}

export default UHeader;