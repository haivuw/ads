import React, { FC, PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const CampaignBarChart: FC<{ data: any }> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="clicks" fill="#3b78e7" />
        <Bar dataKey="cost" fill="#d23f31" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CampaignBarChart;

export const generateData = () => {
  const camp_num = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
  let data = [];
  let count = 0;
  while (count < camp_num) {
    data.push({
      name: `Campaign ${count}`,
      clicks: Math.floor(Math.random() * 100) ,
      cost: Math.floor(Math.random() * 100) ,
    });
    count++;
  }
  return data;
};
