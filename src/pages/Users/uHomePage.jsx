import React from 'react';
import { useHistory } from 'react-router-dom';
import UHeader from '../../components/uHeader';
import UFooter from '../../components/uFooter';
import wave from '../../images/wave.svg';
import add from '../../images/add.svg'
import ListFollowing from '../../components/listFollowing';
import GeneralQCard from '../../components/generalQCard';

const UHomePage =()=> {
    // const history = useHistory();
    const Communities = ['Zoom','VooV','Teams','123','555','fdsaf'];
    const items = [
        {title: 'ITEM000000', date: '11'},
        {title: 'ITEM000001', date: '12'},
        {title: 'ITEM000002', date: '4'},
        {title: 'ITEM000003', date: '5'},
        {title: 'ITEM000004', date: '1'},
        {title: 'ITEM000005', date: '3'}
    ]
    const Q = [
        {author:'Jan',date:'29 March 2021',title:'Wondering How To Make Your Hair Style Rock?',Q:'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.'},
        {author:'Jan',date:'29 March 2021',title:'Wondering How To Make Your Hair Style Rock?',Q:'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.'},
        {author:'Jan',date:'29 March 2021',title:'Wondering How To Make Your Hair Style Rock?',Q:'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.'},
        {author:'Jan',date:'29 March 2021',title:'Wondering How To Make Your Hair Style Rock?',Q:'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.'},
        {author:'Jan',date:'29 March 2021',title:'Wondering How To Make Your Hair Style Rock?',Q:'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence.'},
    ]

    return (
        <>
            <UHeader />
            <section class="main-content">
                <div className="container-xl">
                    <div class="row gy-4">
                        <div class="col-lg-3">
                            <div class="widget rounded">
                                <div class="widget-header text-center">
                                    <h3 class="widget-title">Communities</h3>
                                    <img src={wave} class="wave" alt="wave" />
                                </div>
                                <div class="widget-content">
                                    <ul class="list">
                                        {Communities.map((item) =><li><a href="#">{item}</a></li>)}
                                    </ul>
                                </div>
                                <button class="btn btn-default btn-full" style={{marginTop:20}}>
                                    <img src={add} class="wave" alt="wave" /><span className="smallText">Add a community</span>
                                </button>
                                
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="row-xl">
                                <h3 class="widget-title text-center">General Questions</h3>
                                {/* <div class="float-md-end"> */}
                                    <button class="btn btn-default btn-full" style={{marginTop:20,marginBottom:20}}>
                                        <img src={add} class="wave" alt="wave" /><span className="smallText">Add a question</span>
                                    </button>
                                {/* </div> */}
                                {/* </div> */}
                            </div>
                            <div class="row gy-4">
                                {Q.map((item)=><GeneralQCard Title={item.title} Date={item.date} Q={item.Q} Author={item.author}/>)}
                            </div>
                        </div>
                        <div class="col-lg-3">
                        <div class="widget rounded">
							<div class="widget-header text-center">
								<h3 class="widget-title">Following</h3>
								<img src={wave} class="wave" alt="wave" />
							</div>
							<div class="widget-content">
                                {items.map((item) => <ListFollowing Title={item.title} Date={item.date} />)}
							</div>		
						</div>
                        </div>
                    </div>
                </div>
            </section>
            <UFooter />
        </>
    );
}

export default UHomePage;
