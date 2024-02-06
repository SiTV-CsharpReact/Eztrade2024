import { g_arrHAMarketStatus, g_arrHOMarketStatus, g_arrUPMarketStatus } from "../../../configs/app.config";
import { ObjectMenuHNX, ObjectMenuHSX } from "../../chartIndex/interface/interface.config";

  interface MarketData {
    type: boolean;
    name: string;
    id: string[];
    valueChange: string;
    valueChangePercent: string;
    valueIndexChange: string;
    visible: boolean;
    valueTotalSharesAOM: string;
    valueTotalValuesAOM: string;
    valueUp: string;
    valueCeiling: string;
    valueDown: string;
    valueFloor: string;
    valueNoChange: string;
    status: string;
    san: string;
  }
  export interface IIndex {
    VNXALL: boolean;
    VNI: boolean;
    VN30: boolean;
    VN100: boolean;
    VNMID: boolean;
    VNSML: boolean;
    VNALL: boolean;
    HNX: boolean;
    HNX30: boolean;
    HNXLCAP: boolean;
    HNXSMCAP: boolean;
    HNXFIN: boolean;
    HNXMAN: boolean;
    HNXCON: boolean;
    UPCOM: boolean;
    cbcol4: boolean;
    cbcol20: boolean;
    cbcol25: boolean;
    cbcol28: boolean;
    cbcol22: boolean;
    cbcol23: boolean;
    cbcol24: boolean;
    cbcol26: boolean;
    cbcol27: boolean;
    smart_symbol_up: boolean;
    smart_symbol_down: boolean;
    prior_textbox_priceF: boolean;
    prior_textbox_qtyF: boolean;
  }
  // status HSX
export const fStatusMarketHSX = (value?: string) => {
    let valueStatus = "";
    g_arrHOMarketStatus.forEach((g_HSXStatus: any) => {
      if (g_HSXStatus[0] === value) {
        valueStatus = g_HSXStatus[2];
      }
    });
  
    return valueStatus;
  };
  //status sàn UPCOM
export const fStatusMarketUPCOM = (value?: string) => {
    let valueStatus = "";
    g_arrUPMarketStatus.forEach((g_UPCStatus) => {
      if (g_UPCStatus[0] === value) {
        valueStatus = g_UPCStatus[1];
      }
    });
    return valueStatus;
  };
  // status sàn HNX
