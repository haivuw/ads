import React from 'react'
import PaginationComponent from './Pagination'

export default {
    title: 'Pagination',
    component: PaginationComponent,
}

export const Pagination = () => {
    const count = 1000;
    const [pageSize, setPageSize] = React.useState(20)

    const onChange = () => {

        }
    return <PaginationComponent
        count={count}
        onChange = {onChange}
        pageSize={pageSize}
        setPageSize={setPageSize}/>
}