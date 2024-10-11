'use client'
import React, { PureComponent } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: '$Vacation Savings',
        Balance: -850.00,
        pv: 2400,
        amt: 2400,
    },
    {
        name: '$Main Business',
        Balance: -1200.00,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '$Old Checking',
        Balance: 500.00,
        pv: -9800,
        amt: 2290,
    },
    {
        name: '$Daily Expenses',
        Balance: -2000.00,
        pv: 3908,
        amt: 2000,
    },
    {
        name: '$Emergency Fund',
        Balance: -300.00,
        pv: 4800,
        amt: 2181,
    },
    {
        name: '$Retirement Savings',
        Balance: 'Error fetching balance: Failed to fetch account balance',
        pv: -3800,
        amt: 2500,
    },
    {
        name: 'Other Account', // Placeholder for additional accounts if needed
        Balance: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default class NegativeBarChart extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    width={800}
                    height={300}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 20,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="Balance" fill="#8884d8" />
                    <Bar dataKey="Amount" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
