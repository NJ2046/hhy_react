import React from 'react';
import PropTypes from 'prop-types';
import pic from '../images/posts/editor-sm-3.jpg'
import wave from '../images/wave.svg'

const AEO = (props) =>  {
    const {id,time,date,user,expert,duration,price,status,show}=props
    return (
        <tr>
        {id?<th scope="row">{id}</th>:null}
        <td>{time}</td>
        <td>{date}</td>
        <td>{user}</td>
        {show[4]?<td>{expert}</td>:null}
        {/* <td>{expert}</td> */}
        {show[5]?<td>{duration}</td>:null}
        {/* <td>{duration}</td> */}
        {show[6]?<td>{price}</td>:null}
        {/* <td>{price}</td> */}
        <td>{status}</td>
        </tr>
    )
}

AEO.propTypes = {
    id:PropTypes.number,
    time:PropTypes.string,
    date:PropTypes.string,
    user:PropTypes.string,
    expert:PropTypes.string,
    duration:PropTypes.string,
    price:PropTypes.string,
    status:PropTypes.string,
    show:PropTypes.array,
};

AEO.defaultProps = {
    id:PropTypes.number,
    time:PropTypes.string,
    date:PropTypes.string,
    user:PropTypes.string,
    expert:PropTypes.string,
    duration:PropTypes.string,
    price:PropTypes.string,
    status:PropTypes.string,
    show:PropTypes.array,
};

export default AEO;