import React, { useState, useEffect } from 'react'
import api from '../../../api'
import Loader from '../../common/loader'
import TextField from '../../common/form/textField'
import { useHistory } from 'react-router-dom'
import SelectField from '../../common/form/selectField'
import BackButton from '../../common/backButton'
import { validator } from '../../../utils/validator'

const CreateOperation = () => {
    const [data, setData] = useState({
        anpointment: '',
        card: '',
        category: '',
        sum: '',
        comment: '',
        created_at: Date.now()
    })
    const [isLoading, setIsLoading] = useState(false)
    const [categories, setCategories] = useState([])
    const [anpointment, setAnpointment] = useState([])
    const [cards, setCards] = useState([])
    const [errors, setErrors] = useState({})

    const history = useHistory()

    const validatorConfig = {
        anpointment: {
            isRequired: {
                message: 'Поле обязательно для заполнения'
            }
        },
        card: {
            isRequired: {
                message: 'Поле обязательно для заполнения'
            }
        },
        category: {
            isRequired: {
                message: 'Поле обязательно для заполнения'
            }
        },

        sum: {
            isRequired: {
                message: 'Поле обязательно для заполнения'
            }
        },
        comment: {
            isRequired: {
                message: 'Поле обязательно для заполнения'
            }
        }
    }
    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    useEffect(() => {
        setIsLoading(true)
        api.categories.fetchAll().then((data) => {
            const categoriesList = Object.keys(data).map((categoryName) => ({
                label: data[categoryName].name,
                value: data[categoryName]._id,
                icon: data[categoryName].categoryIcon
            }))
            setCategories(categoriesList)
        })
        api.cards.fetchAll().then((data) => {
            const cardsList = Object.keys(data).map((cardName) => ({
                label: data[cardName].name,
                value: data[cardName]._id
            }))
            setCards(cardsList)
        })
        api.anpointments.fetchAll().then((data) => {
            const anpointmentsList = Object.keys(data).map((anpName) => ({
                label: data[anpName].name,
                value: data[anpName]._id
            }))
            setAnpointment(anpointmentsList)
        })
    }, [])

    useEffect(() => {
        setIsLoading(false)
    }, [categories && anpointment && cards])

    const getAnpointmentById = (id) => {
        for (const anpoint of anpointment) {
            if (anpoint.value === id) {
                return {
                    _id: anpoint.value,
                    name: anpoint.label
                }
            }
        }
    }

    const getCardById = (id) => {
        for (const card of cards) {
            if (card.value === id) {
                return {
                    _id: card.value,
                    name: card.label
                }
            }
        }
    }

    const getCategoryById = (id) => {
        for (const category of categories) {
            if (category.value === id) {
                return {
                    _id: category.value,
                    name: category.label,
                    categoryIcon: category.icon
                }
            }
        }
    }

    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        const { anpointment, card, category, sum } = data

        console.log('send', data)

        api.operations
            .add({
                ...data,
                anpointment: getAnpointmentById(anpointment),
                card: getCardById(card),
                category: getCategoryById(category),
                sum: Number(sum)
            })
            .then((data) => console.log(data))
        history.replace('/operations')
    }

    return (
        <div className="container mt-5">
            <BackButton />
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4 ">
                    <h3>Добавление новой операции</h3>
                    {!isLoading && Object.keys(categories).length > 0 ? (
                        <form
                            onSubmit={handleSubmit}
                            className="position-relative"
                        >
                            <SelectField
                                options={anpointment}
                                name="anpointment"
                                value={data.anpointment}
                                label="Статья расходов"
                                defaultOption="Выберите статью "
                                onChange={handleChange}
                                error={errors.anpointment}
                            />
                            <SelectField
                                options={categories}
                                name="category"
                                value={data.category}
                                defaultOption="Выберите категорию"
                                label="Категория"
                                onChange={handleChange}
                                error={errors.category}
                            />
                            <SelectField
                                options={cards}
                                name="card"
                                value={data.card}
                                defaultOption="Выберите карту"
                                label="Карта"
                                onChange={handleChange}
                                error={errors.card}
                            />
                            <TextField
                                name="sum"
                                value={data.sum}
                                label="Сумма"
                                onChange={handleChange}
                                error={errors.sum}
                            />
                            <TextField
                                name="comment"
                                value={data.comment}
                                label="Комментарий"
                                onChange={handleChange}
                                error={errors.comment}
                            />
                            <TextField
                                name="created_at"
                                value={data.created_at}
                                label="Дата"
                                onChange={handleChange}
                                type="date"
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

export default CreateOperation
