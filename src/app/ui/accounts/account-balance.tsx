// Get the balance of a specific account.
// Use this when displaying account overview.

import { fetchAccountBalance, fetchTotalBalance } from "@/app/lib/data";

export async function AccountBalance({ accountId }: { accountId: string }) {
    let accountBalance: number = 0;
    let currency: string = "USD";
    let errorMessage: string = "";

    try {
        const balance = await fetchAccountBalance(accountId); // Fetching a single balance object

        // Check if balance object is valid
        if (balance) {
            const value: number = balance.amount_value ? parseFloat(balance.amount_value.toString()) : 0;

            // Adjust balance based on credit/debit indicator
            accountBalance = balance.credit_debit_indicator === "Credit" ? -value : value;
            currency = balance.amount_currency || "USD"; // Default to USD if no currency is found
        } else {
            throw new Error("No balance data available.");
        }
    } catch (error: unknown) {
        // Ensure error is an instance of Error before accessing its message
        if (error instanceof Error) {
            errorMessage = `Error fetching balance: ${error.message}`;
        } else {
            errorMessage = "An unknown error occurred.";
        }
    }

    return (
        <div>
            {errorMessage ? (
                <div>{errorMessage}</div>
            ) : (
                <div>
                    {accountBalance.toFixed(2)} {currency}
                </div>
            )}
        </div>
    );
}

export async function TotalAccountBalances() {
    const balances = await fetchTotalBalance();
    return (
        <div>
            {balances}
        </div>
    );
}