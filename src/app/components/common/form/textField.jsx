import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TextField = ({ name, label, type, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState)
    }

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
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
                        value={value}
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
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TextField
