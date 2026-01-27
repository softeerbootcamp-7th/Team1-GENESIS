import { createFileRoute, redirect, useRouter } from '@tanstack/react-router';

import useAuth from '@/store/auth';

export const Route = createFileRoute('/')({
  // 1. 보안 체크: 로그인 안됐으면 쫓아냄
  beforeLoad: async () => {
    const { isAuthenticated } = useAuth.getState();
    if (isAuthenticated) {
      throw redirect({
        to: '/home', // 파일 이름이 '_app.home.tsx'라도 주소는 '/home'입니다!
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
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Unipocket</div>;
}
