import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import agent from "../../api/agent";

import { listSettingIndex, san_HSX } from "../../configs/app.config";
import { ObjectMenuHNX, ObjectMenuHSX } from "../../model/ValueIndex";
import { Index } from "../../model/Index";
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
    valueIndexHNX: {} as ObjectMenuHNX,
    valueIndexHSX: {} as ObjectMenuHSX,
    listIndexHSX:[] as Index[],
    listIndexHNX:[] as any[],
    statusMarket: "idle",
  },
  reducers: {
    getDataHSX: (state, action: PayloadAction<ObjectMenuHNX>) => {
      state.valueIndexHNX = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHNXValueIndexAsync.pending, (state) => {
        state.statusMarket = "loading";
      })
      .addCase(fetchHNXValueIndexAsync.fulfilled, (state, action:any) => {
        state.isLoadingMarket = true;
        state.statusMarket = "success";
        const vniObjects = [] ;
        const data = action.payload;
        
        for (const settingIndex of listSettingIndex) {
          const obj = {} as Index;
          let hasMatchingProperty = false; // Tạo một đối tượng mới cho mỗi settingIndex
          for (const key in data) {
            if (key.startsWith(settingIndex)) {
              hasMatchingProperty = true;
              const splittedKey = key.split("_"); // Tách key bằng dấu '_'
              const propName = splittedKey.slice(1).join("_"); // Lấy phần sau khi đã tách
              obj[propName] = data[key]; // Gán giá trị vào đối tượng với key mới
              obj.IndexId = settingIndex;
              obj.Exchange = "HSX";
            }
            
          }
          if (hasMatchingProperty) {
       // Thêm thuộc tính StockCode nếu có ít nhất một thuộc tính phù hợp
            vniObjects.push(obj); // Thêm đối tượng vào mảng nếu có ít nhất một thuộc tính phù hợp
          }
         // Thêm thuộc tính StockCode
          // Thêm đối tượng vào mảng
        }
        
        state.listIndexHSX = vniObjects;
        state.valueIndexHNX = action.payload;
        //console.log(state.valueIndexHNX.valueHSX);
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
        state.valueIndexHSX = action.payload;
        // console.log(state.valueIndexHSX.valueHSX);
      })
      .addCase(fetchHSXValueIndexAsync.rejected, (state) => {
        state.isLoadingMarket = true;
        state.statusMarket = "failed";
      });
  },
});

export const { getDataHSX } = ValueIndexSlice.actions;

export default ValueIndexSlice;
