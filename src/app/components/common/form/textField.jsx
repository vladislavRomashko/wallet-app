import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { displayDate } from '../../../utils/displayDate'

const TextField = ({ name, label, type, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false)

    const transformValue = (data) => {
        return displayDate(data)
    }
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState)
    }

    const handleChange = ({ target }) => {
        if (type === 'date') {
            console.log(target.valueAsNumber)
            onChange({ name: target.name, value: target.valueAsNumber })
        } else {
            onChange({ name: target.name, value: target.value })
        }
    }

    const getInputClasses = () => {
        return 'form-control' + (error ? ' is-invalid' : '')
    }
    return (
        <>
            <div className="mb-4">
                <label htmlFor={name}>{label}</label>

                <div className="input-group has-validation">
                    <input
                        className={getInputClasses()}
                        id={name}
                        name={name}
                        value={type === 'date' ? transformValue(value) : value}
                        onChange={handleChange}
                        type={showPassword ? 'text' : type}
                    />
                    {type === 'password' && (
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={toggleShowPassword}
                        >
                            <i
                                className={
                                    'bi bi-eye' + (showPassword ? '-slash' : '')
                                }
                            ></i>
                        </button>
                    )}
                    {error && <div className="invalid-feedback">{error}</div>}
                </div>
            </div>
        </>
    )
}

TextField.defaultProps = {
    type: 'text'
}

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    error: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired
}

export default TextField
