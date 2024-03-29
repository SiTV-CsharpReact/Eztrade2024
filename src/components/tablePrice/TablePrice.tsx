import logo from "./logo.svg";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AgGridReact } from "ag-grid-react";
import { useTranslation } from "react-i18next";
import { formatNumberMarket } from "../../util/util";
import "./TablePrice.scss";
import CustomTooltip from "./CustomTooltip";
export const setColorMarkettest = (field: string, params: any) => {
  var { value, data } = params;
  const { basicPrice, ceilingPrice, floorPrice } = data;

  const check = [
    "GiaKhop",
    "G1",
    "G2",
    "G3",
    "GiaKhop",
    "GiaKhop",
    "GiaKhop",
    "G1B",
    "G2B",
    "G3B",
  ];
  const unCheck = [
    "StockCode",
    "KL1",
    "KL2",
    "KL3",
    "KLKhop",
    "Chenhlech",
    "Chenhlech1",
    "KL1B",
    "KL2B",
    "KL3B",
  ];

  if (field) {
    if (check.indexOf(field) !== -1) {
    } else {
      value = data[check[unCheck.indexOf(field)]];
    }
  }

  if (Number(value) === 0) {
    return "#EFEFEF";
  } else if (Number(value) === Number(floorPrice)) {
    return "#3fc2eb";
  } else if (Number(value) === Number(ceilingPrice)) {
    return "#a43ee7";
  } else if (Number(value) === Number(basicPrice)) {
    return "#FF9F41";
  } else if (Number(value) > Number(basicPrice)) {
    return "#1AAF74";
  } else if (
    Number(value) < Number(basicPrice) &&
    Number(value) > Number(floorPrice)
  ) {
    return "#F34859";
  }

  return ""; // Trả về chuỗi trống nếu không khớp với bất kỳ điều kiện nào
};

