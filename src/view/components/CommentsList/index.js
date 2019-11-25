import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment'

import { dateParser, uniqueId } from "../../../helpers"
import SingleComment from '../SingleComment'

const renderCommentsTree = comments => {
    const allComments = comments.map( ({ replies = [], created, authorName: authName, author, text }, key ) => {
        const valideDate = dateParser(created),
              currentDate = Moment(valideDate).format('MMMM Do YYYY, h:mm '),
              authorName = authName || author;

        if ( !replies.length )  return <SingleComment { ...{ currentDate, text, key, authorName  } } />

        const repliesMap = renderCommentsTree(replies)
        return  [ <SingleComment { ...{ currentDate, text, key: uniqueId(), authorName  } } />,
                  <ul className="replies" key={key}>{ repliesMap }</ul> ]
    })

    return <ul>{ allComments }</ul>
}

const CommentsList = ({ comments = [] }) => {
    const memoCommentsTree = useMemo( () => renderCommentsTree(comments), [  comments.length ] )
    return <div className='commentsTreeWrapper'>{ memoCommentsTree }</div>
}

CommentsList.propTypes = {
    comments: PropTypes.array,
}

export default CommentsList
