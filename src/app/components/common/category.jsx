import React from 'react'
import PropTypes from 'prop-types'

const Category = ({ name, categoryIcon }) => {
    return (
        <div style={{ fontSize: '18px' }}>
            <i
                className={categoryIcon}
                style={{ fontSize: '20px', marginRight: '10px' }}
            ></i>
            <span>{name}</span>
        </div>
    )
}

Category.propTypes = {
    name: PropTypes.string,
    categoryIcon: PropTypes.string
}

export default Category
