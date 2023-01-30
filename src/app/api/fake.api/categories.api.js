export const categoriesObject = {
    health: {
        _id: '67rdca3eeb7f6fgeed471198',
        name: 'Здоровье',
        categoryIcon: 'bi bi-flower2'
    },
    food: {
        _id: '67rdca3eeb7f6fgeed471100',
        name: 'Продукты',
        categoryIcon: 'bi bi-basket'
    },
    transport: {
        _id: '67rdca3eeb7f6fgeed4711012',
        name: 'Транспорт',
        categoryIcon: 'bi bi-bus-front'
    },
    house: {
        _id: '67rdca3eeb7f6fgeed471101',
        name: 'Дом',
        categoryIcon: 'bi bi-house-door'
    },
    fun: {
        _id: '67rdca3eeb7f6fgeed471102',
        name: 'Досуг',
        categoryIcon: 'bi bi-film'
    },
    salary: {
        _id: '67rdca3eeb7f6fgeed471113',
        name: 'Зарплата',
        categoryIcon: 'bi bi-cash'
    }
}

export const categories = [
    {
        _id: '67rdca3eeb7f6fgeed471198',
        name: 'Здоровье',
        categoryIcon: 'bi bi-flower2'
    },
    {
        _id: '67rdca3eeb7f6fgeed471100',
        name: 'Продукты',
        categoryIcon: 'bi bi-basket'
    },
    {
        _id: '67rdca3eeb7f6fgeed4711012',
        name: 'Транспорт',
        categoryIcon: 'bi bi-bus-front'
    },
    {
        _id: '67rdca3eeb7f6fgeed471101',
        name: 'Дом',
        categoryIcon: 'bi bi-house-door'
    },
    {
        _id: '67rdca3eeb7f6fgeed471102',
        name: 'Досуг',
        categoryIcon: 'bi bi-film'
    },
    {
        _id: '67rdca3eeb7f6fgeed471113',
        name: 'Зарплата',
        categoryIcon: 'bi bi-cash'
    }
]

const fetchAll = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories)
        }, 2000)
    })

export default {
    fetchAll
}
