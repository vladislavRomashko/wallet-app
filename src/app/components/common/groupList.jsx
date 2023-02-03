import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({
    items,
    onItemSelect,
    valueProperty,
    contentProperty,
    selectedItem,
    iconProperty
}) => {
    if (!Array.isArray(items)) {
        return (
            <ul className="list-group">
                {Object.keys(items).map((item) => (
                    <li
                        key={items[item][valueProperty]}
                        className={
                            'list-group-item' +
                            (selectedItem === items[item] ? ' active' : '')
                        }
                        role="button"
                        onClick={() => onItemSelect(items[item])}
                    >
                        <i className={items[item][iconProperty]}></i>{' '}
                        {items[item][contentProperty]}
                    </li>
                ))}
            </ul>
        )
    }
    return (
        <ul className="list-group">
            {items.map((item) => (
                <li
                    key={item[valueProperty]}
                    className={
                        'list-group-item' +
                        (selectedItem === item ? ' active' : '')
                    }
                    role="button"
                    onClick={() => onItemSelect(item)}
                >
                    <i className={item[iconProperty]}></i>{' '}
                    {item[contentProperty]}
                </li>
            ))}
        </ul>
    )
}

GroupList.defaultProps = {
    valueProperty: '_id',
    contentProperty: 'name',
    iconProperty: 'categoryIcon'
}

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    onItemSelect: PropTypes.func,
    valueProperty: PropTypes.string.isRequired,
    iconProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    selectedItem: PropTypes.object
}

export default GroupList
