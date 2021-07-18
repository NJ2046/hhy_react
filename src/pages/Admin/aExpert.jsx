import React from 'react';
import { useHistory } from 'react-router-dom';
import AHeader from '../../components/aHeader';
import ANav from '../../components/aNav';
import UFooter from '../../components/uFooter';
import AAuthorCard from '../../components/aauthorCard'
import AExpertOrder from '../../components/aExpertOrder'
import wave from '../../images/wave.svg';
import add from '../../images/add.svg'
import ListFollowing from '../../components/listFollowing';
import GeneralQCard from '../../components/generalQCard';

const AExperts =()=> {
    // const history = useHistory();
    const Q = [
        {index:'1123123',time:'12:00PM',date:'07/07/2021',expert:"Song",user:'Jan',duration:'30m',price:'$30',status:"pending"},
        {index:'1444',time:'12:00PM',date:'07/07/2021',expert:"Song",user:'Jan',duration:'30m',price:'$30',status:"pending"},
        {index:'123132',time:'12:00PM',date:'07/07/2021',expert:"Song",user:'Jan',duration:'30m',price:'$30',status:"pending"},
        {index:'109349587',time:'12:00PM',date:'07/07/2021',expert:"Song",user:'Jan',duration:'30m',price:'$30',status:"pending"},
        {index:'133993982',time:'12:00PM',date:'07/07/2021',expert:"Song",user:'Jan',duration:'30m',price:'$30',status:"pending"},
        {index:'1234728',time:'12:00PM',date:'07/07/2021',expert:"Song",user:'Jan',duration:'30m',price:'$30',status:"pending"}
    ]

    return (
        <>
            <AHeader />
            <ANav show={[0,1,0]}/>
            <div class="container">
                <div class="row mt-4">
                    <div class="column col-md-4 float-sm-end"></div>
                    <div class="column col-md-4 p-0 float-sm-end">
                        <span>
                            <input name="KeyWord" class="form-control" type="text" placeholder="search expert ID" style={{display:"inline-flex"}}/>
                        </span>
                    </div>
                    <div class="column col-md-4 float-sm-end">
                         <span class="search icon-button float-sm-front">
                            <i class="icon-magnifier"></i>
                        </span>
                    </div>
                </div>
                {/* List all experts */}
                <div class="row gy-4 mt-4">
                    {Q.map((item)=><AAuthorCard Author={item.user} id={item.index}/>)}
                </div>
            </div>
            <UFooter />
        </>
    );
}

export default AExperts;
