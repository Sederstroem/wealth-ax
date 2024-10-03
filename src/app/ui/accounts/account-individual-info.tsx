import {
    fetchAccountBalance,
    fetchAccountAndDetails
} from "@/app/lib/data";

export default async function IndividualAccountInfo({ accountId }: { accountId: string }) {
    const [ accountBalances,accountAndDetails] = await Promise.all([
        fetchAccountBalance(accountId),
        fetchAccountAndDetails(accountId)
    ]);

    return (
        <div className="rounded-xl bg-gray-150 p-4 shadow-m border-2 flex flex-col space-y-4 w-full max-w-3xl">
            <div className="flex flex-row justify-between items-start space-x-4 w-full p-2">
                <div className="flex-col flex-1 justify-between space-y-4">
                    <h2>Account Holder: {accountAndDetails.account_details[0]?.name || "Unknown"}</h2>
                    <ul className="flex-1 space-y-2">
                        <li className="text-md text-gray-600">Status: {accountAndDetails.status || "Unknown"}</li>
                        <li className="text-md text-gray-600">Currency: {accountAndDetails.currency || "USD"}</li>
                        <li className="text-md text-gray-600">Account Type: {accountAndDetails.account_type || "N/A"}</li>
                        <li className="text-md text-gray-600">Account Sub-Type: {accountAndDetails.account_sub_type || "N/A"}</li>
                        <li className="text-md text-gray-600">Description: {accountAndDetails.description || "No description available"}</li>
                        <li className="text-md text-gray-600">Opening Date: {accountAndDetails.opening_date?.toLocaleDateString() || "N/A"}</li>
                        <li className="text-md text-gray-600">Maturity Date: {accountAndDetails.maturity_date?.toLocaleDateString() || "N/A"}</li>
                        <li className="text-md text-gray-600">Switch Status: {accountAndDetails.switch_status || "N/A"}</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Balance</h3>
                    <p className="text-md text-gray-600">{accountBalances.amount_value || "N/A"}</p>
                </div>
            </div>
        </div>
    );
}
