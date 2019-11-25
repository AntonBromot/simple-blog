import {Link} from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

const ASSETS = {
    LANG: {
        linkToBlock: "View changes",
        linkToCreatedBlock: "View created blog",
        alreadySubmit: "Blog successfully saved!",
    }
}

const SuccessBlock = ({ page=1, _id, editing = false }) => {
    const link = `/${ page }/blog/${_id}`

    return (
        <div className="blogsContent fieldForCreate">
            <div className="alreadySubmit">
                <h1 >{ ASSETS.LANG.alreadySubmit }</h1>
                <Link to={ link }>
                    { editing ? ASSETS.LANG.linkToBlock : ASSETS.LANG.linkToCreatedBlock }
                </Link>
            </div>
        </div>
    )
}

SuccessBlock.propTypes = {
    _id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    page: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    editing: PropTypes.bool
}

export default SuccessBlock
