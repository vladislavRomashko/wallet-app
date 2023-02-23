export const anpointmentsObject = {
    consumption: { _id: 'bbq111', name: 'Расход' },
    income: { _id: 'bbq112', name: 'Доход' }
}

export const anpointments = [
    { _id: 'bbq111', name: 'Расход' },
    { _id: 'bbq112', name: 'Доход' }
]

const fetchAll = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(anpointmentsObject)
        }, 1000)
    })
}

export default {
    fetchAll
}
