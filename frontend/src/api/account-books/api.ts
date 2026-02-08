import {
  type AccountBookResponse,
  type CreateAccountBookRequest,
  type CreateManualExpenseRequest,
} from '@/api/account-books/type';
import { customFetch } from '@/api/config/client';
import { ENDPOINTS } from '@/api/config/endpoint';

export const createAccountBook = (
  data: CreateAccountBookRequest,
): Promise<AccountBookResponse> => {
  return customFetch(ENDPOINTS.ACCOUNT_BOOKS.create, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const createManualExpense = (
  accountBookId: number | string,
  data: CreateManualExpenseRequest,
) => {
  return customFetch(ENDPOINTS.ACCOUNT_BOOKS.EXPENSES.manual(accountBookId), {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
