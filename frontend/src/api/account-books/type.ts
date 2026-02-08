import { type CountryCode } from '@/data/countryCode';

// [POST] 가계부 생성
export interface CreateAccountBookRequest {
  localCountryCode: CountryCode;
  startDate: string;
  endDate: string;
}

export interface AccountBookResponse {
  id: number;
  title: string;
  localCountryCode: CountryCode;
  baseCountryCode: CountryCode;
  budget: number | null;
  startDate: string;
  endDate: string;
}

// [POST] 지출 수기 입력
export interface CreateManualExpenseRequest {
  merchantName: string;
  categoryCode: number;
  paymentMethod?: string;
  occurredAt: string;
  localAmount: number;
  localCurrency: string;
  standardAmount: number;
  standardCurrency: string;
  memo?: string;
}
