import { iconsObject as icon } from './icons.api'
export const categoriesObject = {
    health: {
        _id: '67rdca3eeb7f6fgeed471198',
        name: 'Здоровье',
        categoryIcon: icon.health.value
    },
    food: {
        _id: '67rdca3eeb7f6fgeed471100',
        name: 'Продукты',
        categoryIcon: icon.basket.value
    },
    transport: {
        _id: '67rdca3eeb7f6fgeed4711012',
        name: 'Транспорт',
        categoryIcon: icon.car.value
    },
    house: {
        _id: '67rdca3eeb7f6fgeed471101',
        name: 'Дом',
        categoryIcon: icon.house.value
    },
    fun: {
        _id: '67rdca3eeb7f6fgeed471102',
        name: 'Досуг',
        categoryIcon: icon.film.value
    },
    salary: {
        _id: '67rdca3eeb7f6fgeed471113',
        name: 'Зарплата',
        categoryIcon: icon.cash.value
    }
}

export const categories = [
    {
        _id: '67rdca3eeb7f6fgeed471198',
        name: 'Здоровье',
        categoryIcon: icon.health.value
    },
    {
        _id: '67rdca3eeb7f6fgeed471100',
        name: 'Продукты',
        categoryIcon: icon.basket.value
    },
    {
        _id: '67rdca3eeb7f6fgeed4711012',
        name: 'Транспорт',
        categoryIcon: icon.car.value
    },
    {
        _id: '67rdca3eeb7f6fgeed471101',
        name: 'Дом',
        categoryIcon: icon.house.value
    },
    {
        _id: '67rdca3eeb7f6fgeed471102',
        name: 'Досуг',
        categoryIcon: icon.film.value
    },
    {
        _id: '67rdca3eeb7f6fgeed471113',
        name: 'Зарплата',
        categoryIcon: icon.cash.value
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
