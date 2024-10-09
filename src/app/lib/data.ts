import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

interface Balance {
    amount_value: number | null;
    credit_debit_indicator: string | null;
}
export async function fetchAllAccounts() {
    try {
        return await prisma.accounts.findMany();
    } catch (error) {
        console.error('Error: ', error);
        throw new Error('Failed fetching all accounts')
    }
}

export async function fetchTotalBalance() {
    try {
        const data = await prisma.balances.findMany({
            select: {
                credit_debit_indicator: true,
                amount_value: true,
            },
        });
        // Calculating the total balance
        return data.reduce((sum: number, balance: Balance): number => {
            const value = balance.amount_value ? balance.amount_value : 0; // No need for parsing, it's already a Float
            return balance.credit_debit_indicator === 'Credit' ? sum - value : sum + value; // Debit adds, Credit subtracts
        }, 0);
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch total balance');
    }
}
export async function fetchIndividualBalance() {
    try {
        const balances = await prisma.balances.findMany({
            select: {
                account_id: true,
                credit_debit_indicator: true,
                amount_value: true,
                amount_currency: true,
            },
        });
        return balances;
    } catch (error) {
        console.error('Error fetching account balance:', error);
        throw new Error('Failed to fetch account balance');
    }
}
export async function fetchAccountBalance(accountId: string) {
    try {
        const balance = await prisma.balances.findUnique({
            where: {
                account_id: accountId,
            },
            select: {
                credit_debit_indicator: true,
                type: true,
                amount_value: true,
                amount_currency: true,
                date_time: true,
                credit_line_included: true,
                credit_line_amount_value: true,
                credit_line_amount_currency: true,
            },
        });

        if (!balance) {
            throw new Error(`No balance found for account ID: ${accountId}`);
        }

        // Adjust amount_value if it's a credit
        let adjustedAmountValue = balance.amount_value || 0;
        if (balance.credit_debit_indicator === 'Credit') {
            // Make the amount negative if it's credit
            adjustedAmountValue = -adjustedAmountValue;
        }

        return {
            ...balance,
            amount_value: adjustedAmountValue.toFixed(2), // Convert to a string with 2 decimal places if needed
        };
    } catch (error) {
        console.error('Error fetching account balance:', error);
        throw new Error('Failed to fetch account balance');
    }
}


export async function fetchAccountServices(accountId: string) {
    return prisma.servicers.findUnique({
        where: { account_id: accountId }, // Correctly specify account_id
        select: {
            scheme_name: true,
            identification: true,
        },
    });
}

export async function fetchAccountTransaction(accountId: string) {
    return prisma.transactions.findMany({
        where: {
            account_id: accountId
        },
        select: {
            transaction_id: true,
            credit_debit_indicator: true,
            status: true,
            booking_datetime: true,
            amount_value: true,
            amount_currency: true,
        },
    });
}
export async function fetchAccountAndDetails(accountId: string) {
    const account = await prisma.accounts.findUnique({
        where: {
            id: accountId, // Ensure you're using the correct field for lookup
        },
        select: {
            id: true,
            status: true,
            currency: true,
            account_type: true,
            account_sub_type: true,
            description: true,
            nickname: true,
            opening_date: true,
            maturity_date: true,
            switch_status: true,
            account_details: {
                select: {
                    scheme_name: true,
                    identification: true,
                    name: true,
                    secondary_identification: true,
                },
            },
        },
    });

    if (!account) {
        throw new Error(`No account found for ID: ${accountId}`);
    }

    return account;
}
export async function fetchEveryTransaction() {
    try {
        const allTransactions = await prisma.transactions.findMany({
            include: {
                accounts: true, // This will fetch the associated accounts for each transaction
            },
        });
        return allTransactions; // Return the fetched transactions
    } catch (error) {
        console.error("Error fetching transactions:", error);
        throw error; // Rethrow the error after logging it
    }
}

