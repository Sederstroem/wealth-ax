// Defining the returned objects from API calls in this file
interface User {
    id: string,
    name: string,
    email: string
}
// ISO 8601 string all these I can convert to a Date object if i need to.
// Keeping them as strings for now.
interface Account {
    accountId: string;
    status: 'Open' | 'Inactive' | 'Dormant' | 'Closed';
    statusUpdateDateTime: string; // ISO 8601 string
    currency: string;
    accountType: string;
    accountSubType: string;
    description: string;
    nickname: string;
    openingDate: string; // ISO 8601 string
    maturityDate: string | null; // ISO 8601 string
    switchStatus: string;
    accountDetails: {
        schemeName: string;
        identification: string;
        name: string;
        secondaryIdentification: string;
    }[];
    servicer: {
        schemeName: string;
        identification: string;
    };
}
interface Transaction {
    accountId: string;
    transactionId: string;
    creditDebitIndicator: "Credit" | "Debit"; // Two possible options
    status: string;
    bookingDateTime: string; // ISO 8601 format
    amount: {
        value: string; // e.g., "100.00"
        currency: string; // e.g., "Euro"
    };
}

interface Balance {
    accountId: string;
    creditDebitIndicator: "Credit" | "Debit";
    type: string; // e.g., "ClosingAvailable"
    amount: {
        value: string; // e.g., "1000.00"
        currency: string; // e.g., "USD"
    };
    dateTime: string; // ISO 8601 format
    creditLine: {
        included: boolean;
        amount: {
            value: string;
            currency: string;
        }
    }
}


export { Account, User, Transaction, Balance }