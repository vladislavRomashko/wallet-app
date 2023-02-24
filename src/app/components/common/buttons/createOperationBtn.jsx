import React from 'react'
import PropTypes from 'prop-types'

const CreateButton = ({ title }) => {
    return (
        <button className="btn btn-sm btn-primary m-1">
            {title} <i className="bi bi-patch-plus"></i>
        </button>
    )
}

CreateButton.propTypes = {
    title: PropTypes.string
    // children: PropTypes.oneOfType([
    //     PropTypes.arrayOf(PropTypes.node),
    //     PropTypes.node
    // ])
}

export default CreateButton
