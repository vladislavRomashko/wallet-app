import React from 'react'
import PropTypes from 'prop-types'

const SelectField = ({ options, name, label, value, onChange }) => {
    const handleSubmit = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className="input-group mb-3">
            <label className="input-group-text" htmlFor={name}>
                {label}
            </label>
            <select
                className="form-select"
                onChange={handleSubmit}
                name={name}
                id={name}
            >
                {options.map((option) => (
                    <option
                        key={option._id}
                        defaultValue={value === option.value}
                        value={option.value}
                    >
                        {option.value}
                    </option>
                ))}
            </select>
        </div>
    )
}

SelectField.propTypes = {
    options: PropTypes.array,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default SelectField
