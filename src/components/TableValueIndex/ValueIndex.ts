import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import agent from "../../api/agent";

import { san_HSX } from "../../configs/app.config";
import { ObjectMenuHNX, ObjectMenuHSX } from "../../model/ValueIndex";
// san HSX
export const fetchHNXValueIndexAsync = createAsyncThunk(
  "market/fetchvalueIndexHNX",
  async () => {
    const responseHSX = await agent.ValueIndex.get(san_HSX);
    // console.log(responseHSX)
    return responseHSX as ObjectMenuHNX;
  }
);
// san HSX
export const fetchHSXValueIndexAsync = createAsyncThunk(
  "market/fetchvalueIndexHSX",
  async () => {
    const responseHSX = await agent.ValueIndex.get(san_HSX);
    // console.log(responseHSX)
    return responseHSX as ObjectMenuHSX;
  }
);

export const ValueIndexSlice = createSlice({
  name: "fetchIndexHNX",
  initialState: {
    isLoadingMarket: false,
    valueIndexHNX: {
      valueHSX: {} as ObjectMenuHNX,
    },
    valueIndexHSX: {
      valueHSX: {} as ObjectMenuHSX,
    },
    statusMarket: "idle",
  },
  reducers: {
    getDataHSX: (state, action: PayloadAction<ObjectMenuHNX>) => {
      state.valueIndexHNX.valueHSX = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHNXValueIndexAsync.pending, (state) => {
        state.statusMarket = "loading";
      })
      .addCase(fetchHNXValueIndexAsync.fulfilled, (state, action) => {
        state.isLoadingMarket = true;
        state.statusMarket = "success";
        state.valueIndexHNX.valueHSX = action.payload;
        console.log(state.valueIndexHNX.valueHSX);
      })
      .addCase(fetchHNXValueIndexAsync.rejected, (state) => {
        state.isLoadingMarket = true;
        state.statusMarket = "failed";
      })
      .addCase(fetchHSXValueIndexAsync.pending, (state) => {
        state.statusMarket = "loading";
      })
      .addCase(fetchHSXValueIndexAsync.fulfilled, (state, action) => {
        state.isLoadingMarket = true;
        state.statusMarket = "success";
        state.valueIndexHSX.valueHSX = action.payload;
        console.log(state.valueIndexHSX.valueHSX);
      })
      .addCase(fetchHSXValueIndexAsync.rejected, (state) => {
        state.isLoadingMarket = true;
        state.statusMarket = "failed";
      });
  },
});

export const { getDataHSX } = ValueIndexSlice.actions;

export default ValueIndexSlice;
