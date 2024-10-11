'use client';

import React, { useState, useEffect } from "react";
import {PieChart, Pie, Tooltip, ResponsiveContainer, TooltipProps} from 'recharts';
import { useRouter } from "next/navigation";

// TODO implement clsx in customtooltip to change color whether it is credit or debit
// import clsx from "clsx";

// Define your data type based on the structure you have
// interface DataItem {
//     name: string;        // Assuming 'name' is the account name
//     value: number;      // Assuming 'value' is the amount
//     currency: string;   // Assuming 'currency' is the currency type
// }
// Define the props interface
interface CustomTooltipProps extends TooltipProps<number, string> {
    active: boolean;
}
interface BalanceData {
    name: string;
    value: number;
    currency: string;
    credit_debit: string;
}
const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const { name, value, currency } = payload[0].payload as BalanceData; // Get currency from the payload
        return (
            <div className="rounded-br-md bg-gray-200 p-2 border-2 border-green-950">
                <p>{`Account: ${name}`}</p>
                <p>{`Value: ${value} ${currency}`}</p>
            </div>
        );
    }
    return null;
};
const BalancePieChart = () => {
    const [data, setData] = useState<BalanceData[]>([]);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    useEffect(() => {
        const fetchBalanceData = async () => {
            try {
                const response = await fetch(`/api/balances`);

                if (!response.ok) {
                    throw new Error('Failed to fetch balance data');
                }

                const fetchedData = await response.json();
                // Transform fetched data to recharts-compatible format using a for loop
                const formattedData: BalanceData[] = [];

                for (let i: number = 0; i < fetchedData.length; i++) {
                    const balance = fetchedData[i];
                    formattedData.push({
                        name: `Account: ${balance.account_id}`, // Structure for the name
                        value: balance.amount_value,
                        currency: balance.amount_currency,
                        credit_debit: balance.credit_debit_indicator
                    });
                }

                setData(formattedData); // Set the formatted data for recharts
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("An unknown error occurred!");
                }
            }
        };

        fetchBalanceData();
    }, []); // Run once when component mounts

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }
    // Handler for pie sector click
    const handlePieClick = (entry) => {
        // Doing a little dirty trick. Extracting the accountid from the payload.
        const accountId = entry.payload.name.split(": ")[1];
        router.push(`/accounts/${accountId}`); // Navigate to the account details page
    };

    return (
        <div className="flex flex-row justify-between items-start space-x-4">
            <div className="flex-1">
                <ResponsiveContainer width="100%" height={400}>
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={true}
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#208345"
                            label
                            onClick={handlePieClick}
                        />
                        <Tooltip content={<CustomTooltip active={false} />} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
}

export default BalancePieChart;
