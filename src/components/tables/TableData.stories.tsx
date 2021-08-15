import React from 'react'
import TableComponent from './TableComponent'
import {HEADER_TYPE} from "../../config/contanst";
import makeData from "./MakeData";

export default {
    title: 'Table',
    component: TableComponent,
    // args: {
    //     children: 'Button'
    // }
}
const WIDTH_CELL = 120;
const WIDTH_CELL_SMALL = 90;
export const Table = () =>{
    const columns = [
        {
            Header: 'キャンペーン',
            accessor: 'campaignName',
            width: 200,
        },
        {
            Header: '予算',
            accessor: 'budget',
            width: WIDTH_CELL,
        },
        {
            Header: 'ステータス',
            accessor: 'status',
            width: WIDTH_CELL,
        },
        {
            Header: '最適化スコア',
            accessor: 'optimisationScore',
            width: WIDTH_CELL,
        },
        {
            Header: '最適化スコア',
            accessor: 'account',
            width: WIDTH_CELL,
        },
        {
            Header: 'キャンペーンタイプ',
            accessor: 'campaignType',
            width: WIDTH_CELL,
        },

        {
            Header: 'コンバージョン',
            accessor: 'conversions',
            width: WIDTH_CELL_SMALL,
        },
        {
            Header: 'コンバージョン',
            accessor: 'costConv',
            width: WIDTH_CELL_SMALL,
        },
        {
            Header: '表示回数',
            accessor: 'impr',
            width: WIDTH_CELL_SMALL,
        },
        {
            Header: 'インタラクション',
            accessor: 'interactions',
            width: WIDTH_CELL_SMALL,
        },
        {
            Header: 'インタラクション率',
            accessor: 'interactionRate',
            width: WIDTH_CELL_SMALL,
        },
        {
            Header: '平均費用',
            accessor: 'AvgCost',
            width: WIDTH_CELL_SMALL,
        },
        {
            Header: '費用',
            accessor: 'cost',
            width: WIDTH_CELL_SMALL,
        },
        {
            Header: 'クリック数',
            accessor: 'click',
            width: WIDTH_CELL_SMALL,
        },
        {
            Header: '無効なクリック',
            accessor: 'invalidClick',
            width: WIDTH_CELL_SMALL,
        },
        {
            Header: '平均クリック単価',
            accessor: 'avgCPC',
            width: WIDTH_CELL_SMALL,
        },
        // ],
        // },

    ];
    const serverData = makeData(1000)
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState([])
    const [pageCount, setPageCount] = React.useState(0)
    const fetchIdRef = React.useRef(0)

    const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
        // This will get called when the table needs new data
        // You could fetch your data from literally anywhere,
        // even a server. But for this example, we'll just fake it.

        // Give this fetch an ID
        const fetchId = ++fetchIdRef.current

        // Set the loading state
        setLoading(true)

        // We'll even set a delay to simulate a server here
        setTimeout(() => {
            // Only update the data if this is the latest fetch
            if (fetchId === fetchIdRef.current) {
                const startRow = pageSize * pageIndex
                const endRow = startRow + pageSize
                setData(serverData.slice(startRow, endRow))

                // Your server could send back total page count.
                // For now we'll just fake it, too
                setPageCount(Math.ceil(serverData.length / pageSize))

                setLoading(false)
            }
        }, 1000)
    }, [])

    return <TableComponent
        columns={columns}
        loading={loading}
        pageCount={pageCount}
        fetchData={fetchData}
        data={data}/>
}

// const Template = args => <HeaderComponent {...args} />

// export const PrimaryA = Template.bind({})
// PrimaryA.args = {
//     variant: 'primary',
//     // children: 'Primary Args',
// }

// export const SecondaryA = Template.bind({})
// SecondaryA.args = {
//     variant: 'secondary',
//     // children: 'Secondary Args',
// }
//
// export const LongPrimaryA = Template.bind({})
// LongPrimaryA.args = {
//     ...PrimaryA.args,
//     // children: 'Long Primary Args',
// }