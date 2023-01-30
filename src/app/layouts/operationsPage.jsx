import React from 'react'
import Daily from '../components/daily'
import Operation from '../components/operation'
import { useParams } from 'react-router-dom'

const OperationsPage = () => {
    const match = useParams()
    const { operationId } = match
    return (
        <>
            {operationId ? <Operation id={operationId} /> : <Daily />}

        </>
    )
}

export default OperationsPage
