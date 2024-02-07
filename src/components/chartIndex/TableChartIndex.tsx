
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import "./tableChartIndex.scss"
import { ColDef } from 'ag-grid-community';
const TableChartIndex = () => {
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
  const gridStyle = {  width: "100%",height:'100%' };
  return (
      <div style={gridStyle} className="ag-theme-alpine-dark table__price mx-0.5 rounded bg-backgroundDark relative">
        <button type="button" className="absolute top-0 left-0 z-10 p-1.5 text-color-primary hover:text-color-highlight" data-for="priceBoardFunctions" data-tip="Nhấn để chọn các chỉ số"><svg stroke="currentColor" fill="#c1c1c1" stroke-width="0" viewBox="0 0 512 512" className="text-10" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z"></path></svg></button>
    <AgGridReact className='rounded' rowData={rowData} columnDefs={colDefs}   gridOptions={gridOptions}  scrollbarWidth={8}/>
    </div>
  )
}

export default TableChartIndex