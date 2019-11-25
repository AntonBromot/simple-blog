import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Popular from "./sideComponents/Popular"
import Archive from "./sideComponents/Archive"
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'

const ASSETS = {
    ARTICLES_COUNT_TO_SHOW: 2,
    LANG: { contact: "Contact us today for more information." }
}

const renderPopular = ( data, page ) => {
    const popularArticles = data.sort((a, b)=> a.comments.length < b.comments.length ).slice(0, ASSETS.ARTICLES_COUNT_TO_SHOW)
    return popularArticles.map( ( { title, label: text, _id }, key ) => <Popular { ...{ key, page, title, _id, text } } /> )
}

const SideContainer = ({ articles=[], page=1 }) => {
    const memoPopulars = useMemo( () => renderPopular( articles, page ), [ articles, page ])

    return (
        <div className="sideContainer">
            <h1><Link to="/contact"> {ASSETS.LANG.contact}<FontAwesome name="play" /></Link></h1>
            <div className="sideSupContainers">
                <div className="popularHead"> <FontAwesome name="star" /> Popular</div>
                { memoPopulars }
            </div>
            <div className="sideSupContainers">
                <div className="popularHead"> <FontAwesome name="archive" /> Archive</div>
                <Archive { ...{ articles, page } } />
            </div>
        </div>
    )
}

const mapStateToProps = ({ blog: { articles } }) => ({ articles })

SideContainer.propTypes = {
    articles: PropTypes.array,
    page: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
}

export default connect(mapStateToProps, null)(SideContainer)

