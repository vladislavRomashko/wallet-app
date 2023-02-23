import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const SelectIconField = ({ options, name, label, value, onChange }) => {
    const handleChange = ({ value }) => {
        onChange({ name, value })
    }
    const currentOption = options.findIndex((option) => option.value === value)

    return (
        <div className="mb-3 ">
            <label className="form-label" htmlFor={name}>
                {label}
            </label>

            <Select
                name={name}
                defaultValue={options[currentOption] || 'Choose icon'}
                options={options}
                onChange={handleChange}
                getOptionLabel={(e) => (
                    <i style={{ fontSize: '25px' }} className={e.value}></i>
                )}
            />
        </div>
    )
}

SelectIconField.propTypes = {
    options: PropTypes.array,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default SelectIconField
