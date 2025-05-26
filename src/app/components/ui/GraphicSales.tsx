'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', Sales: 2400 },
  { month: 'Feb', Sales: 2600 },
  { month: 'Mar', Sales: 2800 },
  { month: 'Apr', Sales: 3000 },
  { month: 'May', Sales: 3200 },
  { month: 'Jun', Sales: 3400 },
  { month: 'Jul', Sales: 3600 },
  { month: 'Aug', Sales: 3800 },
  { month: 'Sep', Sales: 3700 },
  { month: 'Oct', Sales: 4000 },
  { month: 'Nov', Sales: 4300 },
  { month: 'Dec', Sales: 4700 },
];

export default function GraphicSales() {
  return (
    <div className="w-full h-full">
    <ResponsiveContainer width="100%" height={550}>
      <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="Sales" fill="#6366f1" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
}
