export const cardsObject = {
    debit: { _id: '654qwe123', name: 'Зарплатная' },
    credit: { _id: '654qwe124', name: 'Кредитная' }
}

export const cards = [
    { _id: '654qwe123', name: 'Зарплатная' },
    { _id: '654qwe124', name: 'Кредитная' }
]

const fetchAll = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(cardsObject)
        }, 1000)
    })

export default {
    fetchAll
}
