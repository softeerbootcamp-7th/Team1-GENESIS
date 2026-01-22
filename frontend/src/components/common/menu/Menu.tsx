import { useNavigate, useRouterState } from '@tanstack/react-router';

import MenuItem from '@/components/common/menu/MenuItem';

import { Icons } from '@/assets';

const Menu = () => {
  const navigate = useNavigate();
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  return (
    <div className="border-line-normal-normal bg-background-normal flex h-screen w-16 flex-col items-center gap-9 border-r px-4 py-3">
      <Icons.Logo
        className="h-8 w-8 cursor-pointer"
        onClick={() => navigate({ to: '/home' })}
      />

      <div className="flex flex-col gap-6">
        <MenuItem
          logo={<Icons.Home className="h-5 w-5" />}
          label="홈"
          active={pathname === '/home'}
          onClick={() => navigate({ to: '/home' })}
        />
        <MenuItem
          logo={<Icons.Travel className="h-5 w-5" />}
          label="여행"
          active={pathname === '/travel'}
          onClick={() => navigate({ to: '/travel' })}
        />
        <MenuItem
          logo={<Icons.Analytics className="h-5 w-5" />}
          label="분석"
          active={pathname === '/analytics'}
          onClick={() => navigate({ to: '/analytics' })}
        />
      </div>
    </div>
  );
};

export default Menu;
