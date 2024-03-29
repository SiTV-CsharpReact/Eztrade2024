import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../../api/agent";
import { san_HNX } from "../../configs/app.config";
import { ObjectMenuHNX } from "../../model/ValueIndex";

export const fetchHNXMarketAsync = createAsyncThunk(
  "market/fetchIndexHNX",
  async () => {
    const responseIndexHNX = await agent.ValueIndex.get(san_HNX)
    return responseIndexHNX as ObjectMenuHNX;
  }
);

export const IndexHNXSlice = createSlice({
  name: "market_fetchIndexHNX",
  initialState: {
    isLoadingMarket: false,
    marketHNX: {
      valueHNX: {} as ObjectMenuHNX,
    },
    statusMarket: "idle",
  },
  reducers: {
    getDataHNX: (state, action: PayloadAction<ObjectMenuHNX>) => {
      state.marketHNX.valueHNX = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHNXMarketAsync.pending, (state) => {
        state.statusMarket = "loading";
      })
      .addCase(fetchHNXMarketAsync.fulfilled, (state, action) => {
        state.isLoadingMarket = true;
        state.statusMarket = "success";
        state.marketHNX.valueHNX = action.payload;
      })
      .addCase(fetchHNXMarketAsync.rejected, (state) => {
        state.isLoadingMarket = true;
        state.statusMarket = "failed";
      });
  },
});

export const { getDataHNX } = IndexHNXSlice.actions;

export default IndexHNXSlice;
