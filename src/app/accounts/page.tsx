import AccountPreviewCard from "@/app/ui/accounts/accounts-table";
import { Suspense } from "react";
import { AccountPreviewCardSkeleton } from "@/app/ui/skeletons";
// import Form from "@/app/components/form";

export default async function AccountsPage() {
    return (
        <main className="flex flex-col justify-start p-4 max-w-screen-lg mx-auto">
            <div className="flex flex-row justify-between pl-2 pr-2">
                <h1 className="mb-4 text-xl md:text-3xl">Account Overview</h1>
                {/*<Form />*/}
            </div>
            <div className="flex flex-wrap gap-6 w-full"> {/* Adjusted grid columns for rows */}
                <Suspense fallback={<AccountPreviewCardSkeleton />}>
                    <AccountPreviewCard />
                </Suspense>
            </div>
        </main>
    );
}

