import React, { useState, useEffect } from 'react';
import LayoutComponent from './Layout';
import { HEADER_TYPE } from '../../config/contanst';
import { Table } from '../tables/TableData.stories';

export default {
  title: 'Layout',
  component: LayoutComponent
  // args: {
  //     children: 'Button'
  // }
};

export const Layout = () => {
  const children =
    'It’s the perfect place to go to declutter or discover items that will breathe new life into your space. Letting go has never felt so good – it’s almost as good as finding your new favorite thing. And we’re here to help.\n' +
    '\n' +
    'We connect millions of people across the U.S. to shop and sell almost anything. We all have things we don’t use, never used, or simply outgrew. But these treasured items still have value. Our team is always trying to find new ways to make exchanging items even easier. This means at-home pickups, same-day delivery, and a curated list of items you’ll love.\n' +
    '\n' +
    'Say ‘goodbye’ to the things you’re no longer using and ‘hello’ to delightful new finds.';
  return <LayoutComponent children={children} />;
};
