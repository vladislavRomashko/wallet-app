import React, { useState, useEffect } from 'react'
import api from '../../../api'
import Pagination from '../../common/pagination'
import { paginate } from '../../../utils/paginate'
import GroupList from '../../common/groupList'
import OperationsTable from '../../ui/operationsTable'
import SortSelect from '../../common/sortSelect'
import sortOptions from '../../../utils/sortOptions'
import Loader from '../../common/loader'
import CreateButton from '../../common/buttons/createOperationBtn'
import { Link } from 'react-router-dom'
import CounterSum from '../../common/counterSum'
import _ from 'lodash'

const DailyPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [categories, setCategories] = useState()
    const [selectedCat, setSelectedCat] = useState()
    const [sortSign, setSortSign] = useState('dateDESC')
    const [operations, setOperations] = useState()

    const pageSize = 8

    useEffect(() => {
        api.operations.fetchAll().then((data) => setOperations(data))
    }, [])

    const handleDelete = (id) => {
        api.operations.removeById(id).then((data) => setOperations(data))
    }

    useEffect(() => {
        api.categories.fetchAll().then((data) => setCategories(data))
    }, [])

    useEffect(() => {
        setCurrentPage(1)
        console.log(selectedCat)
    }, [selectedCat])

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handleCategorySelect = (item) => {
        setSelectedCat(item)
    }

    const handleChangeSortSign = (e) => {
        setSortSign(e.target.value)
    }

    if (operations) {
        const filteredOperations = selectedCat
            ? operations.filter((operation) =>
                  _.isEqual(selectedCat, operation.category)
              )
            : operations

        const count = filteredOperations.length

        const findOption = sortOptions.find(({ value }) => value === sortSign)
        const sortOperations = findOption
            ? findOption.sort(filteredOperations)
            : filteredOperations

        const operationCrop = paginate(sortOperations, currentPage, pageSize)

        const clearFilter = () => {
            setSelectedCat()
        }

        const sumOfIncome = operations
            .filter((operation) => operation.anpointment.name === 'Доход')
            .reduce((acc, item) => {
                return (acc += item.sum)
            }, 0)

        const sumOfСonsumption = operations
            .filter((operation) => operation.anpointment.name === 'Расход')
            .reduce((acc, item) => {
                return (acc += item.sum)
            }, 0)

        return (
            <>
                <div className="d-flex text-center align-items-center  justify-content-evenly">
                    <div className="d-flex flex-column">
                        <Link to="/createOperation">
                            <CreateButton title="Создать новую операцию" />
                        </Link>
                        <Link to="/createCategory">
                            <CreateButton title="Создать новую категорию" />
                        </Link>
                    </div>
                    <div className="d-flex">
                        <div className="m-2">
                            <CounterSum
                                type="plus"
                                name="Доход"
                                sum={sumOfIncome}
                            />
                        </div>
                        <div className="m-2">
                            <CounterSum
                                type="minus"
                                name="Расход"
                                sum={sumOfСonsumption}
                            />
                        </div>
                    </div>
                    <div>
                        <SortSelect
                            onSort={handleChangeSortSign}
                            value={sortSign}
                            options={sortOptions}
                        />
                    </div>
                </div>
                <div className="d-flex ">
                    {categories && (
                        <div className="d-flex flex-column flex-shrink-0 p-3">
                            <GroupList
                                items={categories}
                                onItemSelect={handleCategorySelect}
                                selectedItem={selectedCat}
                            />
                            <button
                                className="btn btn-secondary mt-2"
                                onClick={clearFilter}
                            >
                                Reset
                            </button>
                        </div>
                    )}

                    <div className="d-flex flex-column flex-grow-1">
                        <OperationsTable
                            operations={operationCrop}
                            onDelete={handleDelete}
                        />
                        <div className="d-flex justify-content-center">
                            <Pagination
                                currentPage={currentPage}
                                itemsCount={count}
                                pageSize={pageSize}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <Loader />
        </div>
    )
}

export default DailyPage
