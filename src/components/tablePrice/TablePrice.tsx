import logo from './logo.svg';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useTranslation } from 'react-i18next';
function TablePrice() {
    const { t } = useTranslation(["home"]);
  const containerStyle = useMemo(() => ({ width: '100%', height: '650px' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState();
  const [dataTableHNX, setDataTableHNX] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: 'StockCode',headerName: t("home:priceBoard.StockCode"),width:'75px' },
    { field: 'basicPrice',headerName: t("home:priceBoard.TC"),width:'75px'  },
    { field: 'ceilingPrice',headerName: t("home:priceBoard.Ceiling"),width:'75px'   },
    { field: 'floorPrice' ,headerName: t("home:priceBoard.Floor") ,width:'75px' },
    { headerName: t("home:priceBoard.Mua"), 
    headerClass: "flex justify-center text-white",
    cellStyle: (params: any) => ({
        fontWeight: "",
        color: '#fff',
        textAlign: "right",
      }),
    children: [
        { field: 'KL3Mua' ,width:'75px' },
        { field: 'Gia3Mua',width:'75px'  },
        { field: 'KL2Mua',width:'75px'  },
        { field: 'Gia2Mua',width:'75px'  },
        { field: 'KL1Mua',width:'75px'  },
        { field: 'Gia1Mua' ,width:'75px' },
    ]},
    { headerName: t("home:priceBoard.KL"),
    headerClass: "flex justify-center  text-white",  children: [
        { field: 'KLKhopLenh',width:'75px'  },
        { field: 'KhoiLuong',width:'75px'  },
        { field: 'CT',width:'75px'  },
    ]},
    { headerName: t("home:priceBoard.Ban"),
    headerClass: "flex justify-center  text-white",
      children: [
        { field: 'Gia1Ban',width:'75px'  },
        { field: 'KL1Ban',width:'75px'  },
        { field: 'Gia2Ban' ,width:'75px' },
        { field: 'KL2Ban' ,width:'75px' },
        { field: 'Gia3Ban' ,width:'75px' },
        { field: 'KL3Ban' ,width:'75px' },
    ]},
  
    { field: 'TKL' ,width:'75px' },
    { field: 'DuBanKL4',width:'75px'  },
    { field: 'MoCua' ,width:'75px' },
    { field: 'CaoNhat' ,width:'75px' },
    { field: 'ThapNhat' ,width:'75px'},
    { field: 'TrungBinh' ,width:'75px'},
    { field: 'NNmua' ,width:'75px'},
    { field: 'NNban' ,width:'75px'},
    { field: 'RoomConLai' ,width:'75px'},
  ]);
  const defaultColDef = useMemo(() => {
    return {
      width: 170,
      sortable: true,
      filter: true,
    };
  }, []);
  const dataHNX = () =>{
    fetch('http://marketstream.fpts.com.vn/hnx/data.ashx?s=quote&l=HNXIndex')
    .then((resp) => resp.json())
      .then((data) =>{
        const products= data;
        products.forEach((obj) =>
        obj.Info.sort((a, b) => {
          const indexA = Number(a[0]);
          const indexB = Number(b[0]);
          if (indexA < indexB) {
            return -1;
          }
          if (indexA > indexB) {
            return 1;
          }
          return 0;
        })
      );
      const arr =[];
       products.map((infoArray) =>{
        const data = infoArray.Info.map(subArray => subArray[1]);
        var datas = {
          "StockCode": data[0],
          "basicPrice": data[1],
          "ceilingPrice": data[2],
          "floorPrice": data[3],
          "KL3Mua": data[4],
          "Gia3Mua": data[5],
          "KL2Mua": data[6],
          "Gia2Mua": data[7],
          "KL1Mua": data[8],
          "Gia1Mua": data[9],
          "KLKhopLenh": data[10],
          "GiaKL": data[11],
          "KhoiLuong": data[12],
          "CT": data[13],
          "Gia1Ban": data[14],
          "KL1Ban": data[15],
          "Gia2Ban": data[16],
          "KL2Ban": data[17],
          "Gia3Ban": data[18],
          "KL3Ban": data[19],
          "TKL": data[20],
          "DuBanKL4": data[21],
          "MoCua": data[22],
          "CaoNhat": data[23],
          "ThapNhat": data[24],
          "TrungBinh": data[25],
          "NNmua": data[26],
          "NNban": data[27],
          "RoomConLai": data[28],
          "T1": data[29],
          "T2": data[30],
          "T3": data[31]
        };
        arr.push(datas)
       })
        setDataTableHNX(arr)
      })
     ;
  }
  useEffect(()=>{
    dataHNX()
  },[])
  console.log(dataTableHNX)
  // console.log(dataTableHNX)
  const onGridReady = useCallback((params) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);
  const rowClass = 'bg-[#1A1D1F]';

// all even rows assigned 'my-shaded-effect'
const getRowClass = params => {
    if (params.node.rowIndex % 2 === 0) {
        return 'my-shaded-effect';
    }
};
  return (
    <div style={containerStyle} >
    <div style={gridStyle} className="ag-theme-alpine">
      <AgGridReact
        rowData={dataTableHNX}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowDragManaged={true}
        animateRows={true}
        onGridReady={onGridReady}
        rowClass={rowClass}
      ></AgGridReact>
    </div>
  </div>
  );
}

export default TablePrice;