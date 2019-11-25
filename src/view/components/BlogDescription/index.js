import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';

const BlogDescription = ({ body, title }) => (
    <div className='descriptionWrapper'>
        <h1>{title}</h1>
        <div>{ renderHTML(body) }</div>
    </div>
)

BlogDescription.propTypes = {
    body: PropTypes.string,
    title: PropTypes.string
}

export default BlogDescription
