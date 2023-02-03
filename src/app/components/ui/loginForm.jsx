import React, { useState, useEffect } from 'react'
import TextField from '../common/form/textField'
import { validator } from '../../utils/validator'

const LoginForm = () => {
    const [data, setData] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        validate()
    }, [data])

    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Электронная почта обязательна для заполнения'
            },
            isEmail: {
                message: 'Email введен некорректно'
            }
        },
        password: {
            isRequired: {
                message: 'Пароль обязателен для заполнения'
            },
            isCapitalSymbol: {
                message: 'Пароль должен содержать хотя бы одну заглавную букву'
            },
            isContainDigit: {
                message: 'Пароль должен содержать хотя бы одно число'
            },
            min: {
                message: 'Пароль должен состоять минимум из 8 символов',
                value: 8
            }
        }
    }

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        console.log(data)
    }

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name="email"
                label="Email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                name="password"
                type="password"
                label="Password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <button
                type="submit"
                className="btn btn-primary mx-auto w-100"
                disabled={!isValid}
            >
                Отправить
            </button>
        </form>
    )
}

export default LoginForm
