import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

import type { AccountBookMeta } from '@/types/accountBook';

import { TEST_DATA } from './mock';

interface AccountBookState {
  accountBook: AccountBookMeta | null;

  setAccountBook: (data: AccountBookMeta) => void;
  updateAccountBook: (updateField: Partial<AccountBookMeta>) => void;
  clearAccountBook: () => void;
}

export const useAccountBookStore = create<AccountBookState>()(
  devtools(
    persist(
      (set) => ({
        // TODO: API 연동 전까지 목업 데이터로 사용, 연동 시 해당 부분 null으로 변경
        accountBook: TEST_DATA,

        setAccountBook: (data) => set({ accountBook: data }),

        updateAccountBook: (updateField) =>
          set((state) => ({
            accountBook: state.accountBook
              ? { ...state.accountBook, ...updateField }
              : null,
          })),

        clearAccountBook: () => set({ accountBook: null }),
      }),
      {
        name: 'account-book', // sessionStorage key name
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    { name: 'AccountBookStore' }, // devtools name
  ),
);
