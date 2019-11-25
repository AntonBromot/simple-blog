import React, { useState, useCallback } from 'react';
import {connect} from "react-redux";

import { EDITOR_INIT } from '../../../constants/index'
import { Editor } from '@tinymce/tinymce-react'
import { createBlog, updateBlog } from "../../../store/actions/blogActions";

const ASSETS = {
    LANG: {
        enterTitle: "Enter title:",
        enterNewTitle: "Enter new title:",
        enterBody: "Enter main content:",
        enterNewBody: "Enter new main content:",
        notValid: "All fields are required!",
        save: "Save"
    },
    metaData: {
        status: 'active',
        metaTitle: 'title',
        metaDescription: 'descsription',
        metaKeywords: 'keywords',
    }
}

const changeBodyCallback = ({ target }, setBody ) => setBody( target.getContent() )

const changeTitleCallback = ({ target: { value} }, setTitle) => setTitle(value)

const saveChangesCallback = ({ title, body, setValidation, createBlog, updateBlog, callback, _id }) => {
    if ( !(title && body) ) return setValidation( validation => !validation )

    if ( _id ) updateBlog({ _id, title, body }, callback )
    else createBlog({ ...ASSETS.metaData, title, body }, callback )
}

const FieldForCreate = ({ callback, createBlog, updateBlog, title: propTitle="", body: propBody="", _id }) => {
    const [ title, setTitle ] = useState( propTitle ),
          [ body, setBody ] = useState( propBody ),
          [ validation, setValidation ] = useState( null),
          changeBody = useCallback( e => changeBodyCallback( e, setBody ), [] ),
          changeTitle = useCallback( e => changeTitleCallback( e, setTitle ), [] ),
          saveChanges = useCallback( () => saveChangesCallback({ title, body, setValidation, callback, createBlog, updateBlog, _id }), [ title, body ] ),
          isEdit = Boolean( propTitle )

    return (
        <div className="fieldForCreate">
            <h2 >{ isEdit ? ASSETS.LANG.enterNewTitle : ASSETS.LANG.enterTitle }</h2>
            <input { ...{ onChange: changeTitle, value: title } }/>
            <h2>{ isEdit ? ASSETS.LANG.enterNewBody : ASSETS.LANG.enterBody }</h2>
            <Editor { ...{ onChange: changeBody, value: body, init: EDITOR_INIT } } />
            <button className="simpleButton" onClick={ saveChanges }>{ ASSETS.LANG.save }</button>
            { validation && <p className="notValid">{ASSETS.LANG.notValid}</p> }
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    createBlog: ( data, callback ) => dispatch( createBlog(data, callback) ),
    updateBlog: ( data, callback ) => dispatch( updateBlog(data, callback) )
})

export default connect(null, mapDispatchToProps)(FieldForCreate)
