export const iconsObject = {
    flower: { _id: 'asd1471', name: 'flower', value: 'bi bi-flower2' },
    basket: { _id: 'asd1472', name: 'basket', value: 'bi bi-basket' },
    bus: { _id: 'asd1473', name: 'bus', value: 'bi bi-bus-front' },
    cash: { _id: 'asd1474', name: 'cash', value: 'bi bi-cash' },
    film: { _id: 'asd1475', name: 'film', value: 'bi bi-film' },
    house: { _id: 'asd1476', name: 'house', value: 'bi bi-house-door' },
    plane: { _id: 'asd1477', name: 'plane', value: 'bi bi-airplane' },
    apple: { _id: 'asd1478', name: 'apple', value: 'bi bi-apple' },
    bank: { _id: 'asd1479', name: 'bank', value: 'bi bi-bank' },
    barChart: { _id: 'asd1480', name: 'barChart', value: 'bi bi-bar-chart' },
    bicycle: { _id: 'asd1481', name: 'bicycle', value: 'bi bi-bicycle' },
    boombox: { _id: 'asd1482', name: 'boombox', value: 'bi bi-boombox' },
    car: { _id: 'asd1483', name: 'car', value: 'bi bi-car-front' },
    cashStack: { _id: 'asd1484', name: 'cashStack', value: 'bi bi-cash-stack' },
    cashCoin: { _id: 'asd1485', name: 'cashCoin', value: 'bi bi-cash-coin' },
    coin: { _id: 'asd1486', name: 'coin', value: 'bi bi-coin' },
    controller: {
        _id: 'asd1487',
        name: 'controller',
        value: 'bi bi-controller'
    },
    euro: { _id: 'asd1488', name: 'euro', value: 'bi bi-currency-euro' },
    dollar: { _id: 'asd1489', name: 'dollar', value: 'bi bi-currency-dollar' },
    bitcoin: {
        _id: 'asd1490',
        name: 'bitcoin',
        value: 'bi bi-currency-bitcoin'
    },
    pump: { _id: 'asd1491', name: 'pump', value: 'bi bi-fuel-pump' },
    gem: { _id: 'asd1492', name: 'gem', value: 'bi bi-gem' },
    health: { _id: 'asd1493', name: 'health', value: 'bi bi-heart-pulse' },
    mortarboard: {
        _id: 'asd1494',
        name: 'mortarboard',
        value: 'bi bi-mortarboard-fill'
    }
}
export const icons = [
    { _id: 'asd1471', name: 'flower', value: 'bi bi-flower2' },
    { _id: 'asd1472', name: 'basket', value: 'bi bi-basket' },
    { _id: 'asd1473', name: 'bus', value: 'bi bi-bus-front' },
    { _id: 'asd1474', name: 'cash', value: 'bi bi-cash' },
    { _id: 'asd1475', name: 'film', value: 'bi bi-film' },
    { _id: 'asd1476', name: 'house', value: 'bi bi-house-door' },
    { _id: 'asd1477', name: 'plane', value: 'bi bi-airplane' },
    { _id: 'asd1478', name: 'apple', value: 'bi bi-apple' },
    { _id: 'asd1479', name: 'bank', value: 'bi bi-bank' },
    { _id: 'asd1480', name: 'barChart', value: 'bi bi-bar-chart' },
    { _id: 'asd1481', name: 'bicycle', value: 'bi bi-bicycle' },
    { _id: 'asd1482', name: 'boombox', value: 'bi bi-boombox' },
    { _id: 'asd1483', name: 'car', value: 'bi bi-car-front' },
    { _id: 'asd1484', name: 'cashStack', value: 'bi bi-cash-stack' },
    { _id: 'asd1485', name: 'cashCoin', value: 'bi bi-cash-coin' },
    { _id: 'asd1486', name: 'coin', value: 'bi bi-coin' },
    { _id: 'asd1487', name: 'controller', value: 'bi bi-controller' },
    { _id: 'asd1488', name: 'euro', value: 'bi bi-currency-euro' },
    { _id: 'asd1489', name: 'dollar', value: 'bi bi-currency-dollar' },
    { _id: 'asd1490', name: 'bitcoin', value: 'bi bi-currency-bitcoin' },
    { _id: 'asd1491', name: 'pump', value: 'bi bi-fuel-pump' },
    { _id: 'asd1492', name: 'gem', value: 'bi bi-gem' },
    { _id: 'asd1493', name: 'health', value: 'bi bi-heart-pulse' },
    { _id: 'asd1494', name: 'mortarboard', value: 'bi bi-mortarboard-fill' }
]

const fetchAll = new Promise((resolve) => {
    setTimeout(() => {
        resolve(icons)
    }, 500)
})

export default {
    fetchAll
}
