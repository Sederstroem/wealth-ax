import { lusitana } from "@/app/ui/fonts";
import { transactions } from "@/app/lib/placeholder-data";
import clsx from "clsx";
export default async function LatestTransactions(
    { accountId }: { accountId: string }
) {
    const accountTransactions = transactions
        .filter((transaction) => transaction.accountId === accountId)
        .slice(0, 5);
    return (
        <div className={`${lusitana.className} space-y-2`}>
            <div className="bg-white p-4 rounded-md shadow-sm">
                {accountTransactions.length > 0 ? (
                    accountTransactions.map((transaction, index) => (
                        <div
                            key={index}
                            className={clsx('flex justify-between m-2 p-2 rounded-lg',
                                {
                                    'bg-gray-300': index % 2 !== 0,
                                    'bg-white': index % 2 === 0
                                })}
                        >
                            <div>
                                <p className="text-lg">{transaction.status}</p>
                                <p className="text-md text-gray-500">{transaction.bookingDateTime}</p>
                            </div>
                            <div className="flex flex-col items-end">
                                <p
                                    className={clsx(
                                        'text-md',
                                        {
                                            'text-green-500 font-semibold': transaction.creditDebitIndicator === 'Debit',
                                            'text-red-500': transaction.creditDebitIndicator === 'Credit',
                                        }
                                    )}
                                >
                                    {transaction.creditDebitIndicator === 'Debit' ? '+ ' : '- '}
                                    {transaction.amount.value} {transaction.amount.currency}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-md text-gray-500">No recent transactions available.</p>
                )}
            </div>
        </div>
    );
}