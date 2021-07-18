import React from 'react';
import { useHistory } from 'react-router-dom';
import AHeader from '../../components/aHeader';
import ANav from '../../components/aNav';
import UFooter from '../../components/uFooter';
import wave from '../../images/wave.svg';
import add from '../../images/add.svg'
import ListFollowing from '../../components/listFollowing';
import GeneralQCard from '../../components/generalQCard';

const AData =()=> {
    return (
        <>
            <AHeader />
            <ANav show={[0,0,1]}/>
            <div class="container">
                <div class="row mt-4">
                    <div class="col-md-4 col-sm-12 col-xs-12 text-center">
                        <div class="d-block text-logo">Today</div>
                    </div>
                    <table class="table mt-4">
                        <thead>
                            <tr>
                            <th scope="col">New Users</th>
                            <th scope="col">New Posts</th>
                            <th scope="col">Income</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">4</th>
                                <td>5</td>
                                <td>$120</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="col-md-4 col-sm-12 col-xs-12 text-center mt-4">
                        <div class="d-block text-logo">Total</div>
                        <div class="d-block text-logo mt-4">Several graphs: 1.Growing users  2.Growing experts   3.users/expert  4.Income    5.like/dislike  6.post</div>
                    </div>
                </div>
            </div>
            <UFooter />
        </>
    );
}

export default AData;
