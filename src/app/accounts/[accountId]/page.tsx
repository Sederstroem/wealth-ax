import IndividualAccountInfo from "@/app/ui/accounts/account-individual-info";

export default function AccountIdPage({ params }: { params: { accountId: string } }) {
    const { accountId } = params;
    return (
        <>
            <IndividualAccountInfo accountId={accountId} />
        </>
    )
}