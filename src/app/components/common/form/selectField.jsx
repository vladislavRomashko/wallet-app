import React from 'react'
import PropTypes from 'prop-types'

const SelectField = ({
    options,
    name,
    label,
    value,
    onChange,
    error,
    defaultOption
}) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }

    const getInputClasses = () => {
        return 'form-select ' + (error ? 'is-invalid' : '')
    }
    const optionsArray =
        !Array.isArray(options) && typeof options === 'object'
            ? Object.values(options)
            : options
    return (
        <div className=" mb-3">
            <label className="form-label" htmlFor={name}>
                {label}
            </label>
            <select
                className={getInputClasses()}
                onChange={handleChange}
                value={value}
                name={name}
                id={name}
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {optionsArray.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    )
}

SelectField.propTypes = {
    options: PropTypes.array,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    defaultOption: PropTypes.string,
    onChange: PropTypes.func
}

export default SelectField
