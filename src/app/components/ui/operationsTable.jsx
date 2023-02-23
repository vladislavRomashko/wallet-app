import React from 'react'
import PropTypes from 'prop-types'
import Category from '../common/category'
import OperationButton from './operationButton'
import Table from '../common/table'
import { Link } from 'react-router-dom'
import DisplayDate from '../common/displayDate'

const OperationsTable = ({ operations, onDelete }) => {
    const columns = {
        // anpointment: { path: 'anpointment.name', name: 'Расход/Доход' },
        category: {
            path: 'category.name',
            name: 'Категория',
            component: (item) => <Category {...item.category} />
        },
        card: { path: 'card.name', name: 'Карта' },
        sum: {
            path: 'sum',
            name: 'Сумма',
            component: (item) => {
                if (item.anpointment.name === 'Расход') {
                    return (
                        <span className="text-danger fw-bold">{item.sum}</span>
                    )
                } else if (item.anpointment.name === 'Доход') {
                    return (
                        <span className="text-success fw-bold">{item.sum}</span>
                    )
                }
            }
        },
        comment: { path: 'comment', name: 'Коментарий' },
        created_at: {
            path: 'created_at',
            name: 'Дата',
            component: (item) => <DisplayDate data={item.created_at} />
        },
        buttons: {
            component: (operation) => (
                <>
                    <Link to={`/operations/${operation._id}`}>
                        <OperationButton
                            name={<i className="bi bi-pencil-square"></i>}
                        />
                    </Link>

                    <OperationButton
                        onAction={() => onDelete(operation._id)}
                        name={<i className="bi bi-trash3"></i>}
                    />
                </>
            )
        }
    }
    return <Table {...{ columns, data: operations }} />
}

OperationsTable.propTypes = {
    operations: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default OperationsTable
