import { Box } from '@material-ui/core';
import React from 'react';
import '../../../App.css';
import TitleComponent from 'components/Atoms/TitlePage';
import makeData from "components/Tables/MakeData";
import { COLUMNS_CAMPAIGNS } from "common/contanst";
import Toolbar from 'components/Charts/Toolbar';
import CampaignBarChart, { generateData } from 'components/Charts/Bars';
import TableComponent from 'components/Tables';
import ToolbarTable from 'components/Tables/Toolbar/Toolbar';

export default function Campaigns() {
  const serverData = makeData(1000);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [pageCount, setPageCount] = React.useState(0);
  const fetchIdRef = React.useRef(0);

  const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
    const fetchId = ++fetchIdRef.current;
    setLoading(true);
    setTimeout(() => {
      if (fetchId === fetchIdRef.current) {
        const startRow = pageSize * pageIndex;
        const endRow = startRow + pageSize;
        setData(serverData.slice(startRow, endRow));
        setPageCount(Math.ceil(serverData.length / pageSize));
        setLoading(false);
      }
    }, 1000);
  }, []);

  return (
    <>
      <TitleComponent text={'Campaigns'} />
      <div style={{ backgroundColor: '#f1f3f4', marginTop: 5, marginBottom: 10 }}>
        <div style={{ padding: '1rem' }}>
          <Toolbar />
          <Box m={1} />
          <div style={{ height: 300, overflow: 'hidden', }}>
            <CampaignBarChart data={generateData()} />
          </div>
          <Box m={1} />
        </div>
      </div>
      <div style={{ padding: '0 1rem 0 1rem', backgroundColor: '#fff', }}>
        <ToolbarTable />
      </div>
      {/*<Box m={1} />*/}
      <div style={{ backgroundColor: '#fff' }}>
        <TableComponent
          columns={COLUMNS_CAMPAIGNS}
          loading={loading}
          pageCount={pageCount}
          fetchData={fetchData}
          data={data}
        />
      </div>
    </>
  );
}
