import React, { useEffect, useMemo } from "react"
import { connect } from 'react-redux'
import { getPage } from '../../../store/actions/blogActions'
import MapingBlog from '../../components/MapingBlog'
import Paginator from '../../components/Paginator'
import PropTypes from 'prop-types';
import SideContainer from "../../components/SideContainer/index"
import Header from '../../components/Header'
import Spinner from "../../components/Spinner"


const ASSETS = {
    LANG: { createNew: "Create New" },
    SPINNER_COLOR: "#36D7B7"
}

const renderAllBlogs = ({ articles = [], page }) => articles.map((item, key) => <MapingBlog { ...{ page, key, data: item } } />)

const Blogs = ({ match: { params: { page } }, getPage, articles = [], pagesCount, fetched }) => {
    const allBlogs = useMemo( () => renderAllBlogs({ articles, page }), [ articles, page ] );

    useEffect( () => { getPage( page ) }, [ page ] )

    if (!fetched) return <Spinner />

    return (
        <div>
            <Header section='blog' link="/create" linkName={ASSETS.LANG.createNew} />
            <div className="blogsWrapper">
                <div className="blogsContent" >
                    { allBlogs }
                </div>
                <SideContainer { ...{ page } } />
            </div>
            <Paginator { ...{ key: "paginator", getPage, pagesCount, currentPage: Number(page) } } />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getPage: page => dispatch( getPage( page ) )
})

const mapStateToProps = ({ blog: { articles, pagesCount, fetched } }) => ({ articles, pagesCount, fetched })

Blogs.propTypes = {
    getPage: PropTypes.func,
    articles: PropTypes.array,
    pagesCount: PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs)

