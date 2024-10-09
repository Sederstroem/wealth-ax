import { fetchAccountBalance, fetchTotalBalance } from "@/app/lib/data";

export async function AccountBalance({ accountId }: { accountId: string }) {
    let accountBalance: number = 0; // Initialize the account balance
    let currency: string = "USD"; // Default currency
    let errorMessage: string = ""; // Initialize error message

    try {
        const { amount_value, amount_currency } = await fetchAccountBalance(accountId); // Destructure the returned balance object

        // Ensure amount_value is a valid number
        accountBalance = parseFloat(amount_value) || 0;
        currency = amount_currency || "USD"; // Use the currency from the balance or default to USD
    } catch (error: unknown) {
        // Handle error appropriately
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
    const balances: number = await fetchTotalBalance();
    return (
        <div>
            {balances}
        </div>
    );
}
