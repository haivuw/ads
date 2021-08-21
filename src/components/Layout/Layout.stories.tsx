import React, { useState, useEffect } from 'react';
import LayoutComponent from './index';

export default {
  title: 'Layouts/Layout',
  component: LayoutComponent
  // args: {
  //     children: 'Button'
  // }
};

export const Layout = () => {
  const children = <h1 style={{ fontSize: 40 }}>Content</h1>
  return <LayoutComponent children={children} />;
};
