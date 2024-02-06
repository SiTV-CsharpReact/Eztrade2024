import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import chartIndexSlice from "../components/chartIndex/chartIndexSlice";
import companySlice from "../components/company/companyMarketwach";
import TradingViewSlice from "../components/chartTradingView/tradingViewSlice";
import configSlice from "../components/configSlice";
import loginSlice from "../components/loginSlice";
export const store = configureStore({
    reducer: {
     // liststockcode
    Company:companySlice.reducer,
   // chart index
    chartIndex: chartIndexSlice.reducer,
    //chart TradingView
    chartTradingView: TradingViewSlice.reducer,
    //set language color
    Config:configSlice.reducer,
    //login
    Login:loginSlice.reducer
    },
  });
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  export const useAppDispatch = () => useDispatch<AppDispatch>();
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;