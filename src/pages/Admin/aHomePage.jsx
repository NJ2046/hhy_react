import React from 'react';
import { useHistory } from 'react-router-dom';
import AHeader from '../../components/aHeader';
import ANav from '../../components/aNav';
import UFooter from '../../components/uFooter';
import wave from '../../images/wave.svg';
import add from '../../images/add.svg'
import ListFollowing from '../../components/listFollowing';
import GeneralQCard from '../../components/generalQCard';
import ALERT from '../../components/alert';
import context from 'react-bootstrap/esm/AccordionContext';

const AHomePage =()=> {
    // const history = useHistory();
    // ID,author,date,time,location,content
    const Q = [
        {author:'Jan',date:'29 March 2021',title:'ID:Wondering How To Make Your Hair Style Rock?',Q:'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.'},
        {author:'Jan',date:'29 March 2021',title:'ID:Wondering How To Make Your Hair Style Rock?',Q:'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.'},
        {author:'Jan',date:'29 March 2021',title:'ID:Wondering How To Make Your Hair Style Rock?',Q:'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.'},
        {author:'Jan',date:'29 March 2021',title:'ID:Wondering How To Make Your Hair Style Rock?',Q:'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.'},
        {author:'Jan',date:'29 March 2021',title:'ID:Wondering How To Make Your Hair Style Rock?',Q:'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.'},
    ]

    return (
        <>
            <AHeader />
            <ANav show={[1,0,0]}/>
            <div class="container">
                <div class="row mt-4">
                    <div class="column col-md-4 float-sm-end"></div>
                    <div class="column col-md-4 p-0 float-sm-end">
                        <span>
                            <input name="KeyWord" class="form-control" type="text" placeholder="search postID" style={{display:"inline-flex"}}/>
                        </span>
                    </div>
                    <div class="column col-md-4 float-sm-end">
                         <span class="search icon-button float-sm-front">
                            <i class="icon-magnifier"></i>
                        </span>
                    </div>
                </div>
                <div class="container mt-4">
                    <div class="row gy-4">
                        {Q.map((item)=><GeneralQCard Title={item.title} Date={item.date} Q={item.Q} Author={item.author}/>)}
                    </div>
                </div>
            </div>
            {/* <ALERT title={'Congratulations'} content={'Your expert application is approved'} next={'Got it!'}/> */}
            <UFooter />
        </>
    );
}

export default AHomePage;
