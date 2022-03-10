import MUIDataTable from "mui-datatables";
import PropTypes from "prop-types";

import CustomSearchRender from "../CustomSearchRender";
import DownloadBtn from "../DownloadBtn";
import InnerTable from "../InnerTable";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const DataTable = ({ datas }) => {
  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        sort: true,
      },
    },
    {
      name: "id",
      label: "ID",
      options: {
        sort: true,
      },
    },
    {
      name: "class",
      label: "Class",
    },
    {
      name: "score",
      label: "Av. Score, %",
      options: {
        sort: true,
      },
    },
    {
      name: "speed",
      label: "Av. Speed",
      options: {
        sort: true,
      },
    },
    {
      name: "parents",
      label: "Parents",
    },
  ];

  const options = {
    rowsPerPageOptions: [5, 10, 20],
    filter: false,
    print: false,
    viewColumns: false,
    searchAlwaysOpen: true,
    customSearchRender: (searchText, handleSearch, options) => {
      return (
        <CustomSearchRender
          searchText={searchText}
          onSearch={handleSearch}
          options={options}
        />
      );
    },
    expandableRows: true,
    expandableRowsHeader: false,
    expandableRowsOnClick: true,
    renderExpandableRow: (rowData, rowMeta) => {
      const colSpan = rowData.length + 1;
      return (
        <TableRow>
          <TableCell colSpan={colSpan}>
            {<InnerTable data={datas[rowMeta.dataIndex]} />}
          </TableCell>
        </TableRow>
      );
    },
  };

  const components = {
    icons: {
      DownloadIcon: DownloadBtn,
    },
  };

  return (
    <>
      <MUIDataTable
        title={"Students"}
        data={datas}
        columns={columns}
        options={options}
        {...{ components }}
      />
    </>
  );
};

export default DataTable;

DataTable.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
          class: PropTypes.string.isRequired,
          score: PropTypes.string.isRequired,
          speed: PropTypes.string.isRequired,
          parents: PropTypes.arrayOf(PropTypes.string),
          tests: PropTypes.arrayOf(
            PropTypes.shape({
              label: PropTypes.string,
              score: PropTypes.number,
              speed: PropTypes.string,
              total: PropTypes.number,
              expSpeed: PropTypes.string,
              concept: PropTypes.string,
              date: PropTypes.string,
              abcent: PropTypes.bool,
            })
          ),
        })
      ),
    })
  ).isRequired,
};
