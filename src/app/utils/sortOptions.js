import _ from 'lodash'
const sortOptions = [
    {
        value: 'priceASC',
        label: 'Сумма по возрастанию',
        sort: (filteredOperations) =>
            _.orderBy(filteredOperations, ['sum'], ['asc'])
    },
    {
        value: 'priceDESC',
        label: 'Сумма по убыванию',
        sort: (filteredOperations) =>
            _.orderBy(filteredOperations, ['sum'], ['desc'])
    },
    {
        value: 'dateASC',
        label: 'По дате от старых',
        sort: (filteredOperations) =>
            _.orderBy(filteredOperations, ['date'], ['asc'])
    },
    {
        value: 'dateDESC',
        label: 'По дате от новых',
        sort: (filteredOperations) =>
            _.orderBy(filteredOperations, ['date'], ['desc'])
    }
]

export default sortOptions
