import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import { monthList } from "../../../../helpers"

const showLinksCallback = ({target: { id } }, setShowId) => {
    setShowId( currentId => id === currentId ? "" : id )
}

const renderArchive = ( data, page, showId, showLinks ) => {
    const months = monthList(data)

    let component = []
    for (let key in months) {
        if (!months[key].length) {
            component.push(
                <div key={key} className="monthItem">
                    <FontAwesome name="calendar" />
                    <span className="calendarName" >{key}</span>
                </div>
            )
        } else {
            let children = months[key].map((item, index) =>
                <li key={index} className="linkMonthItem">
                    <Link to={`/${page}/blog/${item._id}`} key={index}>
                        {item.title}
                    </Link>
                </li>
            )
            component.push(
                <ul key={key} className="monthItem" >
                    <FontAwesome name="calendar" />
                    <span className="calendarName">{key}</span>
                    <FontAwesome onClick={showLinks} id={key} name={showId === key ? 'angle-up' : 'angle-down'} className="arrow"/>
                    {showId === key && children}
                </ul>
            )
        }
    }

    return component
}

const Archive = ({ articles=[], page }) => {
    const [ showId, setShowId ] = useState(""),
          showLinks = useCallback( e => showLinksCallback( e, setShowId ), [] ),
          memoArchive = useMemo( () => renderArchive( articles, page, showId, showLinks ), [showId] )

    return <div className="popularLink">{ memoArchive }</div>
}

Archive.propTypes = {
    articles: PropTypes.array
}

export default Archive
