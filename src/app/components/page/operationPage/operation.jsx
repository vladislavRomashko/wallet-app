import React, { useState, useEffect } from 'react'
import api from '../../../api'
import Loader from '../../common/loader'
import PropTypes from 'prop-types'
import TextField from '../../common/form/textField'
import { useHistory } from 'react-router-dom'
import SelectField from '../../common/form/selectField'

const Operation = ({ id }) => {
    const [operation, setOperation] = useState()
    const [data, setData] = useState({
        anpointment: '',
        icon: '',
        category: '',
        card: '',
        sum: '',
        comment: '',
        date: ''
    })
    const [icons, setIcons] = useState([])
    useEffect(() => {
        api.icons.fetchAll.then((data) => setIcons(data))
    }, [])

    const history = useHistory()

    useEffect(() => {
        api.operations.getById(id).then((data) => {
            setOperation(data)
            setData({
                anpointment: data.anpointment.name,
                icon: data.category.categoryIcon,
                category: data.category.name,
                card: data.card.name,
                sum: data.sum,
                comment: data.comment,
                date: data.date
            })
        })
    }, [])

    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        history.replace('/operations')
    }

    if (operation) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <h3>Информация об операции</h3>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                name="anpointment"
                                value={data.anpointment}
                                label="Статья"
                                onChange={handleChange}
                            />
                            <SelectField
                                options={icons}
                                name="icon"
                                value={data.icon}
                                label="Иконка категории"
                                onChange={handleChange}
                            />

                            <TextField
                                name="category"
                                value={data.category}
                                label="Категория"
                                onChange={handleChange}
                            />
                            <TextField
                                name="card"
                                value={data.card}
                                label="Карта"
                                onChange={handleChange}
                            />
                            <TextField
                                name="sum"
                                value={data.sum}
                                label="Сумма"
                                onChange={handleChange}
                            />
                            <TextField
                                name="comment"
                                value={data.comment}
                                label="Комментарий"
                                onChange={handleChange}
                            />
                            <TextField
                                name="date"
                                value={data.date}
                                label="Дата"
                                onChange={handleChange}
                                // type="date"
                            />

                            <button
                                className="btn btn-primary mx-auto w-100"
                                type="submit"
                            >
                                Изменить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <Loader />
        </div>
    )
}

Operation.propTypes = {
    id: PropTypes.string
}

export default Operation
