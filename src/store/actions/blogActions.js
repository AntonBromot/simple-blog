import { GET, POST, PUT } from '../../constants'
import callApi from "../../services/api";

export const BLOG_FETCHING = "BLOG_FETCHING"
export const GET_PAGE = "GET_PAGE"
export const GET_BLOG = "GET_BLOG"
export const UPDATE_BLOG_COMMENT = "UPDATE_BLOG_COMMENT"
export const UPDATE_BLOG = "UPDATE_BLOG"
export const CREATE_BLOG = "CREATE_BLOG"

export const getPage = (page=1, callback=f=>f) => async dispatch => {
    dispatch({ type: BLOG_FETCHING })
    const apiParams = { query: "?page=", identificator: page, data: GET }

    let payload;
    try {
        payload = await callApi(apiParams)
        callback()
    } catch(err) {
        throw new Error(err)
    }

    dispatch({ type: GET_PAGE, payload })
}

export const getBlog = ( id, callback=f=>f ) => async dispatch => {
    dispatch({ type: BLOG_FETCHING })
    const apiParams = { identificator: id, data: GET }

    let payload;
    try {
        payload = await callApi( apiParams )
        callback()
    } catch(err) {
        throw new Error(err)
    }

    dispatch({ type: GET_BLOG, payload })
}


export const postComment = ( data, callback=f=>f ) => async dispatch => {
    const body = JSON.stringify(data),
          apiParams = { query: "comment/", data: { ...POST, body } }

    let payload
    try {
        payload = await callApi( apiParams )
        callback()
    } catch(err) {
        throw new Error(err)
    }

    dispatch({ type: UPDATE_BLOG_COMMENT, payload })
}

export const updateBlog = ({ _id, body, title }, callback=f=>f) => async dispatch => {
    const body = JSON.stringify(data),
        apiParams = { identificator: _id, data: { ...PUT, body } }

    let payload
    try {
        payload = await callApi( apiParams )
        callback( _id )
    } catch(err) {
        throw new Error(err)
    }

    dispatch({type: UPDATE_BLOG, payload })
}


export const createBlog = (data, callback=f=>f) => async dispatch => {
    const body = JSON.stringify(data),
          apiParams = { data: { ...POST, body } }

    let payload
    try {
        payload = await callApi( apiParams )
        callback( payload._id )
    } catch(err) {
        throw new Error(err)
    }

    dispatch({type: CREATE_BLOG, payload})
}



