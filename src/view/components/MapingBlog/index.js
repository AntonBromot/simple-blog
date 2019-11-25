import React  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import ImageBlock from '../ImageBlock'

const ASSETS = {
    LANG: {
        linkText: "continue reading"
    },
    CHAR_LIMIT: 250
}

const MapingBlog = ({ data: { _id, title, body, created, image }, page  }) => {
    const bodyText = body.replace(/<[^>]+>/g, '').slice(0, ASSETS.CHAR_LIMIT),
          route = `${page}/blog/${_id}`

    return(
        <div key={ _id } className="contentWrapper">
            <div className="blogLeftColumn" >
                <ImageBlock { ...{ image, created, singleBlog: false } } />
            </div>
            <div className="blogRightColumn" >
                <h3>{ title }</h3>
                <p>{ bodyText }...</p>
                <Link to={ route } >{ ASSETS.LANG.linkText }</Link>
            </div>
        </div>
    )
}

MapingBlog.propTypes = {
    data: PropTypes.object,
    page: PropTypes.string
}


export default MapingBlog
