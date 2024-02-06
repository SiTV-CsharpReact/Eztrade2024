
export interface IData {
  Time: string;
  Data: {
    Index: number;
    TimeJS: number;
    Vol: number;
  };
}

export interface IDataFullHNX {
  HNX30: IData[];
  HNX30TRI: IData[];
  HNXCon: IData[];
  HNXFin: IData[];
  HNXIndex: IData[];
  HNXLCap: IData[];
  HNXMSCap: IData[];
  HNXMan: IData[];
  HNXUPCoMPremium: IData[];
  HNXUpcomIndex: IData[];
}

export interface IHNX {
  LastIndex: {
    HNX30: number;
    HNX30TRI: number;
    HNXCon: number;
    HNXFin: number;
    HNXIndex: number;
    HNXLCap: number;
    HNXMSCap: number;
    HNXMan: number;
    HNXUPCoMPremium: number;
    HNXUpcomIndex: number;
    TradingDate?: string;
  };
  DataFull: IDataFullHNX;
}

export interface IHSX {
  LastIndex: {
    TradingDate?: string;
    VN30: number;
    VN100: number;
    VNALL: number;
    VNIndex: number;
    VNMID: number;
    VNSML: number;
    VNXALL: number;
  };
  DataFull: IDataFullHSX;
}

export interface IDataFullHSX {
  VN30: IData[];
  VN100: IData[];
  VNALL: IData[];
  VNIndex: IData[];
  VNMID: IData[];
  VNSML: IData[];
  VNXALL: IData[];
}


export interface IChartIndex {
  HSX: IHSX;
  HNX: IHNX;
  IsWorkingDay: string;
}

// setup initialState for redux
export interface IState {
  isLoading: boolean;
  dataChartIndex: IChartIndex;
  dataChartIndexTime: IDataSS;
  configChartIndex: string;
  Max: string;
  timeGet: string;
  status: string;
}
export interface ISlideMarket {
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
  // dataChartIndex: IChartIndex;
}

export interface IPropsSlideMarket {
  data: ISlideMarket;
}

export interface IACTION_LIST {
  GET_SS: string;
  GET_CDT: string;
}

export interface IRP {
  s: string;
  m: string;
}

export interface IDataCDT {
  IsBreakingTime: boolean;
  IsStartingTime: boolean;
  IsWorkingDay: boolean;
  IsWorkingTime: boolean;
  LoadRedis: boolean;
  Now: string;
}

export interface IDataSS {
  Max: number;
  SS: null | DataReponseHNX_HSX[];
}

export interface DataReponseHNX_HSX {
  HNX: HNX;
  HSX: HSX;
}

export interface HNX {
  HNX30: IDataHNX_HSX[];
  HNX30TRI: IDataHNX_HSX[];
  HNXCon: IDataHNX_HSX[];
  HNXFin: IDataHNX_HSX[];
  HNXIndex: IDataHNX_HSX[];
  HNXLCap: IDataHNX_HSX[];
  HNXMSCap: IDataHNX_HSX[];
  HNXMan: IDataHNX_HSX[];
  HNXUPCoMPremium: IDataHNX_HSX[];
  HNXUpcomIndex: IDataHNX_HSX[];
}

export interface HSX {
  VN30: IDataHNX_HSX[];
  VN100: IDataHNX_HSX[];
  VNALL: IDataHNX_HSX[];
  VNIndex: IDataHNX_HSX[];
  VNMID: IDataHNX_HSX[];
  VNSML: IDataHNX_HSX[];
  VNXALL: IDataHNX_HSX[];
}

