import React  from 'react';
import PropTypes from 'prop-types';
import RotetedDate from '../RotatedDate'
import ImageFooter from '../ImageFooter'
import IMAGES from "../../../resources/images";

const ImageBlock = ({ created, image, singleBlog, commentsCount }) => {
    const classNames = singleBlog ? 'dateWrapper' : 'dateWrapper single'
    return (
        <div className='imageWrapper'>
            <img src={ image || IMAGES.defaultImg }/>
            <RotetedDate date={created} classNames={classNames} />
            { singleBlog && <ImageFooter commentsCount={commentsCount} /> }
        </div>
    )
}

ImageBlock.propTypes = {
    created: PropTypes.string,
    image: PropTypes.string,
    singleBlog: PropTypes.bool,
    commentsCount: PropTypes.number
}

export default ImageBlock
