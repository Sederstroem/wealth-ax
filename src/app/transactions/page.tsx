import LatestTransactions from "@/app/ui/accounts/latest-transactions";

export default async function TransactionPage() {
    return(
        <>
            <LatestTransactions accountId={"101"}/>
        </>
    )
}