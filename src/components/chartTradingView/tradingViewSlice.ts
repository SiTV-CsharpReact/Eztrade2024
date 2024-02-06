
import { PayloadAction, createSlice } from '@reduxjs/toolkit';


interface ComponentState {
    statusTradingView:boolean;
    stockCode?:string
    Exchange?:number;
  }
  
  const initialState: ComponentState = {
    statusTradingView:false,
    stockCode:'',
    Exchange:0
  };
const TradingViewSlice = createSlice({
  name: "marketwatch/tradingview",
  initialState,
  reducers: {
    setStatusTradingView: (state, action: PayloadAction<ComponentState>) => {
      state.statusTradingView = action.payload.statusTradingView;
      state.stockCode = action.payload.stockCode;
      state.Exchange = action.payload.Exchange;
    }
  }
});

export const { setStatusTradingView  } = TradingViewSlice.actions;
export default TradingViewSlice;
