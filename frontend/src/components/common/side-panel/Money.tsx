import { useState } from 'react';

import Divider from '@/components/common/Divider';
import TextInput from '@/components/common/TextInput';

import { Icons } from '@/assets';

import DropDown from '../dropdown/Dropdown';

interface CurrencyOption {
  id: number;
  name: string;
}

const currencyOptions: CurrencyOption[] = [
  { id: 1, name: 'USD' },
  { id: 2, name: 'KRW' },
  { id: 3, name: 'JPY' },
  { id: 4, name: 'EUR' },
];

const Money = () => {
  const [localCurrency, setLocalCurrency] = useState<string>('');
  const [baseCurrency, setBaseCurrency] = useState<string>('');
  const [localCurrencyType, setLocalCurrencyType] = useState<number | null>(1);

  return (
    <div className="flex w-90 flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <p className="headline2-bold text-label-normal h-8">금액</p>
        <p className="body2-normal-medium text-label-alternative whitespace-pre-line">
          {'현지 금액이나 기준 금액 중 하나만 입력하면\n자동으로 환산돼요.'}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-4">
          <TextInput
            title="현지 금액"
            value={localCurrency}
            placeholder="0"
            onChange={setLocalCurrency}
            className="w-61"
          />
          <div className="iterms-stretch mt-auto flex h-9 w-20">
            <DropDown
              selected={localCurrencyType}
              onSelect={setLocalCurrencyType}
              options={currencyOptions}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="px-5">
            <Divider style="vertical" className="h-3" />
          </div>

          <div className="flex h-11 items-center gap-2.5 pl-3.25">
            <Icons.Swap className="text-label-neutral h-4 w-4" />
            <div className="flex flex-col gap-1">
              <p className="label1-normal-medium text-label-normal">
                USD 1 = KRW 1,464
              </p>
              <p className="label1-normal-medium text-label-alternative">
                자동 환율 적용 중 (2025.12.02. 13:26 기준)
              </p>
            </div>
          </div>

          <div className="px-5">
            <Divider style="vertical" className="h-3" />
          </div>
        </div>
        <div className="flex gap-4">
          <TextInput
            title="기준 금액"
            value={baseCurrency}
            placeholder="0"
            onChange={setBaseCurrency}
            className="w-61"
          />
          <p className="body2-normal-medium text-label-assistive mt-auto ml-2.75 flex h-9 w-20 items-stretch">
            KRW
          </p>
        </div>
      </div>
    </div>
  );
};

export default Money;
