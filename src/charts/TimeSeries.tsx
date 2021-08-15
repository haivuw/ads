import React from 'react';
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
      <YAxis dataKey="clicks" />
      <Tooltip labelFormatter={time => new Date(time).toDateString()} />
    </LineChart>
  </ResponsiveContainer>
);

export default TimeSeriesChart;
