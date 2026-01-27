import { useState } from 'react';

import Dropdown from '@/components/common/dropdown/Dropdown';

import { Icons } from '@/assets';
import ProfileImage from '@/assets/images/profile.png';

import Button from './Button';

const Header = () => {
  const [selected, setSelected] = useState<string | null>(null);

  // @TODO: 추후 options API 연동
  const options = [
    { id: '1', name: '미국 교환학생' },
    { id: '2', name: '2025 캐나다' },
    { id: '3', name: '독일 교환학생' },
  ];

  return (
    <div className="flex justify-between px-8 py-3 sticky top-0 bg-background-alternative z-10 border-b border-line-solid-normal">
      <Dropdown
        selected={selected}
        onSelect={setSelected}
        options={options}
      />
      <div className="flex gap-5 items-center">
        <div className="flex items-center gap-2">
          <span className="label2-medium text-label-neutral">오전 09:05</span>
          <Icons.Refresh className="w-4 h-4 text-label-neutral" />
        </div>
        <Button>모바일</Button>
        <img
          src={ProfileImage}
          alt="프로필 이미지"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
