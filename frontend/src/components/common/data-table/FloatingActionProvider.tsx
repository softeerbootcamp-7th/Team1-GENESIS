import { Icons } from '@/assets';

import { useDataTable } from './context';

const Divider = () => <div className="bg-line-solid-normal/30 h-6 w-px" />;

const FloatingActionProvider = () => {
  const { table, tableState, dispatch } = useDataTable();
  const selectedRows = table.getFilteredSelectedRowModel().rows;

  if (tableState.floatingBarVariant === 'NONE') return null;

  return (
    <div className="bg-inverse-background text-inverse-label body2-normal-bold fixed bottom-30 left-1/2 w-[450px] -translate-x-1/2 truncate rounded-xl p-3 px-3.5 shadow-2xl">
      {tableState.floatingBarVariant === 'MANAGEMENT' ? (
        // 1번 바: 카테고리/결제수단/여행/숨김
        <div className="flex items-center gap-4">
          <span className="mr-auto">{selectedRows.length}개 선택됨</span>
          <button
            onClick={() => {
              /* 카테고리 변경 로직 */
            }}
          >
            카테고리
          </button>
          <Divider />
          <button
            onClick={() => {
              /* 결제수단 변경 로직 */
            }}
          >
            결제수단
          </button>
          <Divider />
          <button
            onClick={() => {
              /* 결제수단 변경 로직 */
            }}
          >
            여행
          </button>
          <Divider />
          <button className="text-status-negative">삭제</button>
          <Divider />
          <Icons.Close height={10} width={10} />
        </div>
      ) : (
        // 2번 바: 현재 가계부에 추가하기
        <div className="flex gap-4">
          <span>{selectedRows.length}개 선택됨</span>
          <button
            onClick={() =>
              dispatch({ type: 'SET_BAR_VARIANT', payload: 'ADD_TO_LEDGER' })
            }
          >
            가계부에 추가하기
          </button>
        </div>
      )}
    </div>
  );
};

export default FloatingActionProvider;
