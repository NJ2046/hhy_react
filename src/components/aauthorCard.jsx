import React from 'react';
import PropTypes from 'prop-types';
import pic from '../images/posts/editor-sm-3.jpg'
import wave from '../images/wave.svg'

const AAuthorCard = (props) =>  {
    const {Author,img,id}=props
    return (
        <div class="col-sm-4">
        <div class="post post-grid rounded bordered text-center">
            <img src={pic} className="text-center mt-4"></img>
            <div><img src={wave} class="wave" alt="wave" /></div>
                <ul class="meta list-inline mb-0">
                    <h5 class="post-title mb-0 mt-2">{Author}</h5>
                    <li class="list-inline-item mb-4">{id}</li>
                </ul>
        </div>
    </div>
    )
}

AAuthorCard.propTypes = {
    img:PropTypes.string,
    Author:PropTypes.string,
    id:PropTypes.string,
};

AAuthorCard.defaultProps = {
    img:PropTypes.string,
    Author:PropTypes.string,
    id:PropTypes.string,
};

export default AAuthorCard;