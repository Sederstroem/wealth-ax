import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

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
        return data.reduce((sum, balance) => {
            const value = balance.amount_value ? parseFloat(balance.amount_value.toString()) : 0; // Handle Decimal type
            return balance.credit_debit_indicator === 'Credit' ? sum - value : sum + value; // Debit adds, Credit subtracts
        }, 0);
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Failed to fetch total balance');
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
        let adjustedAmountValue = balance.amount_value?.toString() || '0';
        if (balance.credit_debit_indicator === 'Credit') {
            // Make the amount negative if it's credit
            adjustedAmountValue = (-parseFloat(adjustedAmountValue)).toFixed(2);
        }

        return {
            ...balance,
            amount_value: adjustedAmountValue,
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

