import React, { useState } from 'react'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import "./tableChartIndex.scss"
const TableChartIndex = () => {
    // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { nameIndex: "UPCOM", pointIndex: "1,169.59", updownIndex: -10.15, KLGD: 107.461,GTGD: -10.15,StockUpDown:true},
    { nameIndex: "VNINDEX", pointIndex: "1,169.58", updownIndex: -10.15, KLGD: 93.558,GTGD: -10.15,StockUpDown:true},
    { nameIndex: "HNX", pointIndex: "1,169.57", updownIndex: -10.15, KLGD: 67.739,GTGD: -10.15,StockUpDown:true},
    { nameIndex: "VNINDEX", pointIndex: "1,169.54", updownIndex: -10.15, KLGD: 1.047226,GTGD: -10.15,StockUpDown:true},
    { nameIndex: "HNX30", pointIndex: "1,169.60", updownIndex: -10.15, KLGD: 403.960,GTGD: -10.15,StockUpDown:true},
    { nameIndex: "VN30", pointIndex: "1,169.50", updownIndex: -10.15, KLGD: 488.805,GTGD: -10.15,StockUpDown:true},
  ]);
  
  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    {field: "nameIndex", headerName: "Chỉ số",width: 150 },
    {field: "pointIndex", headerName: "Điểm",width: 90 },
    {field: "updownIndex", headerName: "+/-",width: 90 },
    {field: "KLGD", headerName: "KLGD",width: 90 },
    {field: "GTGD", headerName: "GTGD (Tỷ)",width: 90 },
    {field: "StockUpDown", headerName: "CK Tăng/Giảm",width: 90 }
  ]);
  const gridOptions = {
    // set background colour on every row, this is probably bad, should be using CSS classes
    rowStyle: { background: '#1A1D1F' },

    // set background colour on even rows again, this looks bad, should be using CSS classes
    getRowStyle: params => {
        if (params.node.rowIndex % 2 === 0) {
            return { background: '#282828' };
        }
    },

    // other grid options ...
}
  const gridStyle = {  width: "100%" };
  return (
      <div style={gridStyle} className="ag-theme-alpine-dark table__price mx-0.5 rounded bg-backgroundDark">
    <AgGridReact className='rounded' rowData={rowData} columnDefs={colDefs}   gridOptions={gridOptions} />
    </div>
  )
}

export default TableChartIndex