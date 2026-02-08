export const ENDPOINTS = {
  ACCOUNT_BOOKS: {
    create: 'account-books',

    byId: (accountBookId: number | string) => `account-books/${accountBookId}`,

    EXPENSES: {
      manual: (accountBookId: number | string) =>
        `account-books/${accountBookId}/expenses/manual`,
    },
  },
} as const;