export const fStatusMarketHNX = (value?: string) => {
    let valueStatus = "";
    g_arrHAMarketStatus.forEach((g_HNXStatus) => {
      if (g_HNXStatus[0] === value) {
        valueStatus = g_HNXStatus[1];
      }
    });
    return valueStatus;
  };
  const createMarketData = (
    type: boolean,
    name: string,
    valueHSX: ObjectMenuHSX,
    valueHNX: ObjectMenuHNX,
    visible: boolean,
 
    isUPCOM: boolean
  ): MarketData => {
    const marketData: MarketData = {
      type,
      name,
      id :,
      valueIndexChange: valueHSX?.[`${name}_IndexValue`] || valueHNX?.[`${name}_IndexValue`] as string,
      valueChange: valueHSX?.[`${name}_Change`] || valueHNX?.[`${name}_Change`] as string,
      valueChangePercent: valueHSX?.[`${name}_ChangePercent`] || valueHNX?.[`${name}_ChangePercent`] as string,
      visible,
      valueTotalSharesAOM: valueHSX?.[`${name}_TotalSharesAOM`] || valueHNX?.[`${name}_TotalSharesAOM`] as string,
      valueTotalValuesAOM: valueHSX?.[`${name}_TotalValuesAOM`] || valueHNX?.[`${name}_TotalValuesAOM`] as string,
      valueUp: valueHSX?.[`${name}_Up`] || valueHNX?.[`${name}_Up`] as string,
      valueCeiling: valueHSX?.[`${name}_Ceiling`] || valueHNX?.[`${name}_Ceiling`] as string,
      valueNoChange: valueHSX?.[`${name}_NoChange`] || valueHNX?.[`${name}_NoChange`] as string,
      valueDown: valueHSX?.[`${name}_Down`] || valueHNX?.[`${name}_Down`] as string,
      valueFloor: valueHSX?.[`${name}_Floor`] || valueHNX?.[`${name}_Floor`] as string,
      status: isUPCOM
        ? fStatusMarketUPCOM(valueHNX?.[`${name}_x336x340`] as string)
        : fStatusMarketHSX(valueHSX?.[`${name}_ControlCode`] || valueHNX?.[`${name}_x336x340`]),
      san: isUPCOM ? "HNX" : "HSX", // Modify this logic based on your needs
    };
  
    return marketData;
  };
  
  export function renderSlideMarket(
    type: IIndex,
    name: string,
    valueHSX: ObjectMenuHSX,
    valueHNX: ObjectMenuHNX,
    visible: boolean
  ): MarketData {
    switch (name) {
      case "VNXALL":
        return createMarketData(type.VNXALL, name, VNXALL, valueHSX, valueHNX, visible, fStatusMarketHSX, fStatusMarketHNX, fStatusMarketUPCOM, false);
      case "VNI":
        return createMarketData(type.VNI, name, VNI, valueHSX, valueHNX, visible, fStatusMarketHSX, fStatusMarketHNX, fStatusMarketUPCOM, false);
      case "VN30":
        return createMarketData(type.VN30, name, VN30, valueHSX, valueHNX, visible, fStatusMarketHSX, fStatusMarketHNX, fStatusMarketUPCOM, false);
      case "VN100":
        return createMarketData(type.VN100, name, VN100, valueHSX, valueHNX, visible, fStatusMarketHSX, fStatusMarketHNX, fStatusMarketUPCOM, false);
      case "VNALL":
        return createMarketData(type.VNALL, name, VNALL, valueHSX, valueHNX, visible, fStatusMarketHSX, fStatusMarketHNX, fStatusMarketUPCOM, false);
      case "VNMID":
        return createMarketData(type.VNMID, name, VNMID, valueHSX, valueHNX, visible, fStatusMarketHSX, fStatusMarketHNX, fStatusMarketUPCOM, false);
      case "VNSML":
        return createMarketData(type.VNSML, name, VNMSL, valueHSX, valueHNX, visible, fStatusMarketHSX, fStatusMarketHNX, fStatusMarketUPCOM, false);
      case "HNX":
        return createMarketData(type.HNX, name, HNX, valueHSX, valueHNX, visible, fStatusMarketHSX, fStatusMarketHNX, fStatusMarketUPCOM, true);
      case "HNX30":
        return createMarketData(type.HNX30, name, HNX30, valueHSX, valueHNX, visible, fStatusMarketHSX, fStatusMarketHNX, fStatusMarketUPCOM, true);
      case "HNXLCAP":
        return createMarketData(type.HNXLCAP, name, HNXLCAP, valueHSX, valueHNX, visible, fStatusMarketHSX, fStatusMarketHNX, fStatusMarketUPCOM, true);
      case "HNXSMCAP":
        return createMarketData(type.HNXSMCAP, name, HNXSMCAP, valueHSX, valueHNX, visible, fStatusMarketHSX, fStatusMarketHNX, fStatusMarketUPCOM, true);
      case "HNXFIN":
        return createMarketData(type.HNXFIN, name, HNXFIN, valueHSX, valueHNX, visible, fStatusMarketHSX, fStatusMarketHNX, fStatusMarketUPCOM, true);
      case "HNXMAN":
        return createMarketData(type.HNXMAN, name, HNXMAN, valueHSX, valueHNX, visible, fStatusMarketHSX, fStatusMarketHNX, fStatusMarketUPCOM, true);
      case "HNXCON":
        return createMarketData(type.HNXCON, name, HNXCON, valueHSX, valueHNX, visible, fStatusMarketHSX, fStatusMarketHNX, fStatusMarketUPCOM, true);
      case "UPCOM":
        return createMarketData(type.UPCOM, name, UPCOM, valueHSX, valueHNX, visible, fStatusMarketHSX, fStatusMarketHNX, fStatusMarketUPCOM, true);
      default:
        return {
          type: false,
          name,
          id: "", // Fill in the appropriate default value
          valueIndexChange: "",
          valueChange: "",
          valueChangePercent: "",
          visible: false, // Or set to an appropriate default value
          valueTotalSharesAOM: "",
          valueTotalValuesAOM: "",
          valueUp: "",
          valueCeiling: "",
          valueNoChange: "",
          valueDown: "",
          valueFloor: "",
          status: "Unknown", // Or set to an appropriate default value
          san: "Unknown", // Or set to an appropriate default value
        };
    }
  }
  