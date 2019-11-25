import React from "react"
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const ASSETS = {
    FIRST_PAGE: 1,
    SPAN_TAG_NAME: 'SPAN',
    PAGINATOR_OFFSET: 3,
    PAGINATOR_LAST_PAGE_NEIGHBORG: 2,
    SELECTED_ITEM_CLASS: 'paginatorItemSelected',
    ITEM_CLASS: 'paginatorItem'

}

const paginator = ( pagesCount, currentPage ) => {
    let pages = [];
    if (pagesCount <= ASSETS.PAGINATOR_OFFSET) {
        for (let i = ASSETS.FIRST_PAGE; i <= pagesCount; i++) {
            const className = currentPage === i ? ASSETS.SELECTED_ITEM_CLASS : ASSETS.ITEM_CLASS
            pages.push( <Link { ...{ to: `/${i}`, className, key: i } }>{ i }</Link>)
        }
    } else if (currentPage === pagesCount) {
        const currentPageWithNeighbors = currentPage - ASSETS.PAGINATOR_LAST_PAGE_NEIGHBORG,
              classNameOut = currentPage === pagesCount ? ASSETS.SELECTED_ITEM_CLASS : ASSETS.ITEM_CLASS
        for (let i = currentPageWithNeighbors; i < pagesCount; i++) {
            const className = currentPage === i ? ASSETS.SELECTED_ITEM_CLASS : ASSETS.ITEM_CLASS
            pages.push( <Link { ...{ to: `/${i}`, className, key: i } }>{ i }</Link>)

            if (pages.length === ASSETS.PAGINATOR_OFFSET) break
        }
        pages.push(<Link { ...{ to: `/${pagesCount}`, key: pagesCount, className: classNameOut } }>{ pagesCount }</Link>)
    } else {
        const currentPageWithNeighbors = currentPage - 1 === 0 ? currentPage : currentPage - 1,
             classNameOut = currentPage === pagesCount ? ASSETS.SELECTED_ITEM_CLASS : ASSETS.ITEM_CLASS
        for (let i = currentPageWithNeighbors; i < pagesCount; i++) {
            const className = currentPage === i ? ASSETS.SELECTED_ITEM_CLASS : ASSETS.ITEM_CLASS
            pages.push(<Link { ...{ to: `/${i}`, className, key: i } }>{ i }</Link>)

            if (pages.length === ASSETS.PAGINATOR_OFFSET) break
        }
        pages.push(" ... ")
        pages.push(<Link { ...{ to: `/${pagesCount}`, key: pagesCount, className: classNameOut } } >{ pagesCount }</Link>)
    }

    return <div className="paginatorWrapper" key="paginatorWrapper">{ pages }</div>
}

const Paginator = ({ pagesCount, currentPage }) => paginator( pagesCount, currentPage )

Paginator.propTypes = {
    pagesCount: PropTypes.number,
    currentPage: PropTypes.number
}

export default Paginator
