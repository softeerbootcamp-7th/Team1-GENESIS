import { columns } from "./payments/columns";
import { DataTable } from "./components/data-table/DataTable";
import { getData } from "./payments/page";
import DataTableProvider from "./components/data-table/DataTableProvider";
import FloatingActionProvider from "./components/data-table/FloatingActionProvider";

function App() {
  const data = getData();
  return (
    <div className="container mx-auto py-10">
      <DataTableProvider
        columns={columns}
        data={data}
        floatingBarVariant="MANAGEMENT"
      >
        <DataTable />
        <FloatingActionProvider />
      </DataTableProvider>
    </div>
  );
}

export default App;
