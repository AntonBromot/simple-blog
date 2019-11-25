import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome'

const ASSETS = {
    TAGS: ['post', 'get', 'front', 'tegs', 'text', 'picture', 'some' ]
}

const renderTags = tags => tags.map(item=><span key={item}> {item} </span>)

const ImageFooter = ({ tags = ASSETS.TAGS, commentsCount }) => {
    const tegsMemo = useMemo(() => renderTags(tags), [])

    return (
        <div className='imageFooter'>
            <div><FontAwesome name='tags' /> { tegsMemo } </div>
            <div className="comment-eye">
                <FontAwesome name='comment' /> ({commentsCount})
                <FontAwesome name='eye' /> ({421})
            </div>
        </div>
    )
}

ImageFooter.propTypes = {
    created: PropTypes.string,
    image: PropTypes.string,
    tags: PropTypes.array,
    commentsCount: PropTypes.number
}

export default ImageFooter
