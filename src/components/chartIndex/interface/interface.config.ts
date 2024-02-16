
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
  dataValueIndex:object;
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
