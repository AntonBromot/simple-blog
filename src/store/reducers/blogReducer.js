import { BLOG_FETCHING, GET_PAGE, GET_BLOG, UPDATE_BLOG_COMMENT, UPDATE_BLOG, CREATE_BLOG } from "../actions/blogActions"

const BlogsModel = {
    articles: [],
    fetched: false,
    page: null,
    pagesCount: null
}

export default function ( state=BlogsModel, { type, payload  }) {
    switch (type) {
        case GET_PAGE:
            return {  ...state, ...payload, fetched: true };
        case BLOG_FETCHING: {
            return { ...state, fetched: false }
        }
        case GET_BLOG: {
            const { _id } = payload,
                cloneState = { ...state },
                index = cloneState.articles.findIndex( item => item._id === _id );

            cloneState.articles.splice( index, 1, payload )
            return { ...cloneState, fetched: true }
        }
        case CREATE_BLOG: {
            const cloneState = { ...state }
            cloneState.articles.push({ ...payload, comments: [] })
            return { ...cloneState }
        }
        case UPDATE_BLOG: {
            const { _id } = payload,
                 cloneState = { ...state },
                 index = cloneState.articles.findIndex( item => item._id === _id );

            cloneState.articles.splice( index, 1, payload )
            return {...state}
        }
        case UPDATE_BLOG_COMMENT: {
            const  { articleId } = payload,
                cloneState = { ...state };

            cloneState.articles.find(item => item._id === articleId).comments.push(payload)
            return { ...cloneState }
        }
        default: return state;
    }
}
