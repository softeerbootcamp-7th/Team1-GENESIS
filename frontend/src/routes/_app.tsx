import {
  createFileRoute,
  Outlet,
  redirect,
  useRouter,
} from '@tanstack/react-router';

import Menu from '@/components/common/menu/Menu';

import useAuth from '@/store/auth';

export const Route = createFileRoute('/_app')({
  // 1. 보안 체크: 로그인 안됐으면 쫓아냄
  beforeLoad: async ({ location }) => {
    const { isAuthenticated } = useAuth.getState();
    if (!isAuthenticated) {
      throw redirect({
        to: '/login',
        search: { redirect: location.href },
      });
    }
  },
  // 2. 로딩 안전망: 하위 페이지 로딩 시 보여줄 스피너
  pendingComponent: () => (
    <div className="flex h-64 items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-t-2 border-blue-500" />
    </div>
  ),
  // 3. 에러 안전망: 하위 페이지에서 에러 발생 시 처리
  errorComponent: ({ error, reset }) => {
    return (
      <div className="m-4 rounded border border-red-200 bg-red-50 p-4">
        <h2 className="font-bold text-red-800">오류가 발생했습니다</h2>
        <p className="mb-4 text-red-600">{error.message}</p>
        <button
          onClick={() => {
            const router = useRouter();
            reset();
            router.invalidate();
          }}
          className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          다시 시도
        </button>
      </div>
    );
  },
  component: AppLayout,
});

function AppLayout() {
  return (
    <div className="flex">
      <Menu />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
