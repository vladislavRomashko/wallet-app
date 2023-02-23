import { categoriesObject as categories } from './categories.api'
import { anpointmentsObject as anpointments } from './anpointments.api'

const cards = {
    debit: { _id: '654qwe123', name: 'Зарплатная' },
    credit: { _id: '654qwe124', name: 'Кредитная' }
}
const operations = [
    {
        _id: '67rdca3eeb7f6fgeed471815',
        anpointment: anpointments.consumption,
        category: categories.health,
        card: cards.debit,
        sum: 500,
        comment: 'Покупка косметики',
        created_at: '1668899994659'
    },
    {
        _id: '67rdca3eeb7f6fgeed471816',
        anpointment: anpointments.consumption,
        category: categories.food,
        card: cards.debit,
        sum: 300,
        comment: 'Покупка еды',
        created_at: '1668822294659'
    },
    {
        _id: '67rdca3eeb7f6fgeed471817',
        anpointment: anpointments.consumption,
        category: categories.transport,
        card: cards.debit,
        sum: 1500,
        comment: 'Ремонт авто',
        created_at: '1622899994659'
    },
    {
        _id: '67rdca3eeb7f6fgeed471818',
        anpointment: anpointments.income,
        category: categories.salary,
        card: cards.debit,
        sum: 5000,
        comment: 'Премия',
        created_at: '1668899992222'
    },
    {
        _id: '67rdca3eeb7f6fgeed471819',
        anpointment: anpointments.consumption,
        category: categories.fun,
        card: cards.credit,
        sum: 1000,
        comment: 'Поход в кафе',
        created_at: '1663339994659'
    },
    {
        _id: '67rdca3eeb7f6fgeed471820',
        anpointment: anpointments.consumption,
        category: categories.house,
        card: cards.credit,
        sum: 2500,
        comment: 'Коммунальные',
        created_at: '1612399994659'
    },
    {
        _id: '67rdca3eeb7f6fgeed471821',
        anpointment: anpointments.consumption,
        category: categories.food,
        card: cards.credit,
        sum: 100,
        comment: 'Покупка овощей',
        created_at: '1559899994659'
    },
    {
        _id: '67rdca3eeb7f6fgeed471822',
        anpointment: anpointments.consumption,
        category: categories.transport,
        card: cards.credit,
        sum: 800,
        comment: 'Заправка авто',
        created_at: '1678899994659'
    },
    {
        _id: '67rdca3eeb7f6fgeed471823',
        anpointment: anpointments.consumption,
        category: categories.fun,
        card: cards.credit,
        sum: 1000,
        comment: 'Поход в кино',
        created_at: '1768899994659'
    },
    {
        _id: '67rdca3eeb7f6fgeed471824',
        anpointment: anpointments.consumption,
        category: categories.health,
        card: cards.credit,
        sum: 1200,
        comment: 'Покупка косметики',
        created_at: '1668895594659'
    }
]

if (!localStorage.getItem('operations')) {
    localStorage.setItem('operations', JSON.stringify(operations))
}

const fetchAll = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(JSON.parse(localStorage.getItem('operations')))
        }, 2000)
    })

const update = (id, data) =>
    new Promise((resolve) => {
        const operations = JSON.parse(localStorage.getItem('operations'))
        const operationIndex = operations.findIndex((o) => o._id === id)
        operations[operationIndex] = { ...operations[operationIndex], ...data }
        localStorage.setItem('operations', JSON.stringify(operations))
        resolve(operations[operationIndex])
    })

const getById = (id) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                JSON.parse(localStorage.getItem('operations')).find(
                    (operation) => operation._id === id
                )
            )
        }, 1000)
    })

const removeById = (id) =>
    new Promise((resolve) => {
        const operations = JSON.parse(localStorage.getItem('operations'))
        const filteredOperation = operations.filter((o) => o._id !== id)
        localStorage.setItem('operations', JSON.stringify(filteredOperation))
        resolve(filteredOperation)
    })

const add = (data) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const operations = JSON.parse(localStorage.getItem('operations'))
            const newOperation = {
                ...data,
                // created_at: Date.now(),
                _id: Math.random().toString(36).substr(2, 9)
            }
            operations.push(newOperation)
            localStorage.setItem('operations', JSON.stringify(operations))
            resolve(newOperation)
        }, 200)
    })

export default {
    fetchAll,
    getById,
    update,
    removeById,
    add
}
