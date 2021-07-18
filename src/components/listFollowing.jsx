import React from 'react';
import PropTypes from 'prop-types';

const ListFollowing = (props) =>  {
    const {Title,Date}=props
    return (
        <div class="post post-list-sm circle">
            <h6 class="post-title my-0"><a href="blog-single.html">{Title}</a></h6>
            <ul class="meta list-inline mt-1 mb-0">
                <li class="list-inline-item">{Date}</li>
            </ul>
        </div>
    )
}

ListFollowing.propTypes = {
    Title:PropTypes.string,
    Date:PropTypes.string,
};

ListFollowing.defaultProps = {
    Title:PropTypes.string,
    Date:PropTypes.string,
};

export default ListFollowing;