function TablePrice() {
  const { t } = useTranslation(["home"]);
  const widthWindow = window.innerWidth;
  const containerStyle = useMemo(
    () => ({ width: "100%", height: "calc(100vh - 550px)" }),
    []
  );
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData, setRowData] = useState();
  const [dataTableHNX, setDataTableHNX] = useState();
  const [columnDefs, setColumnDefs] = useState([
    {
      field: "StockCode",
      headerName: t("home:priceBoard.StockCode"),
      width: widthWindow * 0.05,
      tooltipField: 'StockCode',
      
      tooltipComponent: CustomTooltip,
      tooltipComponentParams: { color: '#55AA77' },
      cellStyle: (params: any) => ({
        fontWeight: "",
        color: setColorMarkettest("StockCode", params),
      }),
    },
    {
      field: "basicPrice",
      headerName: t("home:priceBoard.TC"),
      cellClass: "cell-highlight",
      width: widthWindow * 0.03,
      cellStyle: (params: any) => ({
        fontWeight: "",
        color: "#FF9F41",
      }),
    },
    {
      field: "ceilingPrice",
      headerName: t("home:priceBoard.Ceiling"),
      cellClass: "cell-highlight",
      width: widthWindow * 0.035,
      cellStyle: (params: any) => ({
        fontWeight: "",
        color: "#A43EE7",
      }),
    },
    {
      field: "floorPrice",

      headerName: t("home:priceBoard.Floor"),
      width: widthWindow * 0.035,
      cellClass: "cell-highlight",
      cellStyle: (params: any) => ({
        fontWeight: "",
        color: "#3FC2EB",
      }),
    },
    {
      headerName: t("home:priceBoard.Mua"),
      headerClass: "flex justify-center text-white",
      cellStyle: (params: any) => ({
        fontWeight: "",
        color: "#fff",
        textAlign: "right",
      }),
      children: [
        {
          field: "G3",
          cellStyle: (params: any) => ({
            fontWeight: "",
            color: setColorMarkettest("", params),
          }),
          headerName: "Giá 3",

          width: widthWindow * 0.035,
        },
        {
          field: "KL3",
          headerName: "KL 3",
          cellStyle: (params: any) => ({
            fontWeight: "",
            color: setColorMarkettest("KL3", params),
          }),
          width: widthWindow * 0.04,
        },

        {
          field: "G2",
          headerName: "Giá 2",
          cellStyle: (params: any) => ({
            fontWeight: "",
            color: setColorMarkettest("", params),
          }),
          width: widthWindow * 0.035,
        },
        {
          field: "KL2",
          headerName: "KL 2",
          cellStyle: (params: any) => ({
            fontWeight: "",
            color: setColorMarkettest("KL2", params),
          }),
          width: widthWindow * 0.04,
        },

        {
          field: "G1",
          cellStyle: (params: any) => ({
            fontWeight: "",
            color: setColorMarkettest("", params),
          }),
          headerName: "Giá 1",
          width: widthWindow * 0.035,
        },

        {
          field: "KL1",
          cellStyle: (params: any) => ({
            fontWeight: "",
            color: setColorMarkettest("KL1", params),
          }),
          headerName: "KL 1",
          width: widthWindow * 0.04,
        },
      ],
    },
    {
      headerName: t("home:priceBoard.KL"),
      headerClass: "flex justify-center  text-white",
      children: [
        {
          field: "GiaKhop",
          headerName: "Giá",
          cellClass: "cell-highlight",
          cellStyle: (params: any) => ({
            fontWeight: "",
            color: setColorMarkettest("", params),
          }),
          width: widthWindow * 0.035,
        },
        {
          field: "KLKhop",
          cellClass: "cell-highlight",
          cellStyle: (params: any) => ({
            fontWeight: "",
            color: setColorMarkettest("KLKhop", params),
          }),
          headerName: "KL",
          width: widthWindow * 0.04,
        },
        {
          field: "CT",
          headerName: "+/-",
          cellClass: "cell-highlight",

          cellStyle: (params: any) => ({
            fontWeight: "",
            color: setColorMarkettest("KLKhop", params),
          }),
          width: widthWindow * 0.03,
        },
      ],
    },
    {
      headerName: t("home:priceBoard.Ban"),
      headerClass: "flex justify-center  text-white",
      children: [
        {
          field: "G1B",
          headerName: "Giá 1",
          cellStyle: (params: any) => ({
            fontWeight: "",
            color: setColorMarkettest("", params),
          }),
          width: widthWindow * 0.035,
        },
        {
          field: "KL1B",
          headerName: "KL 1",
          cellStyle: (params: any) => ({
            fontWeight: "",
            color: setColorMarkettest("KL1B", params),
          }),
          width: widthWindow * 0.04,
        },

        {
          field: "G2B",
          headerName: "Giá 2",
          cellStyle: (params: any) => ({
            fontWeight: "",
            color: setColorMarkettest("", params),
          }),
          width: widthWindow * 0.035,
        },
        {
          field: "KL2B",
          headerName: "KL 2",
          cellStyle: (params: any) => ({
            fontWeight: "",
            color: setColorMarkettest("KL1B", params),
          }),
          width: widthWindow * 0.04,
        },

        {
          field: "G3B",
          headerName: "Giá 3",
          cellStyle: (params: any) => ({
            fontWeight: "",
            color: setColorMarkettest("", params),
          }),
          width: widthWindow * 0.035,
        },
        {
          field: "KL3B",
          headerName: "KL 3",
          cellStyle: (params: any) => ({
            fontWeight: "",
            color: setColorMarkettest("KL3B", params),
          }),
          width: widthWindow * 0.04,
        },
      ],
    },

    { field: "TKL", headerName: "Tổng KL", width: widthWindow * 0.04 },
    // { field: "DuBanKL4", width: widthWindow * 0.04 },
    { field: "MoCua",
    cellClass: "cell-highlight",
    cellStyle: (params: any) => ({
      fontWeight: "",
      color: setColorMarkettest("", params),
    }), width: widthWindow * 0.035 },
    { field: "CaoNhat",
    cellClass: "cell-highlight",
    cellStyle: (params: any) => ({
      fontWeight: "",
      color: setColorMarkettest("", params),
    }), width: widthWindow * 0.035 },
    { field: "ThapNhat",
    cellClass: "cell-highlight",
    cellStyle: (params: any) => ({
      fontWeight: "",
      color: setColorMarkettest("", params),
    }), width: widthWindow * 0.035 },
    { field: "TrungBinh", width: widthWindow * 0.035 },
    { field: "NNmua", width: widthWindow * 0.03 },
    { field: "NNban", width: widthWindow * 0.03 },
    { field: "RoomConLai", width: widthWindow * 0.045 },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      width: 170,
      sortable: true,
      filter: true,
    };
  }, []);
  const dataHNX = () => {
    fetch("http://marketstream.fpts.com.vn/hnx/data.ashx?s=quote&l=HNXIndex")
      .then((resp) => resp.json())
      .then((data) => {
        const products = data;
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
        const arr = [];
        products.map((infoArray) => {
          const data = infoArray.Info.map((subArray) => subArray[1]);
          var datas = {
            StockCode: data[0],
            basicPrice: formatNumberMarket(data[1]),
            ceilingPrice: formatNumberMarket(data[2]),
            floorPrice: formatNumberMarket(data[3]),
            G3: formatNumberMarket(data[5]),
            KL3: formatNumberMarket(data[4]),
            KL2: formatNumberMarket(data[6]),
            G2: formatNumberMarket(data[7]),
            KL1: formatNumberMarket(data[8]),
            G1: formatNumberMarket(data[9]),
            KLKhopLenh: formatNumberMarket(data[10]),
            GiaKhop: formatNumberMarket(data[11]),
            KLKhop: formatNumberMarket(data[12]),
            CT: formatNumberMarket(data[13]),
            G1B: formatNumberMarket(data[14]),
            KL1B: formatNumberMarket(data[15]),
            G2B: formatNumberMarket(data[16]),
            KL2B: formatNumberMarket(data[17]),
            G3B: formatNumberMarket(data[18]),
            KL3B: formatNumberMarket(data[19]),
            TKL: formatNumberMarket(data[20]),
            DuBanKL4: formatNumberMarket(data[21]),
            MoCua: formatNumberMarket(data[22]),
            CaoNhat: formatNumberMarket(data[23]),
            ThapNhat: formatNumberMarket(data[24]),
            TrungBinh: formatNumberMarket(data[25]),
            NNmua: formatNumberMarket(data[26]),
            NNban: formatNumberMarket(data[27]),
            RoomConLai: formatNumberMarket(data[28]),
            T1: formatNumberMarket(data[29]),
            T2: formatNumberMarket(data[30]),
            T3: formatNumberMarket(data[31]),
          };
          arr.push(datas);
        });
        setDataTableHNX(arr);
      });
  };
  useEffect(() => {
    dataHNX();
  }, []);
  console.log(dataTableHNX);
  // console.log(dataTableHNX)
  const onGridReady = useCallback((params) => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);
  const rowClass = "bg-[#1A1D1F]";

  // all even rows assigned 'my-shaded-effect'
  // const getRowClass = (params) => {
  //   if (params.node.rowIndex % 2 === 0) {
  //     return "my-shaded-effect";
  //   }
  // };
  const getRowStyle = (params) => {
    return {
      borderBottom: "1px solid #2f2f2f",
      borderRight: "1px solid #2f2f2f",
    }; // Đổi màu border tại đây
  };

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine table__price">
        <AgGridReact
          rowData={dataTableHNX}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowDragManaged={true}
          animateRows={true}
          onGridReady={onGridReady}
          rowClass={rowClass}
          getRowStyle={getRowStyle}
          tooltipShowDelay={0}
          tooltipHideDelay={30000}
        ></AgGridReact>
      </div>
    </div>
  );
}

export default TablePrice;
