
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import "./tableValueIndex.scss"
import { ColDef } from 'ag-grid-community';
import { memo, useEffect, useState } from "react";
import Modal from "@mui/material/Modal/Modal";
import { Box } from "@mui/material";
import { SettingIcon } from "../ui/icons/SettingIcon";
import { useAppDispatch, useAppSelector } from "../../store/configStore";
import { fetchHNXValueIndexAsync, fetchHSXValueIndexAsync } from "./ValueIndex";
import { CloseIcon } from "../ui/icons/CloseIcon";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const TableValueIndex = () => {
  const { valueIndexHNX,valueIndexHSX } = useAppSelector((state) => state.valueIndex);
  console.log(valueIndexHNX,valueIndexHSX)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchHSXValueIndexAsync());
    dispatch(fetchHNXValueIndexAsync());
  }, [dispatch]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    // Row Data: The data to be displayed.
  // const [rowData, setRowData] = useState([
  //   { nameIndex: "UPCOM", pointIndex: "1,169.59", updownIndex: -10.15, KLGD: 107.461,GTGD: -10.15,StockUpDown:true},
  //   { nameIndex: "VNINDEX", pointIndex: "1,169.58", updownIndex: -10.15, KLGD: 93.558,GTGD: -10.15,StockUpDown:true},
  //   { nameIndex: "HNX", pointIndex: "1,169.57", updownIndex: -10.15, KLGD: 67.739,GTGD: -10.15,StockUpDown:true},
  //   { nameIndex: "VNINDEX", pointIndex: "1,169.54", updownIndex: -10.15, KLGD: 1.047226,GTGD: -10.15,StockUpDown:true},
  //   { nameIndex: "HNX30", pointIndex: "1,169.60", updownIndex: -10.15, KLGD: 403.960,GTGD: -10.15,StockUpDown:true},
  //   { nameIndex: "VN30", pointIndex: "1,169.50", updownIndex: -10.15, KLGD: 488.805,GTGD: -10.15,StockUpDown:true},
  // ]);
  const rowData = [
    { nameIndex: "UPCOM", pointIndex: "1,169.59", updownIndex: -10.15, KLGD: 107.461,GTGD: -10.15,StockUpDown:true},
    { nameIndex: "VNINDEX", pointIndex: "1,169.58", updownIndex: -10.15, KLGD: 93.558,GTGD: -10.15,StockUpDown:true},
    { nameIndex: "HNX", pointIndex: "1,169.57", updownIndex: -10.15, KLGD: 67.739,GTGD: -10.15,StockUpDown:true},
    { nameIndex: "VNINDEX", pointIndex: "1,169.54", updownIndex: -10.15, KLGD: 1.047226,GTGD: -10.15,StockUpDown:true},
    { nameIndex: "HNX30", pointIndex: "1,169.60", updownIndex: -10.15, KLGD: 403.960,GTGD: -10.15,StockUpDown:true},
    { nameIndex: "VN30", pointIndex: "1,169.50", updownIndex: -10.15, KLGD: 488.805,GTGD: -10.15,StockUpDown:true},
  ]
  // Column Definitions: Defines & controls grid columns.
  // const [colDefs, setColDefs] = useState([
  //   {field: "nameIndex", headerName: "Chỉ số",width: 150,headerClass:'oke', headerStyle: {paddingLeft: '20px !important' } },
  //   {field: "pointIndex", headerName: "Điểm",width: 90 },
  //   {field: "updownIndex", headerName: "+/-",width: 90 },
  //   {field: "KLGD", headerName: "KLGD",width: 90 },
  //   {field: "GTGD", headerName: "GTGD (Tỷ)",width: 90 },
  //   {field: "StockUpDown", headerName: "CK Tăng/Giảm",width: 90 }
  // ]);
  const colDefs: ColDef[] = [
    {field: "nameIndex", headerName: "Chỉ số",width: 150,headerClass:'oke'},
    {field: "pointIndex", headerName: "Điểm",width: 90 },
    {field: "updownIndex", headerName: "+/-",width: 90 },
    {field: "KLGD", headerName: "KLGD",width: 90 },
    {field: "GTGD", headerName: "GTGD (Tỷ)",width: 90 },
    {field: "StockUpDown", headerName: "CK Tăng/Giảm",width: 90 }
  ]
  const gridOptions = {
    // set background colour on every row, this is probably bad, should be using CSS classes
    rowStyle: { background: '#1A1D1F' },

    // set background colour on even rows again, this looks bad, should be using CSS classes
    getRowStyle: (params:any) => {
        if (params.node.rowIndex % 2 === 0) {
            return { background: '#282828' };
        }
    },
    alwaysShowVerticalScroll: true,
    scrollbarWidth: 8,
    // other grid options ...
}
  const gridStyle = {height:'100%' };
  return (
      <div style={gridStyle} className="ag-theme-alpine-dark table__price mx-0.5 rounded bg-backgroundDark relative">
        <button type="button" onClick={handleOpen} className="absolute top-0 left-0 z-10 p-1.5 text-color-primary hover:text-color-highlight" data-for="priceBoardFunctions" data-tip="Nhấn để chọn các chỉ số"><SettingIcon/></button>
    <AgGridReact className='rounded' rowData={rowData} columnDefs={colDefs}   gridOptions={gridOptions}  scrollbarWidth={8}/>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-between">
          <div>Chỉ số chính</div>
          <CloseIcon/>
          </div>
        
        </Box>
      </Modal>
    </div>
  )
}

export default memo(TableValueIndex)