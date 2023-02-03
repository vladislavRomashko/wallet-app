import React, { useState, useEffect } from 'react'
import api from '../../../api'
import Pagination from '../../common/pagination'
import { paginate } from '../../../utils/paginate'
import GroupList from '../../common/groupList'
import OperationsTable from '../../ui/operationsTable'
import SortSelect from '../../common/sortSelect'
import sortOptions from '../../../utils/sortOptions'
import Loader from '../../common/loader'

const DailyPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [categories, setCategories] = useState()
    const [selectedCat, setSelectedCat] = useState()
    const [sortSign, setSortSign] = useState('dateDESC')
    const [operations, setOperations] = useState()

    const pageSize = 5

    useEffect(() => {
        api.operations.fetchAll().then((data) => setOperations(data))
    }, [])

    const handleDelete = (id) => {
        setOperations(operations.filter((o) => o._id !== id))
    }

    useEffect(() => {
        api.categories.fetchAll().then((data) => setCategories(data))
    }, [])

    useEffect(() => {
        setCurrentPage(1)
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
            ? operations.filter(
                  (operation) =>
                      JSON.stringify(selectedCat) ===
                      JSON.stringify(operation.category)
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

        return (
            <div className="d-flex">
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

                <div className="d-flex flex-column">
                    <div className="d-flex mx-auto text-center">
                        <SortSelect
                            onSort={handleChangeSortSign}
                            value={sortSign}
                            options={sortOptions}
                        />
                    </div>
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
        )
    }
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <Loader />
        </div>
    )
}

export default DailyPage
