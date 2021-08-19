// @ts-nocheck
import { Box } from '@material-ui/core';
import { ToolbarWithChildren } from 'components/Tables/Toolbar/Toolbar.stories';
import React, { useState, useEffect } from 'react';
import LayoutComponent from '../../Layout/index';
import { Toolbar } from "components/Charts/Toolbar.stories";
import '../../../App.css';
import TableComponent from "components/Tables";
import TitleComponent from 'components/Atoms/TitlePage';
import makeData from "components/Tables/MakeData";
import {COLUMNS_CAMPAIGNS} from "config/contanst";
import CampaignBarChart, {generateData} from "components/Charts/Bars";
export default {
  title: 'Screens/Campaigns',
  component: LayoutComponent
  // args: {
  //     children: 'Button'
  // }
};
export const Campaigns = () => {
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
    <LayoutComponent>
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
        <ToolbarWithChildren />
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

    </LayoutComponent>
  );
};
Campaigns.parameters = {
  layout: 'fullscreen',
}