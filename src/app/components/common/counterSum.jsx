import React from 'react'
import PropTypes from 'prop-types'

const CounterSum = ({ sum, type, name }) => {
    const getSpanClasses = () => {
        if (type === 'minus') {
            return 'text-danger'
        } else if (type === 'plus') {
            return 'text-success'
        }
    }

    return (
        <div
            style={{ width: '107px' }}
            className={
                ' p-3 bg-body-tertiary rounded-pill border p-2 border-opacity-50 border-3 border-' +
                (type === 'minus' ? 'danger' : 'success')
            }
        >
            <div>{name}</div>
            <div className={getSpanClasses()}>{sum}</div>
        </div>
    )
}

CounterSum.propTypes = {
    sum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.string,
    name: PropTypes.string
}

export default CounterSum
