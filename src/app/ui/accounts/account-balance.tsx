// Get the balance of a specific account.
// Use this data to display a graph in the overall accountcard.
import { balances } from "@/app/lib/placeholder-data";

export default function AccountBalance(
    { accountId }: { accountId: string }
) {
    const accountBalance: number = balances
        .filter((balance) => balance.accountId === accountId)
        .reduce((total, balance) => {
            const value = parseFloat(balance.amount.value);
            return total + (balance.creditDebitIndicator === "Credit" ? value : -value);
        }, 0);
    return (
        <div>
            {accountBalance.toFixed(2)} {balances[0]?.amount.currency}
        </div>
    );
}