import React from 'react';
import addDays from 'date-fns/addDays';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import format from 'date-fns/format';

const TimeSeriesChart = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={data}>
      <Line dataKey="clicks" stroke="#8884d8" />
      <XAxis dataKey="time" tickFormatter={time => (time ? new Date(time).toDateString() : '')} />
      <YAxis dataKey="clicks" tickLine={false} />
      <Tooltip labelFormatter={time => new Date(time).toDateString()} />
    </LineChart>
  </ResponsiveContainer>
);

export const generateData = () => {
  const from = new Date();
  const to = addDays(new Date(), Math.floor(Math.random() * (30 - 7 + 1)) + 7);
  let data = [];
  let temp = from;
  while (temp < to) {
    data.push({ time: temp.getTime(), clicks: Math.floor(Math.random() * 100) });
    temp = addDays(temp, 1);
  }
  console.log(data);
  return data;
};

export default TimeSeriesChart;
