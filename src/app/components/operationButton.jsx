import React from 'react'
import PropTypes from 'prop-types'

const OperationButton = ({ styleBtn, onAction, name }) => {
    return (
        <button className={'btn btn-' + styleBtn} onClick={onAction}>
            {name}
        </button>
    )
}

OperationButton.propTypes = {
    styleBtn: PropTypes.string,
    onAction: PropTypes.func,
    name: PropTypes.string
}

export default OperationButton
