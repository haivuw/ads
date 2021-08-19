import React from 'react';
import TableComponent from '.';
import makeData from './MakeData';
import { COLUMNS_CAMPAIGNS } from "../../utils/contansts";

export default {
  title: 'Components/Table',
  component: TableComponent,
  isPagination: {
    control: 'boolean'
  }
};
export const Table = () => {
  const serverData = makeData(1000);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [pageCount, setPageCount] = React.useState(0);
  const fetchIdRef = React.useRef(0);

  const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
    // This will get called when the table needs new data
    // You could fetch your data from literally anywhere,
    // even a server. But for this example, we'll just fake it.

    // Give this fetch an ID
    const fetchId = ++fetchIdRef.current;

    // Set the loading state
    setLoading(true);

    // We'll even set a delay to simulate a server here
    setTimeout(() => {
      // Only update the data if this is the latest fetch
      if (fetchId === fetchIdRef.current) {
        const startRow = pageSize * pageIndex;
        const endRow = startRow + pageSize;
        setData(serverData.slice(startRow, endRow));

        // Your server could send back total page count.
        // For now we'll just fake it, too
        setPageCount(Math.ceil(serverData.length / pageSize));

        setLoading(false);
      }
    }, 1000);
  }, []);

  return (
    <TableComponent
      columns={COLUMNS_CAMPAIGNS}
      loading={loading}
      pageCount={pageCount}
      fetchData={fetchData}
      data={data}
      isPagination={false}
    />
  );
};

// const Template = args => <TableComponent {...args} />

// export const PrimaryA = Template.bind({})
Table.args = {
  columns: COLUMNS_CAMPAIGNS,
  isPagination: 'Primary Args',
};

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
