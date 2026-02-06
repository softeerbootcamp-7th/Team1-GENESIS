import Button from '@/components/common/Button';
import { DataTable } from '@/components/common/data-table/DataTable';
import DataTableCellEditor from '@/components/common/data-table/DataTableCellEditor';
import DataTableProvider from '@/components/common/data-table/DataTableProvider';
import SelectionActionProvider from '@/components/common/data-table/SelectionActionProvider';
import Divider from '@/components/common/Divider';
import { columns } from '@/components/home-page/columns';
import ExpenseCard from '@/components/home-page/ExpenseCard';
import { type Expense, getData } from '@/components/landing-page/dummy';

const Homepage = () => {
  const data = getData();
  return (
    <div className="flex h-full flex-col overflow-y-auto px-30 pt-8">
      <div className="mb-10 flex items-end gap-4">
        <ExpenseCard
          label="총 지출"
          baseCountryCode="KR"
          baseCountryAmount={1402432}
          localCountryCode="US"
          localCountryAmount={12232}
        />
        <Divider style="vertical" className="h-15" />
        <ExpenseCard
          label="이번 달 지출"
          baseCountryCode="KR"
          baseCountryAmount={200342}
          localCountryCode="US"
          localCountryAmount={12232}
        />
        <div className="flex-1" />
        <Button variant="outlined" size="md">
          위젯 편집하기
        </Button>
      </div>
      <div className="border-label-alternative mb-5 flex items-center justify-center rounded-lg border border-dashed">
        <span className="flex h-70 items-center justify-center">
          Widget area
        </span>
      </div>
      <div className="bg-background-normal rounded-2xl px-2 py-4 shadow">
        {/* <Icons.ChevronBack className="text-label-alternative absolute left-1/2 z-50 size-12 -translate-x-1/2 rotate-90" /> */}
        <DataTableProvider columns={columns} data={data}>
          <DataTable
            groupBy={(row: Expense) =>
              new Date(row.date).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })
            }
          />
          <DataTableCellEditor />
          <SelectionActionProvider />
        </DataTableProvider>
      </div>
    </div>
  );
};

export default Homepage;
