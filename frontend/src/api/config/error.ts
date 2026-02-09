import { getDefaultErrorMessage } from './constants';

export class ApiError extends Error {
  status: number;
  constructor({ message, status }: { message?: string; status: number }) {
    super(message || getDefaultErrorMessage(status));
    this.name = 'ApiError';
    this.status = status;
  }
}
