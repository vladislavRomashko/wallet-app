import React from 'react'
import { useParams } from 'react-router-dom'
import DailyPage from '../components/page/dailyPage'
import Operation from '../components/ui/operation'

const Operations = () => {
    const match = useParams()
    const { operationId } = match
    return <>{operationId ? <Operation id={operationId} /> : <DailyPage />}</>
}

export default Operations
