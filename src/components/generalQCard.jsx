import React from 'react';
import PropTypes from 'prop-types';

const GeneralQCard = (props) =>  {
    const {Author,Q,Title,Date}=props
    return (
        <div class="col-sm-6">
        <div class="post post-grid rounded bordered">
            <div class="details">
                <ul class="meta list-inline mb-0">
                    <li class="list-inline-item">{Author}</li>
                    <li class="list-inline-item">{Date}</li>
                </ul>
                    {Title[0]=='I'?<button class="btn btn-default float-sm-end"><div class="smallText">Delete</div></button>
                    :null}
                <h5 class="post-title mb-3 mt-3">{Title}</h5>
                <p class="excerpt mb-0">{Q}</p>
            </div>
            <div class="post-bottom clearfix d-flex align-items-center"></div>
        </div>
    </div>
    )
}

GeneralQCard.propTypes = {
    Q:PropTypes.string,
    Author:PropTypes.string,
    Title:PropTypes.string,
    Date:PropTypes.string,
};

GeneralQCard.defaultProps = {
    Q:PropTypes.string,
    Author:PropTypes.string,
    Title:PropTypes.string,
    Date:PropTypes.string,
};

export default GeneralQCard;