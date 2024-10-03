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