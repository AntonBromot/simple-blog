import React from 'react';
import PropTypes from 'prop-types';

const SingleComment = ({ authorName, currentDate, text }) => (
    <li className="commentItem">
        <div className="aboutUser">
            <span className="authorName">{authorName}</span>
            <span className="createDate">{currentDate}</span>
        </div>
        <p className="commentText">{text}</p>
    </li>
)

SingleComment.propTypes = {
    currentDate: PropTypes.string,
    authorName: PropTypes.string,
    text: PropTypes.string,
}

export default SingleComment

