// Get the balance of a specific account.
// Use this when displaying account overview.

import { fetchIndividualBalance, fetchTotalBalance } from "@/app/lib/data";

export async function AccountBalance({accountId}: { accountId: string }) {
    let accountBalance: number = 0;
    let currency: string = "USD";
    let errorMessage: string = "";

    try {
        const balances = await fetchIndividualBalance(accountId);

        // Check if balances is an array and has elements
        if (Array.isArray(balances) && balances.length > 0) {
            // Calculate total balance
            accountBalance = balances.reduce((total, balance) => {
                const value: number = balance.amount_value ? parseFloat(balance.amount_value.toString()) : 0;
                return total + (balance.credit_debit_indicator === "Credit" ? -value : value);
            }, 0);

            currency = balances[0]?.amount_currency || "USD"; // Default to USD if no currency is found
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
        // errorMessage = `Error fetching balance: ${error.message}`;
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