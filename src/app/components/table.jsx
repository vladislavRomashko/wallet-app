import React from 'react'
import PropTypes from 'prop-types'
import TableHeader from './tableHeader'
import TableBody from './tableBody'

const Table = ({ data, columns, children }) => {
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader {...{ columns }}/>
                    <TableBody {...{ data, columns }} /></>

            )}
        </table>

    )
}

Table.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.object,
    children: PropTypes.array
}
export default Table
