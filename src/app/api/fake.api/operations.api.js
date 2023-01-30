import { categoriesObject as categories } from './categories.api'

const anpointments = {
    consumption: { _id: 'bbq111', name: 'Расход' },
    income: { _id: 'bbq112', name: 'Доход' }
}

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
        date: '12.12.2012'
    },
    {
        _id: '67rdca3eeb7f6fgeed471816',
        anpointment: anpointments.consumption,
        category: categories.food,
        card: cards.debit,
        sum: 300,
        comment: 'Покупка еды',
        date: '12.11.2012'
    },
    {
        _id: '67rdca3eeb7f6fgeed471817',
        anpointment: anpointments.consumption,
        category: categories.transport,
        card: cards.debit,
        sum: 1500,
        comment: 'Ремонт авто',
        date: '12.10.2012'
    },
    {
        _id: '67rdca3eeb7f6fgeed471818',
        anpointment: anpointments.income,
        category: categories.salary,
        card: cards.debit,
        sum: 5000,
        comment: 'Премия',
        date: '12.12.2012'
    },
    {
        _id: '67rdca3eeb7f6fgeed471819',
        anpointment: anpointments.consumption,
        category: categories.fun,
        card: cards.credit,
        sum: 1000,
        comment: 'Поход в кафе',
        date: '12.12.2012'
    },
    {
        _id: '67rdca3eeb7f6fgeed471820',
        anpointment: anpointments.consumption,
        category: categories.house,
        card: cards.credit,
        sum: 2500,
        comment: 'Коммунальные',
        date: '12.12.2012'
    },
    {
        _id: '67rdca3eeb7f6fgeed471821',
        anpointment: anpointments.consumption,
        category: categories.food,
        card: cards.credit,
        sum: 100,
        comment: 'Покупка овощей',
        date: '25.12.2012'
    },
    {
        _id: '67rdca3eeb7f6fgeed471822',
        anpointment: anpointments.consumption,
        category: categories.transport,
        card: cards.credit,
        sum: 800,
        comment: 'Заправка авто',
        date: '23.12.2012'
    },
    {
        _id: '67rdca3eeb7f6fgeed471823',
        anpointment: anpointments.consumption,
        category: categories.fun,
        card: cards.credit,
        sum: 1000,
        comment: 'Поход в кино',
        date: '05.12.2012'
    },
    {
        _id: '67rdca3eeb7f6fgeed471824',
        anpointment: anpointments.consumption,
        category: categories.health,
        card: cards.credit,
        sum: 1200,
        comment: 'Покупка косметики',
        date: '01.12.2012'
    }
]

const fetchAll = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(operations)
        }, 2000)
    })

const getById = (id) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(operations.find((operation) => operation._id === id))
        }, 1000)
    })

export default {
    fetchAll,
    getById
}
