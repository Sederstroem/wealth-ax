import IndividualAccountInfo from "@/app/ui/accounts/account-individual-info";

export default function AccountIdPage({ params }: { params: { accountId: string } }) {
    const { accountId }: string = params;
    return (
        <>
            <div className="flex flex-row justify-between pl-2 pr-2">
                <h1 className="mb-4 text-xl md:text-3xl">Account Details</h1>
                {/*<Form />*/}
            </div>
            <div className="flex flex-wrap gap-6 w-full"> {/* Adjusted grid columns for rows */}
                <IndividualAccountInfo accountId={accountId} />
            </div>
        </>
    )
}