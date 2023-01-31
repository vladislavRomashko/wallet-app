import React from 'react'
import PropTypes from 'prop-types'

const OperationButton = ({ onAction, name }) => {
    return (
        <button className={'btn btn-sm'} onClick={onAction}>
            {name}
        </button>
    )
}

OperationButton.propTypes = {
    onAction: PropTypes.func,
    name: PropTypes.string
}

export default OperationButton
