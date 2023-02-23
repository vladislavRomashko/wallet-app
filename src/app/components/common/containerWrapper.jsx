import React from 'react'
import PropTypes from 'prop-types'

const ContainerWrapper = ({ children }) => {
    return <div className="container">{children}</div>
}

ContainerWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
export default ContainerWrapper
