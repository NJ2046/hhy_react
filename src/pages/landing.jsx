import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Button, Row} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const Landing =()=> {
    const history = useHistory();
    const goLogin=()=>{
        history.push('/login');
    };
    return (
        <Container style={{paddingTop:400}}>
            <Row>
                <div class="d-block text-logo">Welcome to RWT<span class="dot">.</span></div>
                <div class="column col-md-4">
                    <button class="btn btn-default btn-full" onClick={goLogin}>
                        <span className="smallText">Start Your Remote Work From Here</span>
                    </button>
                </div>
            </Row> 
        </Container>
    );
}

export default Landing;
