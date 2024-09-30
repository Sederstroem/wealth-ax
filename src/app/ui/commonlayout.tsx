// Layout components that is specific for the account endpoint.

import React from "react";
import TopNav from "@/app/ui/accounts/topnav";

export default function CommonLayout({ children }: { children: React.ReactNode }) {
    return(
        <div>
            <div>
                <TopNav/>
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}