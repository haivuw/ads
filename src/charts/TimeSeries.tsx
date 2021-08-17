import React from 'react';
import addDays from 'date-fns/addDays';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const TimeSeriesChart = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={data}>
      <Line dataKey="clicks" stroke="blue" />
      <Line dataKey="cost" stroke="red"/>
      <XAxis dataKey="time" tickFormatter={time => (time ? new Date(time).toISOString().substring(5, 10) : '')} />
      <YAxis dataKey="clicks" tickLine={false} />
      <Tooltip labelFormatter={time => new Date(time).toISOString().substring(0, 10)} />
    </LineChart>
  </ResponsiveContainer>
);

export const generateData = () => {
  const from = new Date();
  const to = addDays(new Date(), Math.floor(Math.random() * (30 - 7 + 1)) + 7);
  let data = [];
  let temp = from;
  while (temp < to) {
    data.push({
      time: temp.getTime(),
      clicks: Math.floor(Math.random() * 50),
      cost: Math.floor(Math.random() * 50) });
    temp = addDays(temp, 1);
  }
  console.log(data);
  return data;
};

export default TimeSeriesChart;
