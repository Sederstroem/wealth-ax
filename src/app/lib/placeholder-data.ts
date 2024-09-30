export const accounts = [
    {
        id: '101',
        status: 'Open',
        statusUpdateDateTime: '2023-08-10T10:15:00Z',
        currency: 'USD',
        accountType: 'Personal',
        accountSubType: 'Savings',
        description: 'Personal savings account',
        nickname: 'Vacation Savings',
        openingDate: '2020-05-15T09:00:00Z',
        maturityDate: null,
        switchStatus: 'NotSwitched',
        accountDetails: [
            {
                schemeName: 'IBAN',
                identification: 'US211234560000101',
                name: 'Alice Johnson',
                secondaryIdentification: '56789123',
            },
        ],
        servicer: {
            schemeName: 'BIC',
            identification: 'BOFAUS3N',
        },
    },
    {
        id: '102',
        status: 'Dormant',
        statusUpdateDateTime: '2023-07-24T12:20:00Z',
        currency: 'EUR',
        accountType: 'Business',
        accountSubType: 'CurrentAccount',
        description: 'Business checking account',
        nickname: 'Main Business',
        openingDate: '2021-11-10T11:30:00Z',
        maturityDate: null,
        switchStatus: 'NotSwitched',
        accountDetails: [
            {
                schemeName: 'IBAN',
                identification: 'FI211234560000102',
                name: 'Tech Solutions Ltd.',
                secondaryIdentification: '0012345678',
            },
        ],
        servicer: {
            schemeName: 'BIC',
            identification: 'NDEAFIHH',
        },
    },
    {
        id: '103',
        status: 'Closed',
        statusUpdateDateTime: '2022-01-15T08:00:00Z',
        currency: 'GBP',
        accountType: 'Personal',
        accountSubType: 'CurrentAccount',
        description: 'Closed checking account',
        nickname: 'Old Checking',
        openingDate: '2015-04-20T10:15:00Z',
        maturityDate: '2021-12-31T00:00:00Z',
        switchStatus: 'Switched',
        accountDetails: [
            {
                schemeName: 'IBAN',
                identification: 'GB211234560000103',
                name: 'Bob Harris',
                secondaryIdentification: '123456789',
            },
        ],
        servicer: {
            schemeName: 'BIC',
            identification: 'HBUKGB4B',
        },
    },
    {
        id: '104',
        status: 'Open',
        statusUpdateDateTime: '2023-09-15T10:30:00Z',
        currency: 'AUD',
        accountType: 'Personal',
        accountSubType: 'Checking',
        description: 'Everyday spending account',
        nickname: 'Daily Expenses',
        openingDate: '2021-03-01T08:00:00Z',
        maturityDate: null,
        switchStatus: 'NotSwitched',
        accountDetails: [
            {
                schemeName: 'IBAN',
                identification: 'AU201234560000104',
                name: 'Catherine Smith',
                secondaryIdentification: '00112233',
            },
        ],
        servicer: {
            schemeName: 'BIC',
            identification: 'NABAAU2S',
        },
    },
    {
        id: '105',
        status: 'Open',
        statusUpdateDateTime: '2023-09-20T11:00:00Z',
        currency: 'CAD',
        accountType: 'Business',
        accountSubType: 'Savings',
        description: 'Business savings account',
        nickname: 'Emergency Fund',
        openingDate: '2022-01-10T12:00:00Z',
        maturityDate: null,
        switchStatus: 'NotSwitched',
        accountDetails: [
            {
                schemeName: 'IBAN',
                identification: 'CA211234560000105',
                name: 'Innovate Corp.',
                secondaryIdentification: '0012345679',
            },
        ],
        servicer: {
            schemeName: 'BIC',
            identification: 'CIBCAGCN',
        },
    },
    {
        id: '106',
        status: 'Closed',
        statusUpdateDateTime: '2023-08-05T14:20:00Z',
        currency: 'JPY',
        accountType: 'Personal',
        accountSubType: 'Investment',
        description: 'Investment account',
        nickname: 'Retirement Savings',
        openingDate: '2018-06-15T10:45:00Z',
        maturityDate: '2023-08-30T00:00:00Z',
        switchStatus: 'Switched',
        accountDetails: [
            {
                schemeName: 'IBAN',
                identification: 'JP211234560000106',
                name: 'David Tanaka',
                secondaryIdentification: '1234567890',
            },
        ],
        servicer: {
            schemeName: 'BIC',
            identification: 'JPSTJPJT',
        },
    }

];
export const transactions = [
    {
        accountId: '101',
        transactionId: 'T001',
        creditDebitIndicator: 'Debit',
        status: 'Completed',
        bookingDateTime: '2023-09-01T14:30:00Z',
        amount: {
            value: '150.00',
            currency: 'USD',
        },
    },
    {
        accountId: '101',
        transactionId: 'T002',
        creditDebitIndicator: 'Credit',
        status: 'Completed',
        bookingDateTime: '2023-09-02T09:15:00Z',
        amount: {
            value: '250.00',
            currency: 'USD',
        },
    },
    {
        accountId: '101',
        transactionId: 'T003',
        creditDebitIndicator: 'Debit',
        status: 'Pending',
        bookingDateTime: '2023-09-03T16:45:00Z',
        amount: {
            value: '75.50',
            currency: 'USD',
        },
    },
    {
        accountId: '101',
        transactionId: 'T004',
        creditDebitIndicator: 'Credit',
        status: 'Completed',
        bookingDateTime: '2023-09-04T11:00:00Z',
        amount: {
            value: '500.00',
            currency: 'USD',
        },
    },
    {
        accountId: '101',
        transactionId: 'T005',
        creditDebitIndicator: 'Debit',
        status: 'Failed',
        bookingDateTime: '2023-09-05T13:20:00Z',
        amount: {
            value: '300.00',
            currency: 'USD',
        },
    },
    {
        accountId: '103',
        transactionId: 'T005',
        creditDebitIndicator: 'Debit',
        status: 'Failed',
        bookingDateTime: '2023-09-05T13:20:00Z',
        amount: {
            value: '300.00',
            currency: 'USD',
        },
    },
    {
        accountId: '104',
        transactionId: 'T006',
        creditDebitIndicator: 'Debit',
        status: 'Completed',
        bookingDateTime: '2023-09-15T14:00:00Z',
        amount: {
            value: '120.00',
            currency: 'AUD',
        },
    },
    {
        accountId: '104',
        transactionId: 'T007',
        creditDebitIndicator: 'Credit',
        status: 'Completed',
        bookingDateTime: '2023-09-16T09:30:00Z',
        amount: {
            value: '450.00',
            currency: 'AUD',
        },
    },
    {
        accountId: '105',
        transactionId: 'T008',
        creditDebitIndicator: 'Debit',
        status: 'Pending',
        bookingDateTime: '2023-09-18T10:45:00Z',
        amount: {
            value: '350.00',
            currency: 'CAD',
        },
    },
    {
        accountId: '105',
        transactionId: 'T009',
        creditDebitIndicator: 'Credit',
        status: 'Completed',
        bookingDateTime: '2023-09-19T11:15:00Z',
        amount: {
            value: '200.00',
            currency: 'CAD',
        },
    },
    {
        accountId: '106',
        transactionId: 'T010',
        creditDebitIndicator: 'Debit',
        status: 'Failed',
        bookingDateTime: '2023-09-20T15:30:00Z',
        amount: {
            value: '1000.00',
            currency: 'JPY',
        },
    }
];
export const balances = [
    {
        accountId: '101',
        creditDebitIndicator: 'Credit',
        type: 'ClosingAvailable',
        amount: {
            value: '850.00',
            currency: 'USD',
        },
        dateTime: '2023-09-06T10:00:00Z',
        creditLine: {
            included: false,
            amount: {
                value: '0.00',
                currency: 'USD',
            },
        },
    },
    {
        accountId: '102',
        creditDebitIndicator: 'Credit',
        type: 'ClosingAvailable',
        amount: {
            value: '1,200.00',
            currency: 'USD',
        },
        dateTime: '2023-09-06T10:00:00Z',
        creditLine: {
            included: true,
            amount: {
                value: '500.00',
                currency: 'USD',
            },
        },
    },
    {
        accountId: '103',
        creditDebitIndicator: 'Debit',
        type: 'ClosingAvailable',
        amount: {
            value: '500.00',
            currency: 'USD',
        },
        dateTime: '2023-09-06T10:00:00Z',
        creditLine: {
            included: false,
            amount: {
                value: '0.00',
                currency: 'USD',
            },
        },
    },
    {
        accountId: '104',
        creditDebitIndicator: 'Credit',
        type: 'ClosingAvailable',
        amount: {
            value: '2,000.00',
            currency: 'USD',
        },
        dateTime: '2023-09-06T10:00:00Z',
        creditLine: {
            included: true,
            amount: {
                value: '1,000.00',
                currency: 'USD',
            },
        },
    },
    {
        accountId: '105',
        creditDebitIndicator: 'Credit',
        type: 'ClosingAvailable',
        amount: {
            value: '300.00',
            currency: 'USD',
        },
        dateTime: '2023-09-06T10:00:00Z',
        creditLine: {
            included: true,
            amount: {
                value: '100.00',
                currency: 'USD',
            },
        },
    },
];




