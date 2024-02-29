import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import "./tableValueIndex.scss";
import { ColDef } from "ag-grid-community";
import { memo, useState } from "react";
import Modal from "@mui/material/Modal/Modal";
import { Box } from "@mui/material";
import { SettingIcon } from "../ui/icons/SettingIcon";
import { CloseIcon } from "../ui/icons/CloseIcon";
import { useAppSelector } from "../../store/configStore";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const TableValueIndex = () => {
  const { listIndexHSX } = useAppSelector((state) => state.valueIndex);
  // console.log(listIndexHSX);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const colDefs: ColDef[] = [
    { field: "IndexId", headerName: "Chỉ số", width: 140, headerClass: "oke" },
    { field: "IndexValue", headerName: "Điểm", width: 90 },
    { field: "Change", headerName: "+/-", width: 80 },
    { field: "TotalSharesAOM", headerName: "KLGD (Triệu)", width: 100 },
    { field: "TotalValuesAOM", headerName: "GTGD (Tỷ)", width: 90 },
    {
      field: "Up",
      headerName: "CK Tăng/Giảm",
      width: 120,
      cellRenderer: (params: any) => {
        // console.log(params);
        return (
          <div className="stock-info flex justify-between">
            <div className="flex-1 flex items-center space-x-0.5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 20 20"
                className="inline text-color-up"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="inline text-color-up">{params.data.Up}</span>
            </div>
            <div className="mx-0.5 flex-1 text-color-ref flex items-center justify-center space-x-0.5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="inline"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 352H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48z" />
              </svg>
              <span>{params.data.NoChange}</span>
            </div>
            <div className="flex-1 flex items-center justify-center space-x-0.5">
              <span className="text-color-down inline-flex items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 20 20"
                  className="inline"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {params.data.Down}
              </span>
            </div>
          </div>
        );
      },
    },
  ];
  const gridOptions = {
    // set background colour on every row, this is probably bad, should be using CSS classes
    rowStyle: { background: "#1A1D1F" },

    // set background colour on even rows again, this looks bad, should be using CSS classes
    getRowStyle: (params: any) => {
      if (params.node.rowIndex % 2 === 0) {
        return { background: "#282828" };
      }
    },
    alwaysShowVerticalScroll: true,
    scrollbarWidth: 8,
    // other grid options ...
  };
  const gridStyle = { height: "100%" };
  return (
    <div
      style={gridStyle}
      className="ag-theme-alpine-dark table__price mx-0.5 rounded bg-backgroundDark relative"
    >
      <button
        type="button"
        onClick={handleOpen}
        className="absolute top-0 left-0 z-10 p-1.5 text-color-primary hover:text-color-highlight"
        data-for="priceBoardFunctions"
        data-tip="Nhấn để chọn các chỉ số"
      >
        <SettingIcon />
      </button>
      <AgGridReact
        className="rounded"
        rowData={listIndexHSX}
        columnDefs={colDefs}
        gridOptions={gridOptions}
        scrollbarWidth={8}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between">
            <div>Chỉ số chính</div>
            <CloseIcon />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default memo(TableValueIndex);
