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
        value: 'created_atASC',
        label: 'По дате от старых',
        sort: (filteredOperations) =>
            _.orderBy(filteredOperations, ['created_at'], ['asc'])
    },
    {
        value: 'created_atDESC',
        label: 'По дате от новых',
        sort: (filteredOperations) =>
            _.orderBy(filteredOperations, ['created_at'], ['desc'])
    }
]

export default sortOptions
