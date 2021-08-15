import React, { useState, useEffect } from 'react';
import LayoutComponent from '../Layout/Layout';
import { Table } from '../tables/TableData.stories';

export default {
  title: 'Campaigns list',
  component: LayoutComponent
  // args: {
  //     children: 'Button'
  // }
};

export const Campaigns = () => {
  const children = <Table />;
  return <LayoutComponent children={children} />;
};
