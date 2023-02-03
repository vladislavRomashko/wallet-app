import React, { useState, useEffect } from 'react'
import TextField from '../common/form/textField'
import { validator } from '../../utils/validator'
import CheckBoxField from '../common/form/checkBoxField'

const RegisterForm = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        licence: false
    })
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
        },
        licence: {
            isRequired: {
                message:
                    'Вы не можете использовать наш сервис без лицензионного соглашения'
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

    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name="name"
                label="Введите ваше имя"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
            />
            <TextField
                name="email"
                label="Введите ваш Email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                name="password"
                type="password"
                label="Введите ваш пароль"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <CheckBoxField
                name="licence"
                value={data.licence}
                onChange={handleChange}
                error={errors.licence}
            >
                Подтвердить{' '}
                <a
                    href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5_%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5"
                    target="_blank"
                    rel="noreferrer"
                >
                    лицензионное соглашение
                </a>
            </CheckBoxField>
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

export default RegisterForm