export interface IDataHNX_HSX {
  Time: string;
  Data: {
    Index: number;
    TimeJS: number;
    Vol: number;
  };
}
export interface ObjectMenuHSX {
  STAT_ControlCode: string;
  STAT_Time: string;
  STAT_Date: string;
  VNI_ChangePercent: string;
  VNI_Change: string;
  VNI_IndexValue: string;
  VNI_TotalTrade: string;
  VNI_TotalSharesAOM: string;
  VNI_TotalValuesAOM: string;
  VNI_UpVolume: string;
  VNI_NoChangeVolume: string;
  VNI_DownVolume: string;
  VNI_Up: string;
  VNI_Down: string;
  VNI_NoChange: string;
  VNI_Time: string;
  VNI_Ceiling: string;
  VNI_Floor: string;
  VNI_TotalSharesOld: string;
  VN30_ChangePercent: string;
  VN30_Change: string;
  VN30_IndexValue: string;
  VN30_TotalSharesAOM: string;
  VN30_TotalValuesAOM: string;
  VN30_TotalSharesPT: string;
  VN30_TotalValuesPT: string;
  VN30_Up: string;
  VN30_Down: string;
  VN30_NoChange: string;
  VN30_Ceiling: string;
  VN30_Floor: string;
  VN30_Time: string;
  VN100_ChangePercent: string;
  VN100_Change: string;
  VN100_IndexValue: string;
  VN100_TotalSharesAOM: string;
  VN100_TotalValuesAOM: string;
  VN100_TotalSharesPT: string;
  VN100_TotalValuesPT: string;
  VN100_Up: string;
  VN100_Down: string;
  VN100_NoChange: string;
  VN100_Ceiling: string;
  VN100_Floor: string;
  VN100_Time: string;
  VNALL_ChangePercent: string;
  VNALL_Change: string;
  VNALL_IndexValue: string;
  VNALL_TotalSharesAOM: string;
  VNALL_TotalValuesAOM: string;
  VNALL_TotalSharesPT: string;
  VNALL_TotalValuesPT: string;
  VNALL_Up: string;
  VNALL_Down: string;
  VNALL_NoChange: string;
  VNALL_Ceiling: string;
  VNALL_Floor: string;
  VNALL_Time: string;
  VNXALL_ChangePercent: string;
  VNXALL_Change: string;
  VNXALL_IndexValue: string;
  VNXALL_TotalSharesAOM: string;
  VNXALL_TotalValuesAOM: string;
  VNXALL_TotalSharesPT: string;
  VNXALL_TotalValuesPT: string;
  VNXALL_Up: string;
  VNXALL_Down: string;
  VNXALL_NoChange: string;
  VNXALL_Ceiling: string;
  VNXALL_Floor: string;
  VNXALL_Time: string;
  VNMID_ChangePercent: string;
  VNMID_Change: string;
  VNMID_IndexValue: string;
  VNMID_TotalSharesAOM: string;
  VNMID_TotalValuesAOM: string;
  VNMID_TotalSharesPT: string;
  VNMID_TotalValuesPT: string;
  VNMID_Up: string;
  VNMID_Down: string;
  VNMID_NoChange: string;
  VNMID_Ceiling: string;
  VNMID_Floor: string;
  VNMID_Time: string;
  VNSML_ChangePercent: string;
  VNSML_Change: string;
  VNSML_IndexValue: string;
  VNSML_TotalSharesAOM: string;
  VNSML_TotalValuesAOM: string;
  VNSML_TotalSharesPT: string;
  VNSML_TotalValuesPT: string;
  VNSML_Up: string;
  VNSML_Down: string;
  VNSML_NoChange: string;
  VNSML_Ceiling: string;
  VNSML_Floor: string;
  VNSML_Time: string;
  INAV_StockNo: string;
  INAV_StockSymbol: string;
  INAV_iNAV: string;
  INAV_Time: string;
  IINDEX_iIndexSymbol: string;
  IINDEX_ETFSymbol: string;
  IINDEX_IndexSymbol: string;
  IINDEX_iIndex: string;
  IINDEX_Time: string;
}
export interface ObjectMenuHNX {
  i215_5: string;
  i215_6: string;
  i215_3: string;
  i215_7: string;
  i215_14: string;
  i215_x251: string;
  i215_x252: string;
  i215_x253: string;
  i215_x251c: string;
  i215_x253f: string;
  i215_x336x340: string;
  i311_5: string;
  i311_6: string;
  i311_3: string;
  i311_7: string;
  i311_14: string;
  i311_x251: string;
  i311_x252: string;
  i311_x253: string;
  i311_x251c: string;
  i311_x253f: string;
  i311_x336x340: string;
  i218_5: string;
  i218_6: string;
  i218_3: string;
  i218_7: string;
  i218_14: string;
  i218_x251: string;
  i218_x252: string;
  i218_x253: string;
  i218_x251c: string;
  i218_x253f: string;
  i218_x336x340: string;
  i216_5: string;
  i216_6: string;
  i216_3: string;
  i216_7: string;
  i216_14: string;
  i216_x251: string;
  i216_x252: string;
  i216_x253: string;
  i216_x251c: string;
  i216_x253f: string;
  i216_x336x340: string;
  i212_5: string;
  i212_6: string;
  i212_3: string;
  i212_7: string;
  i212_14: string;
  i212_x251: string;
  i212_x252: string;
  i212_x253: string;
  i212_x251c: string;
  i212_x253f: string;
  i212_x336x340: string;
  i219_5: string;
  i219_6: string;
  i219_3: string;
  i219_7: string;
  i219_14: string;
  i219_x251: string;
  i219_x252: string;
  i219_x253: string;
  i219_x251c: string;
  i219_x253f: string;
  i219_x336x340: string;
  i39_5: string;
  i39_6: string;
  i39_3: string;
  i39_7: string;
  i39_14: string;
  i39_x251: string;
  i39_x252: string;
  i39_x253: string;
  i39_x251c: string;
  i39_x253f: string;
  i39_x336x340: string;
  i220_5: string;
  i220_6: string;
  i220_3: string;
  i220_7: string;
  i220_14: string;
  i220_x251: string;
  i220_x252: string;
  i220_x253: string;
  i220_x251c: string;
  i220_x253f: string;
  i220_x336x340: string;
  i26_5: string;
  i26_6: string;
  i26_3: string;
  i26_7: string;
  i26_14: string;
  i26_x251: string;
  i26_x252: string;
  i26_x253: string;
  i26_x251c: string;
  i26_x253f: string;
  i26_x336x340: string;
  i02_5: string;
  i02_6: string;
  i02_3: string;
  i02_7: string;
  i02_14: string;
  i02_x251: string;
  i02_x252: string;
  i02_x253: string;
  i02_x251c: string;
  i02_x253f: string;
  i02_x336x340: string;
  i28_5: string;
  i28_6: string;
  i28_3: string;
  i28_7: string;
  i28_14: string;
  i28_x251: string;
  i28_x252: string;
  i28_x253: string;
  i28_x251c: string;
  i28_x253f: string;
  i28_x336x340: string;
  i223_5: string;
  i223_6: string;
  i223_3: string;
  i223_7: string;
  i223_14: string;
  i223_x251: string;
  i223_x252: string;
  i223_x253: string;
  i223_x251c: string;
  i223_x253f: string;
  i223_x336x340: string;
  i41_5: string;
  i41_6: string;
  i41_3: string;
  i41_7: string;
  i41_14: string;
  i41_x251: string;
  i41_x252: string;
  i41_x253: string;
  i41_x251c: string;
  i41_x253f: string;
  i41_x336x340: string;
  i03_5: string;
  i03_6: string;
  i03_3: string;
  i03_7: string;
  i03_14: string;
  i03_x251: string;
  i03_x252: string;
  i03_x253: string;
  i03_x251c: string;
  i03_x253f: string;
  i03_x336x340: string;
  i310_5: string;
  i310_6: string;
  i310_3: string;
  i310_7: string;
  i310_14: string;
  i310_x251: string;
  i310_x252: string;
  i310_x253: string;
  i310_x251c: string;
  i310_x253f: string;
  i310_x336x340: string;
  i222_5: string;
  i222_6: string;
  i222_3: string;
  i222_7: string;
  i222_14: string;
  i222_x251: string;
  i222_x252: string;
  i222_x253: string;
  i222_x251c: string;
  i222_x253f: string;
  i222_x336x340: string;
  i221_5: string;
  i221_6: string;
  i221_3: string;
  i221_7: string;
  i221_14: string;
  i221_x251: string;
  i221_x252: string;
  i221_x253: string;
  i221_x251c: string;
  i221_x253f: string;
  i221_x336x340: string;
  i217_5: string;
  i217_6: string;
  i217_3: string;
  i217_7: string;
  i217_14: string;
  i217_x251: string;
  i217_x252: string;
  i217_x253: string;
  i217_x251c: string;
  i217_x253f: string;
  i217_x336x340: string;
  i224_5: string;
  i224_6: string;
  i224_3: string;
  i224_7: string;
  i224_14: string;
  i224_x251: string;
  i224_x252: string;
  i224_x253: string;
  i224_x251c: string;
  i224_x253f: string;
  i224_x336x340: string;
}