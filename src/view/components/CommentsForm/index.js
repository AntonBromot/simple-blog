import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { postComment } from "../../../store/actions/blogActions";
import { connect } from 'react-redux'

const ASSETS = {
    LANG: {
        name: "Name",
        email: "e-mail",
        notValid: "All fields are required!",
        submitComment: "Submit Comment"
    }
}

const initState = {
    authorName: '',
    author: '',
    text:'',
    validation: null
}

const submitForm = ({ fieldsState: { authorName, author, text }, setFieldsState, postComment, articleId }) => {
    postComment( { articleId, text, author, authorName })
    setFieldsState( initState )
}

const changeTextFieldCallback = ({ target: { value, name } }, setFieldsState ) => {
    setFieldsState( currState =>  ({ ...currState, [name]: value, validation:true }) )
}

const checkValidateCallback = ({ fieldsState, fieldsState: { authorName, author, text }, setFieldsState, postComment, articleId }) => {
    if ( authorName && author && text) submitForm({ fieldsState, setFieldsState, postComment, articleId })
    else setFieldsState( currState => ({ ...currState, validation: false }) )
}

const CommentForm = ({ postComment, articleId }) => {
    const [ fieldsState, setFieldsState ] = useState( initState ),
          checkValidate = useCallback( () => checkValidateCallback({ fieldsState, setFieldsState, postComment, articleId }), [ fieldsState ] ),
          changeTextField = useCallback( e => changeTextFieldCallback( e, setFieldsState ), [] );

    const { validation, authorName, author, text } = fieldsState,
          showValidationError = validation !== null && !validation,
          nameInputProps = { name: "authorName", placeholder: ASSETS.LANG.name, onChange: changeTextField, value: authorName },
          emailInputProps = { name: "author", placeholder: ASSETS.LANG.email, onChange: changeTextField, value: author },
          areaInputProps = { name: "text",  onChange: changeTextField, value: text }

    return (
        <div className="commentFormWrapper" >
            <div className="groupInput">
                <input className="name-input" { ...nameInputProps } />
                <input className="email-input" { ...emailInputProps } />
            </div>
            <textarea className="text-area" { ...areaInputProps } />
            <button onClick={ checkValidate } >{ ASSETS.LANG.submitComment }</button>
            { showValidationError && <p className="notValid">{ASSETS.LANG.notValid}</p> }
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    postComment: ( data, callback ) => dispatch( postComment( data, callback ) ),
})

CommentForm.propTypes = {
    postComment: PropTypes.func,
    articleId: PropTypes.string
}

export default connect(null, mapDispatchToProps)(CommentForm)
