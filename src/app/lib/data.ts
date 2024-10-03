// import { sql } from '@vercel/postgres'
// import {
//     Balance, Account
// } from "@/app/lib/object-definitions";
// // import {calculateTotalBalance} from "@/app/lib/utils";
//
// export async function fetchAllAccounts() {
//     try {
//         const data = await sql<Account>`SELECT * from accounts`;
//         return data.rows;
//     } catch (error) {
//         console.error('Database Error:', error);
//         throw new Error('Failed to fetch accounts.');
//     }
// }
//
// // TODO Fix this!!!!!!!!
// // export async function fetchTotalBalance() {
// //     try {
// //         const data = await sql<Balance>`SELECT credit_debit_indicator, amount_value from balances`;
// //         console.log("This is the data object: ", data);
// //         const totalBalance = 0;
// //         for (let i: number = 0; i < data.rowCount; i++) {
// //             if (data.rows.credit_debit_indicator === 'Debit') {
// //                 return totalBalance + data.amount_value;
// //             } else if (data.rows.credit_debit_indicator === 'Credit') {
// //                 return totalBalance - data.amount_value;
// //             }
// //         }
// //         return totalBalance;
// //
// //         // const totalBalance = data.rows.reduce((sum, balance) => {
// //         //     const amount = parseFloat(balance.amount.value);
// //         //
// //         //     // Add if Debit, subtract if Credit
// //         //     if (balance.creditDebitIndicator === 'Debit') {
// //         //         return sum + amount;
// //         //     } else if (balance.creditDebitIndicator === 'Credit') {
// //         //         return sum - amount;
// //         //     }
// //         //     return sum;
// //         // }, 0);  // Start the sum at 0
// //         //
// //         // return totalBalance;
// //     } catch (error) {
// //         console.error('Database Error:', error);
// //         throw new Error('Failed to fetch total balance.');
// //     }
// // }
// // // Continue with this, fetch the five last transactions.
// // export async function fetchLatestTransactions() {
// //     try {
// //         const data = await sql<Transaction>`
// //             SELECT account_id, credit_debit_indicator, amount_value, amount_currency FROM `
// //     }
// // }
// export async function fetchIndividualBalance(accountId: string): Promise<Balance[]> {
//     try {
//         const data = await sql<Balance>`
//             SELECT credit_debit_indicator, amount_value, amount_currency
//             FROM balances
//             WHERE account_id = ${accountId}`;
//         return data.rows;
//     } catch (error) {
//         console.error('Error fetching individual balance:', error);
//         throw new Error('Failed to fetch balance');
//     }
// }
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export async function fetchAllAccounts() {
    try {
        return await prisma.accounts.findMany();
    } catch (error) {
        console.error('Error: ', error);
        throw new Error('Failed fetching all accounts')
    }
}
export async function fetchIndividualBalance(accountId: string) {
    try {
        return await prisma.balances.findMany({
            where: {
                account_id: accountId,
            },
            select: {
                credit_debit_indicator: true,
                amount_value: true,
                amount_currency: true,
            },
        });
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch individual balance');
    }
}