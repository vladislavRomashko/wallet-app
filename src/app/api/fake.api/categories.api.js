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

if (!localStorage.getItem('categories')) {
    localStorage.setItem('categories', JSON.stringify(categories))
}

const fetchAll = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(JSON.parse(localStorage.getItem('categories')))
        }, 2000)
    })

const add = (data) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const categories = JSON.parse(localStorage.getItem('categories'))
            const newCategories = {
                _id: Math.random().toString(36).substr(2, 9),
                ...data
            }
            categories.push(newCategories)
            localStorage.setItem('categories', JSON.stringify(categories))
            resolve(newCategories)
        }, 200)
    })

export default {
    fetchAll,
    add
}
