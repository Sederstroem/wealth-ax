// import { accounts } from "@/app/lib/placeholder-data";
import AccountBalance from "@/app/ui/accounts/account-balance";
import Link from "next/link";
import LatestTransactions from "@/app/ui/accounts/latest-transactions";
import { fetchAllAccounts } from "@/app/lib/data";

export default async function AccountPreviewCard() {
    const accounts = await fetchAllAccounts();
     // await new Promise(resolve => setTimeout(resolve, 2000)); // For testing skeletons only
    return (
        <div className="space-y-6 flex flex-col items-center w-full">
            {accounts.map((account) => (
                <AccountDetails
                    key={account.id}
                    accountId={account.id} // Pass accountId to AccountDetails
                    nickname={account.nickname}
                    status={account.status}
                    currency={account.currency}
                />
            ))}
        </div>
    );
}

function AccountDetails({ nickname, status, currency, accountId }: {
    nickname: string | null;
    status: string | null;
    currency: string | null;
    accountId: string;
}) {
    return (
        <div className="rounded-xl bg-gray-150 p-4 shadow-m border-2 flex flex-col space-y-4 w-full max-w-3-xl">
            <div className="flex flex-row justify-between items-start space-x-4 w-full p-2">
                <div className={`flex-col flex-1 justify-between space-y-4`}>
                    <h2>Account</h2>
                    <ul className="flex-1 space-y-2">
                        <li>
                            <Link href={`/accounts/${accountId}`}>
                                <span className="font-bold cursor-pointer hover:underline decoration-green-900 text-xl">${nickname}</span>
                            </Link>
                        </li>
                        <li className={`text-md text-gray-600`}>Status: {status}</li>
                        <li className={`text-md text-gray-600`}>Currency: {currency}</li>
                    </ul>
                    <h2>Balance</h2>
                    <div className="flex-1 flex flex-col justify-between">
                        <AccountBalance accountId={accountId}/>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                    <h2>Latest transactions</h2>
                    <LatestTransactions accountId={accountId} />
                </div>
            </div>
        </div>
    );
}
