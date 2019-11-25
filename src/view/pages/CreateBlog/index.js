import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import FieldForCreate from '../../components/FieldsForCreate'
import SideContainer from "../../components/SideContainer/index"
import Header from '../../components/Header'
import SuccessBlock from "../../components/SuccessBlock"

const ASSETS = {
    INDEX_PAGE: 1,
}

const CreateEditBlog = ({ match: { params: { page, _id } }, articles=[] }) => {
    const [ createdId, setCreatedId ] = useState(null),
          callback = useCallback( ( _id ) => setCreatedId(_id), [] ),
          editing = Boolean( _id ),
          { body, title } = articles.find( item => item._id === _id ) || {};

    return [
        <Header key="header" section='blog' />,
        <div key="blogsContent" className="blogsWrapper">
            <div className="blogsContent" >
                { createdId ? <SuccessBlock { ...{ page, editing, _id: createdId } } /> : <FieldForCreate { ...{ body, title, callback, _id } } /> }
            </div>
            <SideContainer page={ASSETS.INDEX_PAGE}/>
        </div>
    ]
}

CreateEditBlog.propTypes = {
    _id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    createBlog: PropTypes.func
}

const mapStateToProps = ({ blog: { articles } }) => ({ articles })

export default connect(mapStateToProps, null)(CreateEditBlog)

