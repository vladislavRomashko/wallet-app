import React, { useState, useEffect } from 'react'
import api from '../../../api'
import Loader from '../../common/loader'
import PropTypes from 'prop-types'
import TextField from '../../common/form/textField'
import { useHistory } from 'react-router-dom'
import SelectField from '../../common/form/selectField'
import BackButton from '../../common/buttons/backButton'

const Operation = ({ id }) => {
    const [data, setData] = useState({})
    const [categories, setCategories] = useState([])
    const [anpointment, setAnpointment] = useState([])
    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const history = useHistory()

    useEffect(() => {
        setIsLoading(false)
        api.operations
            .getById(id)
            .then(({ anpointment, card, category, ...data }) => {
                setData((prev) => ({
                    ...prev,
                    ...data,
                    anpointment: anpointment._id,
                    card: card._id,
                    category: category._id
                }))
            })

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
    }, [data])

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
        const { anpointment, card, category, sum } = data

        console.log('send', data)

        api.operations
            .update(id, {
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
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h3>Информация об операции</h3>
                    {!isLoading && Object.keys(categories).length > 0 ? (
                        <form onSubmit={handleSubmit}>
                            <SelectField
                                options={anpointment}
                                name="anpointment"
                                value={data.anpointment || ''}
                                label="Статья расходов"
                                onChange={handleChange}
                            />

                            <SelectField
                                options={categories}
                                name="category"
                                value={data.category || ''}
                                label="Категория"
                                onChange={handleChange}
                            />
                            <SelectField
                                options={cards}
                                name="card"
                                value={data.card || ''}
                                label="Карта"
                                onChange={handleChange}
                            />
                            <TextField
                                name="sum"
                                value={data.sum || ''}
                                label="Сумма"
                                onChange={handleChange}
                            />
                            <TextField
                                name="comment"
                                value={data.comment || ''}
                                label="Комментарий"
                                onChange={handleChange}
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
                            >
                                Изменить
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

Operation.propTypes = {
    id: PropTypes.string
}

export default Operation
