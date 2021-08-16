// @ts-nocheck
import { Box } from '@material-ui/core';
import { ToolbarWithChildren } from 'components/toolbar/Toolbar.stories';
import React, { useState, useEffect } from 'react';
import LayoutComponent from '../layout/Layout';
import TimeSeriesChart, { generateData } from 'charts/TimeSeries';
import {Toolbar} from "../../charts/Toolbar.stories";
import TitleComponent from "./Title";
import '../../App.css';
import { Container } from '@material-ui/core';
import makeData from "../tables/MakeData";
import TableComponent from "../tables/TableComponent";
import {COLUMNS_CAMPAIGNS} from "../../config/contanst";
export default {
  title: 'Screens/Campaigns',
  component: LayoutComponent
  // args: {
  //     children: 'Button'
  // }
};
export const Campaigns = () => {
    const breadcrumbs = [
        {
            link: '/',
            name: 'Home',
        },
        {
            link: '',
            name: 'Campaigns',
        }
    ]

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
      <TitleComponent text={'Campaigns'}/>
      <div style={{backgroundColor: '#f1f3f4', marginTop: 5, marginBottom: 10}}>
          <div style={{padding: '1rem'}}>
              <Toolbar />
              <Box m={1} />
              <div style={{ height: 300, position: 'relative'}}>
                  <TimeSeriesChart data={generateData()} />
              </div>
              <Box m={1} />
          </div>
      </div>
      <div style={{padding: '0 1rem 0 1rem'}}>
          <ToolbarWithChildren />
      </div>
      {/*<Box m={1} />*/}
      <TableComponent
          columns={COLUMNS_CAMPAIGNS}
          loading={loading}
          pageCount={pageCount}
          fetchData={fetchData}
          data={data}
      />


    </LayoutComponent>
  );
};
Campaigns.parameters = {
    layout: 'fullscreen',
}