// Implementing streaming when fetching accounts
// This loading file is built on top of the method Suspense.
// Allows fallback UI as replacement when page contents load
// When importing and using skeletons here it will be applied to everything
// below accounts like /accounts/balances and /accounts/transactions
import { AccountPreviewCardSkeleton } from "@/app/ui/skeletons";

export default function Loading() {
    return(
        <div>
            <AccountPreviewCardSkeleton/>
        </div>
    )
}