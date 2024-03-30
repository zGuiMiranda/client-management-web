import DataTable from "react-data-table-component";

interface TableOrganismProps {
  columns: {
    name: string;
    selector: (row: { [key: string]: string }) => any;
  }[];
  data: any[];
  onRowClick: (value: unknown) => void;
}

export const TableOrganism = ({
  columns,
  data,
  onRowClick,
}: TableOrganismProps) => {
  return (
    <DataTable
      onRowClicked={onRowClick}
      columns={columns}
      data={data}
      noDataComponent={<>Sem data</>}
    />
  );
};
