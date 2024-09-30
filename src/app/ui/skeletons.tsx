// Keep loading components here. Use this as fallbacks to Suspense
// function for instance when fetching data
// Example:

const shimmer: string =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';
// Need to somehow make this load as many accountskeletons as there are accounts.
// Just do one account for now and make it match the structure of that.
// TODO fix the structure of the skelton components. NOT PERFECT!
export function AccountPreviewCardSkeleton() {
    return (
        <div className="flex flex-col space-y-6 w-full">
            {/* Simulating multiple accounts, for now, repeat three AccountDetailsSkeletons */}
            {[1, 2, 3].map((_, index) => (
                <AccountDetailsSkeleton key={index} />
            ))}
        </div>
    );
}

function AccountDetailsSkeleton() {
    return (
        <div className={`${shimmer} rounded-xl bg-gray-100 p-4 shadow-md border-2 flex flex-col space-y-4 w-full`}>
            {/* Account Section */}
            <div className="flex flex-col space-y-4">
                <h1 className="h-6 w-1/3 bg-gray-200 rounded"></h1>
                <ul className="space-y-2">
                    <li className="h-4 w-1/2 bg-gray-200 rounded"></li>
                    <li className="h-4 w-1/4 bg-gray-200 rounded"></li>
                    <li className="h-4 w-1/3 bg-gray-200 rounded"></li>
                </ul>
            </div>

            {/* Balance Section */}
            <div className="flex flex-col space-y-4">
                <AccountBalanceSkeleton />
            </div>

            {/* Latest Transactions Section */}
            <div className="flex flex-col space-y-4">
                <h1 className="h-6 w-1/3 bg-gray-200 rounded"></h1>
                <LatestTransactionSkeleton />
            </div>
        </div>
    );
}
function LatestTransactionSkeleton() {
    return (
        <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, index) => (
                <TransactionSkeleton key={index} />
            ))}
        </div>
    );
}

function TransactionSkeleton() {
    return (
        <div className="flex justify-between m-2 p-2 rounded-lg bg-gray-200 animate-pulse">
            <div>
                <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
            </div>
            <div className="flex flex-col items-end">
                <div className="h-4 w-20 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 w-10 bg-gray-300 rounded"></div>
            </div>
        </div>
    );
}
function AccountBalanceSkeleton() {
    return (
        <>
            <h1 className="h-6 w-1/3 bg-gray-200 rounded"></h1>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
        </>
    )
}

