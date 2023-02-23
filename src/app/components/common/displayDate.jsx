import React from 'react'
import { displayDate } from '../../utils/displayDate'
import PropTypes from 'prop-types'

const DisplayDate = ({ data }) => {
    return <span>{displayDate(data)}</span>
}
DisplayDate.propTypes = {
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default DisplayDate
