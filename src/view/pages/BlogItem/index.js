import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getBlog } from '../../../store/actions/blogActions'
import { connect } from 'react-redux'

import ImageBlock from '../../components/ImageBlock'
import BlogDescription from '../../components/BlogDescription'
import Share from '../../components/Share'
import CommentsForm from '../../components/CommentsForm'
import CommentsList from '../../components/CommentsList'
import SideContainer from "../../components/SideContainer/index"
import Header from '../../components/Header'
import Spinner from "../../components/Spinner"

const ASSETS = {
    LANG: {
        edit: "Edit blog"
    },
    SPINNER_COLOR: "#36D7B7"
}

const BlogItem = ({ match: { params: { page, _id: matchId } }, getBlog, articles=[], fetched }) => {
    const blogItem = articles.find( item => matchId === item._id ) || [],
          { _id, title, body,  created, image, comments } = blogItem,
          commentsCount = comments && comments.length || 0,
          headerProps = { key: "header", section: 'blog', link: `/${page}/edit/${_id}`, linkName: ASSETS.LANG.edit }

    useEffect( () => { getBlog( matchId ) }, [] )

    if ( !fetched ) return <Spinner />

    return [
        <Header { ...headerProps } />,
        <div key="blogsContent" className="blogsWrapper">
            <div className="blogsContent" >
                <ImageBlock singleBlog { ...{ image, created, commentsCount } }/>
                <BlogDescription { ...{ title, body } } />
                <Share />
                <CommentsList { ...{ comments } } />
                <CommentsForm { ...{ articleId: _id } } />
            </div>
            <SideContainer { ...{ page } } />
        </div>
    ]
}

const mapDispatchToProps = dispatch => ({
    getBlog: id => dispatch( getBlog( id ) ),
})

const mapStateToProps = ({ blog: { articles, fetched } } ) => ({ articles, fetched })

BlogItem.propTypes = {
    articles: PropTypes.array,
    getBlog: PropTypes.func,
    postComment: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogItem)
