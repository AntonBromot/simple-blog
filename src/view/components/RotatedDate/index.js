import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment'
import { dateParser } from '../../../helpers'

const RotetedDate = ({ date, classNames }) => {
    const valideDate = dateParser(date),
        currentDate = Moment(valideDate).format('DD'),
        monthYearDate = Moment(valideDate).format('MMMM YYYY'),
        dayWeek = Moment(valideDate).format('dddd')

    return (
        <div className={classNames}>
            <div className='currentDate'> { currentDate } </div>
            <div className='rotate' >
                <div className='dayWeek'> { dayWeek } </div>
                <div className='otherDate'> { monthYearDate } </div>
            </div>
        </div>
    )
}

RotetedDate.propTypes = {
    date: PropTypes.string,
    classNames: PropTypes.string
}

export default RotetedDate
