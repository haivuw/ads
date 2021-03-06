// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import {
  useTable,
  useResizeColumns,
  useSortBy,
  usePagination,
  useBlockLayout,
  useRowSelect
} from 'react-table';
import PaginationComponent from '../Atoms/Pagination';
import LoadingComponent from '../Atoms/Loading';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, Theme, makeStyles } from '@material-ui/core/styles';

const HtmlTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(10),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const Styles = styled.div`
  padding: 1rem;
  ${'' /* These styles are suggested for the table fill all available space in its containing element */}
  display: block;
  ${'' /* These styles are required for a horizontaly scrollable table overflow */}
  // overflow: auto;
  .pagination {
    padding: 0.5rem;
  }
  .table {
    border-spacing: 0;
    border: 1px solid #dadce0;
    width: 100%;
    overflow: hidden;
     overflow-y: auto;
      overflow-x: auto;
      // height: 400px;

     .th {
      font-weight: bold;
      width: 80px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    div::-webkit-scrollbar {
      width: 1em;
      height:10px;
    }
     
    div::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.3);
    }
      
    div::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 1px solid slategrey;
    }

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #dadce0;
      border-right: 1px solid #dadce0;
      color: #5f6368,

      ${'' /* In this example we use an absolutely position resizer,
       so this is required. */}
      position: relative;

      :last-child {
        border-right: 0;
      }

      .resizer {
        right: 0;
        // background: blue;
        width: 5px;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 1;
        ${'' /* prevents from scrolling while dragging on touch devices */}
        touch-action :none;

        &.isResizing {
          // background: red;
        }
      }
    }
  }
`

const headerProps = (props, { column }) => getStyles(props, column.align);

const cellProps = (props, { cell }) => getStyles(props, cell.column.align);


const getStyles = (props, align = 'left') => [
  props,
  {
    style: {
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      alignItems: 'flex-start',
      display: 'flex'
    }
  }
];

const IndeterminateCheckbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <input type="checkbox" ref={resolvedRef} {...rest} />
    </>
  );
});

function Table({ columns, data, fetchData, loading, pageCount: controlledPageCount, isPagination }) {
  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 30, // minWidth is only used as a limit for resizing
      width: 100, // width is used for both the flex-basis and flex-grow
      maxWidth: 300 // maxWidth is only used as a limit for resizing
    }),
    []
  );

  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    getTableBodyProps,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    // Get the state from the instance
    state: { pageIndex, pageSize = 20 }
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0, pageSize: 10 }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      pageCount: controlledPageCount
    },
    useSortBy,
    usePagination,
    useResizeColumns,
    useBlockLayout,
    useRowSelect,
    hooks => {
      hooks.allColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          disableResizing: true,
          minWidth: 35,
          width: 35,
          maxWidth: 35,
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          )
        },
        ...columns
      ]);
      hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
        // fix the parent group of the selection button to not be resizable
        const selectionGroupHeader = headerGroups[0].headers[0];
        selectionGroupHeader.canResize = false;
      });
    }
  );

  // Listen for changes in pagination and use the state to fetch our new data
  React.useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  return (
    <>
      <div {...getTableProps()} className="table">
        <div>
          {headerGroups.map(headerGroup => (
            <div
              {...headerGroup.getHeaderGroupProps({
                // style: { paddingRight: '15px' },
              })}
              className="tr"
            >
              {headerGroup.headers.map(column => (
                column?.tooltip ?
                  <HtmlTooltip
                    arrow
                    interactive
                    title={
                      column?.tooltip
                    }
                  >
                    <div
                      {...column.getHeaderProps({ ...headerProps, ...column.getSortByToggleProps() })}
                      className="th"
                    >
                      {column.render('Header')}
                      <span>{column.isSorted ? (column.isSortedDesc ? ' ????' : ' ????') : ''}</span>
                      {/* Use column.getResizerProps to hook up the events correctly */}
                      {column.canResize && (
                        <div
                          {...column.getResizerProps()}
                          className={`resizer header ${column.isResizing ? 'isResizing' : ''}`}
                        />
                      )}
                    </div>
                  </HtmlTooltip> :
                  <div
                    {...column.getHeaderProps({ ...headerProps, ...column.getSortByToggleProps() })}
                    className="th"
                  >
                    {column.render('Header')}
                    <span>{column.isSorted ? (column.isSortedDesc ? ' ????' : ' ????') : ''}</span>
                    {/* Use column.getResizerProps to hook up the events correctly */}
                    {column.canResize && (
                      <div
                        {...column.getResizerProps()}
                        className={`resizer header ${column.isResizing ? 'isResizing' : ''}`}
                      />
                    )}
                  </div>

              ))}
            </div>
          ))}
        </div>
        <div className="tbody">
          {rows.map(row => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map(cell => {
                  return (
                    <div {...cell.getCellProps(cellProps)} className="td">
                      {cell.render('Cell')}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      {isPagination ? <div className="pagination">
        <PaginationComponent
          count={pageSize}
          onChange={gotoPage}
          setPageSize={setPageSize}
          pageSize={pageSize}
        />
      </div> : null}
    </>
  );
}

export default function TableComponent({ columns, data, fetchData, loading, pageCount, isPagination = true }) {
  return (
    <Styles>
      {loading ? <LoadingComponent loading={loading} children={null} /> : null}
      <Table
        columns={columns}
        data={data}
        fetchData={fetchData}
        loading={loading}
        pageCount={pageCount}
        isPagination={isPagination}
      />
    </Styles>
  );
}
