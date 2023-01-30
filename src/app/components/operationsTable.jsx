import React from 'react'
import PropTypes from 'prop-types'
import Category from './category'
import OperationButton from './operationButton'
import Table from './table'
import { Link } from 'react-router-dom'

const OperationsTable = ({ operations, onDelete }) => {
    const columns = {
        anpointment: { path: 'anpointment.name', name: 'Расход/Доход' },
        category: {
            path: 'category.name',
            name: 'Категория',
            component: (item) => <Category {...item.category} />
        },
        card: { path: 'card.name', name: 'Карта' },
        sum: { path: 'sum', name: 'Сумма' },
        comment: { path: 'comment', name: 'Коментарий' },
        date: { path: 'date', name: 'Дата' },
        buttons: {
            component: (operation) => (
                <>
                    <Link to={`operations/${operation._id}`}>
                        <OperationButton styleBtn={'warning'} name={'Edit'} />
                    </Link>

                    <OperationButton
                        styleBtn={'danger'}
                        onAction={() => onDelete(operation._id)}
                        name={'Delete'}
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
