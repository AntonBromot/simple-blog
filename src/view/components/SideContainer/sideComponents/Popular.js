import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Popular = ({ text, _id, title, page }) => {
    const sliceText = text.slice(0, 15)

    return (
        <div key={_id} className="popularLink">
            <Link to={`/${page}/blog/${_id}`}>{title}</Link>
            <p>{sliceText}</p>
        </div>
    )
}

Popular.propTypes = {
    _id: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
}

export default Popular
