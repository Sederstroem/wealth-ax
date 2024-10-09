import BalancePieChart from "@/app/components/piechartexample";
export default async function BalancePage() {
    return(
        <>
            <div className="flex flex-row justify-between pl-2 pr-2">
                <h1 className="mb-4 text-xl md:text-3xl">Balances Overview</h1>
                {/*<Form />*/}
            </div>
            <div className="flex-wrap gap-6 w-full">
                <div className="rounded-xl bg-gray-150 p-4 shadow-m border-2 space-y-4 w-full max-w-3xl">
                    <BalancePieChart/>
                </div>
            </div>
        </>
    )
}