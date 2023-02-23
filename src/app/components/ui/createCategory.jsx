import React, { useEffect, useState } from 'react'
import SelectIconField from '../common/form/selectIconField'
import TextField from '../common/form/textField'
import api from '../../api'
import BackButton from '../common/backButton'
import { validator } from '../../utils/validator'
import Loader from '../common/loader'
import { useHistory } from 'react-router-dom'

const CreateCategory = () => {
    const [icons, setIcons] = useState([])
    const [data, setData] = useState({ name: '', categoryIcon: '' })
    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const history = useHistory()

    const validatorConfig = {
        name: {
            isRequired: {
                message: 'Поле обязательно для заполнения'
            }
        }
    }
    useEffect(() => {
        validate()
    }, [data])

    useEffect(() => {
        setIsLoading(true)
        api.icons.fetchAll().then((data) => {
            setIcons(data)
            setIsLoading(false)
        })
    }, [])

    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }))
    }

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return

        console.log('send', data)
        api.categories.add(data).then((data) => console.log(data))
        history.goBack()
    }

    const isValid = Object.keys(errors).length === 0

    return (
        <div className="container mt-5">
            <BackButton />
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4 ">
                    <h3>Добавление новой категории</h3>
                    {!isLoading && icons.length > 0 ? (
                        <form
                            onSubmit={handleSubmit}
                            className="position-relative"
                        >
                            <SelectIconField
                                name="categoryIcon"
                                options={icons}
                                label="Выберите иконку"
                                value={data.categoryIcon}
                                onChange={handleChange}
                            />

                            <TextField
                                name="name"
                                value={data.name}
                                label="Имя"
                                onChange={handleChange}
                                error={errors.name}
                            />

                            <button
                                className="btn btn-primary mx-auto w-100"
                                type="submit"
                                disabled={!isValid}
                            >
                                Создать
                            </button>
                        </form>
                    ) : (
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <Loader />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CreateCategory
