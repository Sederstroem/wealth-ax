// Layout components that is specific for the account endpoint.

import React from "react";
import TopNav from "@/app/ui/accounts/topnav";

export default function CommonLayout({ children }: { children: React.ReactNode }) {
    return(
        <>
            <div>
                <TopNav/>
            </div>
            <main className="max-w-screen-lg mx-auto p-4 md:p-12"> {/* Use <main> for primary content */}
                {children}
            </main>        </>
    )
}