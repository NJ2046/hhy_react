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

const AExpertsOrder =()=> {
    // const history = useHistory();
    const Q = [
        {index:'1',time:'12:00PM',date:'07/07/2021',expert:"Song",user:'Jan',duration:'30m',price:'$30',status:"pending"},
        {index:'1',time:'12:00PM',date:'07/07/2021',expert:"Song",user:'Jan',duration:'30m',price:'$30',status:"pending"},
        {index:'1',time:'12:00PM',date:'07/07/2021',expert:"Song",user:'Jan',duration:'30m',price:'$30',status:"pending"},
        {index:'1',time:'12:00PM',date:'07/07/2021',expert:"Song",user:'Jan',duration:'30m',price:'$30',status:"pending"},
        {index:'1',time:'12:00PM',date:'07/07/2021',expert:"Song",user:'Jan',duration:'30m',price:'$30',status:"pending"},
        {index:'1',time:'12:00PM',date:'07/07/2021',expert:"Song",user:'Jan',duration:'30m',price:'$30',status:"pending"}
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
                            <input name="KeyWord" class="form-control" type="text" placeholder="search order ID" style={{display:"inline-flex"}}/>
                        </span>
                    </div>
                    <div class="column col-md-4 float-sm-end">
                         <span class="search icon-button float-sm-front">
                            <i class="icon-magnifier"></i>
                        </span>
                    </div>
                </div>
                {/* expert orders */}
                <table class="table mt-4">
                    <thead>
                        <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Time</th>
                        <th scope="col">Date</th>
                        <th scope="col">User</th>
                        <th scope="col">Expert</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Q.map((item)=><AExpertOrder id={item.index} time={item.time} date={item.date} user={item.user} expert={item.expert} duration={item.duration} price={item.price} status={item.status} show={[1,1,1,1,1,1,1,1]}/>)}
                    </tbody>
                </table>
            </div>
            <UFooter />
        </>
    );
}

export default AExpertsOrder;
