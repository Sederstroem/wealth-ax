// Layout components that is specific for the account endpoint.

import CommonLayout from "@/app/ui/commonlayout";
import React from "react";

export default function BalancesLayout({ children }: { children: React.ReactNode }) {
    return <CommonLayout>{children}</CommonLayout>;
}