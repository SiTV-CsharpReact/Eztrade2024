// import { _getDateTs } from "../util/app.chart";
import { IChartIndex, IData } from "../interface/interface.config";
function _getDateTs(dateTime: any): number {
    var d;
    d = new Date(dateTime).getTime();
    return d;
  }
export function getDataChart(data: IChartIndex, name: string) {
    switch (name) {
      case "VNXALL":
        return [
          data.HSX.DataFull.VNXALL.map((item) => convertDataIndex(item)),
          data.HSX.DataFull.VNXALL.map((item) => convertDataColumn(item)),
        ];
      case "VNI":
        return [
          data.HSX.DataFull.VNIndex.map((item) => convertDataIndex(item)),
          data.HSX.DataFull.VNIndex.map((item) => convertDataColumn(item)),
        ];
      case "VNSML":
        return [
          data.HSX.DataFull.VNSML.map((item) => convertDataIndex(item)),
          data.HSX.DataFull.VNSML.map((item) => convertDataColumn(item)),
        ];
      case "VN30":
        return [
          data.HSX.DataFull.VN30.map((item) => convertDataIndex(item)),
          data.HSX.DataFull.VN30.map((item) => convertDataColumn(item)),
        ];
      case "VNALL":
        return [
          data.HSX.DataFull.VNALL.map((item) => convertDataIndex(item)),
          data.HSX.DataFull.VNALL.map((item) => convertDataColumn(item)),
        ];
      case "VN100":
        return [
          data.HSX.DataFull.VN100.map((item) => convertDataIndex(item)),
          data.HSX.DataFull.VN100.map((item) => convertDataColumn(item)),
        ];
      case "VNMID":
        return [
          data.HSX.DataFull.VNMID.map((item) => convertDataIndex(item)),
          data.HSX.DataFull.VNMID.map((item) => convertDataColumn(item)),
        ];
      case "HNX":
        return [
          data.HNX.DataFull.HNXIndex.map((item) => convertDataIndex(item)),
          data.HNX.DataFull.HNXIndex.map((item) => convertDataColumn(item)),
        ];
      case "HNX30":
        return [
          data.HNX.DataFull.HNX30.map((item) => convertDataIndex(item)),
          data.HNX.DataFull.HNX30.map((item) => convertDataColumn(item)),
        ];
      case "HNXLCAP":
        return [
          data.HNX.DataFull.HNXLCap.map((item) => convertDataIndex(item)),
          data.HNX.DataFull.HNXLCap.map((item) => convertDataColumn(item)),
        ];
      case "HNXSMCAP":
        return [
          data.HNX.DataFull.HNXMSCap.map((item) => convertDataIndex(item)),
          data.HNX.DataFull.HNXMSCap.map((item) => convertDataColumn(item)),
        ];
      case "HNXFIN":
        return [
          data.HNX.DataFull.HNXFin.map((item) => convertDataIndex(item)),
          data.HNX.DataFull.HNXFin.map((item) => convertDataColumn(item)),
        ];
      case "HNXMAN":
        return [
          data.HNX.DataFull.HNXMan.map((item) => convertDataIndex(item)),
          data.HNX.DataFull.HNXMan.map((item) => convertDataColumn(item)),
        ];
      case "HNXCON":
        return [
          data.HNX.DataFull.HNXCon.map((item) => convertDataIndex(item)),
          data.HNX.DataFull.HNXCon.map((item) => convertDataColumn(item)),
        ];
      case "UPCOM":
        return [
          data.HNX.DataFull.HNXUpcomIndex.map((item) => convertDataIndex(item)),
          data.HNX.DataFull.HNXUpcomIndex.map((item) => convertDataColumn(item)),
        ];
      default:
        return [];
    }
  }
  export function getDataChartHSX(data: IChartIndex, name: string): any {
    switch (name) {
      case "VNXALL":
        return data.HSX?.DataFull?.VNXALL;
      case "VNI":
        return data.HSX?.DataFull?.VNIndex;
      case "VNSML":
        return data.HSX?.DataFull?.VNSML;
      case "VN30":
        return data.HSX?.DataFull?.VN30;
      case "VNALL":
        return data.HSX?.DataFull?.VNALL;
      case "VN100":
        return data.HSX?.DataFull?.VN100;
      case "VNMID":
        return data.HSX?.DataFull?.VNMID;
  
      default:
        return [];
    }
  }
  
  export function getDataChartHNX(data: IChartIndex, name: string): any {
    switch (name) {
      case "HNX":
        return data.HNX?.DataFull?.HNXIndex;
      case "HNX30":
        return data.HNX?.DataFull?.HNX30;
      case "HNXLCAP":
        return data.HNX?.DataFull?.HNXLCap;
      case "HNXSMCAP":
        return data.HNX?.DataFull?.HNXMSCap;
      case "HNXFIN":
        return data.HNX?.DataFull?.HNXFin;
      case "HNXMAN":
        return data.HNX?.DataFull?.HNXMan;
      case "HNXCON":
        return data.HNX?.DataFull?.HNXCon;
      case "UPCOM":
        return data.HNX?.DataFull?.HNXUpcomIndex;
      default:
        return [];
    }
  }
  export function convertDataIndex(data: IData) {
    return [data.Data.TimeJS, data.Data.Index];
  }
  
  export function convertDataColumn(data: IData) {
    return [data.Data.TimeJS, data.Data.Vol];
  }
  
  export function getPlotLine(data: IChartIndex, name: string) {
    switch (name) {
      case "VNXALL":
        return data.HSX.LastIndex.VNXALL;
      case "VNI":
        return data.HSX.LastIndex.VNIndex;
      case "VNSML":
        return data.HSX.LastIndex.VNSML;
      case "VN30":
        return data.HSX.LastIndex.VN30;
      case "VNALL":
        return data.HSX.LastIndex.VNALL;
      case "VN100":
        return data.HSX.LastIndex.VN100;
      case "VNMID":
        return data.HSX.LastIndex.VNMID;
      case "HNX":
        return data.HNX.LastIndex.HNXIndex;
      case "HNX30":
        return data.HNX.LastIndex.HNX30;
      case "HNXLCAP":
        return data.HNX.LastIndex.HNXLCap;
      case "HNXSMCAP":
        return data.HNX.LastIndex.HNXMSCap;
      case "HNXFIN":
        return data.HNX.LastIndex.HNXFin;
      case "HNXMAN":
        return data.HNX.LastIndex.HNXMan;
      case "HNXCON":
        return data.HNX.LastIndex.HNXCon;
      case "UPCOM":
        return data.HNX.LastIndex.HNXUpcomIndex;
      default:
        return 0;
    }
  }
  
  export function updateChart(DataTime: any, DataIndex: any) {
    if (DataTime.SS !== null) {
      for (const key in DataTime) {
        if (DataTime.hasOwnProperty(key)) {
          if (DataIndex.hasOwnProperty(key)) {
            for (const subKey in DataTime[key]) {
              if (DataTime[key].hasOwnProperty(subKey)) {
                // Kiểm tra xem subKey này đã tồn tại trong dataChartIndex[key] chưa
                if (DataIndex[key].hasOwnProperty(subKey)) {
                  // Cập nhật dữ liệu từ dataChartIndexTime[key][subKey] vào dataChartIndex[key][subKey]
                  DataIndex[key][subKey] = DataTime[key][subKey];
                }
              }
            }
          }
        }
      }
    }
  }
  