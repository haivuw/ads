// @ts-nocheck
import { Box } from '@material-ui/core';
import { ToolbarWithChildren } from 'components/table/Toolbar.stories';
import React, { useState, useEffect } from 'react';
import LayoutComponent from '../Layout/Layout';
import { Table } from '../tables/TableData.stories';
import TimeSeriesChart, { generateData } from 'charts/TimeSeries';
import { Picker } from 'stories/DateRange.stories';

export default {
  title: 'Screens/Campaigns',
  component: LayoutComponent
  // args: {
  //     children: 'Button'
  // }
};

export const Campaigns = () => {
  return (
    <LayoutComponent>
      <Picker />
      <Box m={1} />
      <div style={{ height: 300, position: 'relative', left: -30 }}>
        <TimeSeriesChart data={generateData()} />
      </div>
      <Box m={1} />
      <ToolbarWithChildren />
      <Box m={1} />
      <Table />
    </LayoutComponent>
  );
};
