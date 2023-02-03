import React, { useState, useEffect } from 'react'
import api from '../../../api'
import Loader from '../../common/loader'
import PropTypes from 'prop-types'

const Operation = ({ id }) => {
    const [operation, setOperation] = useState()

    useEffect(() => {
        api.operations.getById(id).then((data) => setOperation(data))
    }, [])
    if (operation) {
        return (
            <>
                <h1>Anpointment - {operation.anpointment.name} </h1>
                <h2>
                    Icon - <i className={operation.category.categoryIcon}></i>
                </h2>
                <h2>Category - {operation.category.name}</h2>
                <h2>Card - {operation.card.name}</h2>
                <h2>Sum - {operation.sum}</h2>
                <h3>Sum - {operation.comment}</h3>
                <h3>Date - {operation.date}</h3>
            </>
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
