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

const AExpertApplication =()=> {
    // const history = useHistory();
    const Q = [
        {index:'1',time:'12:00PM',date:'07/07/2021',expert:"Song",user:'Jan',duration:'30m',price:'$30',status:"pending"},
        {index:'1',time:'12:00PM',date:'07/07/2021',expert:"Song",user:'Jan',duration:'30m',price:'$30',status:"pending"},
        {index:'1',time:'12:00PM',date:'07/07/2021',expert:"Song",user:'Jan',duration:'30m',price:'$30',status:"pending"},
        {index:'1',time:'12:00PM',date:'07/07/2021',expert:"Song",user:'Jan',duration:'30m',price:'$30',status:"pending"},
        {index:'1',time:'12:00PM',date:'07/07/2021',expert:"Song",user:'Jan',duration:'30m',price:'$30',status:"pending"},
        {index:'1',time:'12:00PM',date:'07/07/2021',expert:"Song",user:'Jan',duration:'30m',price:'$30',status:"pending"}
    ]
    const [show,setShow]=React.useState([1,0,0,0]);
    const all=()=>{
        setShow([1,0,0,0]);
        console.log('show',show);
    }
    const process=()=>{
        setShow([0,1,0,0]);
        console.log('show',show);
    }
    const approved=()=>{
        setShow([0,0,1,0]);
        console.log('show',show);
    }
    const rejected=()=>{
        setShow([0,0,0,1]);
        console.log('show',show);
    }

    return (
        <>
            <AHeader />
            <ANav show={[0,1,0]}/>
            <div class="container">
                <div class="row mt-4">
                    <div class="column col-md-4 float-sm-end"></div>
                    <div class="column col-md-4 p-0 float-sm-end">
                        <span>
                            <input name="KeyWord" class="form-control" type="text" placeholder="search apply ID" style={{display:"inline-flex"}}/>
                        </span>
                    </div>
                    <div class="column col-md-4 float-sm-end">
                         <span class="search icon-button float-sm-front">
                            <i class="icon-magnifier"></i>
                        </span>
                    </div>
                </div>
                <div class="d-flex align-items-start mt-4" >
                    <div class="nav flex-column nav-pills me-3 m-10" >
                        <button class={show[0]?"nav-link active":"nav-link"} style={{color:"#79889e",backgroundColor:"white"}} onClick={all}>All</button>
                        <button class={show[1]?"nav-link active":"nav-link"} style={{color:"#79889e",backgroundColor:"white"}} onClick={process}>Processing</button>
                        <button class={show[2]?"nav-link active":"nav-link"} style={{color:"#79889e",backgroundColor:"white"}} onClick={approved}>Approved</button>
                        <button class={show[3]?"nav-link active":"nav-link"} style={{color:"#79889e",backgroundColor:"white"}} onClick={rejected}>Rejected</button>
                    </div>
                    {/* all applications */}
                    {show[0]?
                    <table class="table mt-4">
                        <thead>
                            <tr>
                            <th scope="col">Apply ID</th>
                            <th scope="col">Time</th>
                            <th scope="col">Date</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Q.map((item)=><AExpertOrder id={item.index} time={item.time} date={item.date} user={item.user} status={item.status} show={[1,1,1,1,0,0,0,0]}/>)}
                        </tbody>
                    </table>
                    :null}
                    {/* Processing */}
                    {show[1]?
                    <table class="table mt-4">
                        <thead>
                            <tr>
                            <th scope="col">Apply ID</th>
                            <th scope="col">Time</th>
                            <th scope="col">Date</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Q.map((item)=><AExpertOrder id={item.index} time={item.time} date={item.date} user={item.user} status={"Processing"} show={[1,1,1,1,0,0,0,0]}/>)}
                        </tbody>
                    </table>
                    :null}
                    {/* approved */}
                    {show[2]?
                    <table class="table mt-4">
                        <thead>
                            <tr>
                            <th scope="col">Apply ID</th>
                            <th scope="col">Time</th>
                            <th scope="col">Date</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Q.map((item)=><AExpertOrder id={item.index} time={item.time} date={item.date} user={item.user} status={"approved"} show={[1,1,1,1,0,0,0,0]}/>)}
                        </tbody>
                    </table>
                    :null}
                    {/* rejected */}
                    {show[3]?
                    <table class="table mt-4">
                        <thead>
                            <tr>
                            <th scope="col">Apply ID</th>
                            <th scope="col">Time</th>
                            <th scope="col">Date</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Q.map((item)=><AExpertOrder id={item.index} time={item.time} date={item.date} user={item.user} status={"rejected"} show={[1,1,1,1,0,0,0,0]}/>)}
                        </tbody>
                    </table>
                    :null}
                </div>

            </div>
            <UFooter />
        </>
    );
}

export default AExpertApplication;
