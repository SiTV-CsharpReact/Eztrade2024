import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../../api/agent";

export interface Root {
    Code: number
    Message: string
    Data: Company[]
  }
  
  export interface Company {
    Code: string
    Exchange: number
    ScripName: string
    Basic_Price: number
    Ceiling_Price: number
    Floor_Price: number
    Stock_Type2: number
    ScripNameEN: string
    ID: string
  }
  export const fetchCompanyAsync = createAsyncThunk(
    "maketwatch/getCompanyAsync",
    async () => {
      try {
        const responseCompany: any = await agent.Company.get();
        if (responseCompany) {
          const result: Company[] = JSON.parse(responseCompany);

          const data = {
            listStockCode: result.sort((a: Company, b: Company) =>
              a.Code.localeCompare(b.Code)
            ),
          
          };
          localStorage.setItem("companyData", JSON.stringify(data));
        }
        return null; // hoặc giá trị mặc định khác tùy vào yêu cầu của bạn
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu công ty:", error);
        return null; // hoặc giá trị mặc định khác tùy vào yêu cầu của bạn
      }
    }
  );
export const companySlice = createSlice({
  name: "company",
  initialState: {
    productsLoaded: false,
    dataCompanyTotal: [] as Company[],
    dataCompanyUpcom: [] as Company[],
    dataCompanyHNX: [] as Company[],
    dataCompanyHSX: [] as Company[],
    status: 0,
    dataDetail :null ,
  },

  reducers: {
   

  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanyAsync.pending, (state) => {
        state.productsLoaded = false;
        state.status = 1;
        state.dataCompanyTotal =[]
      })
      .addCase(fetchCompanyAsync.fulfilled, (state) => {
        state.productsLoaded = true;
        state.status = 2;
        
      })

      .addCase(fetchCompanyAsync.rejected, (state) => {
     
        state.productsLoaded = true;
        state.status = 3;
        state.dataCompanyHSX = [];
        state.dataCompanyHNX = [];
        state.dataCompanyUpcom = [];
        state.dataCompanyTotal = [];
      });
  },
});

export default companySlice;
  
        //   const dataCompanyHSX = result.filter(
        //     (item: Company) => item.Exchange === 1
        //   );
        //   const dataCompanyHNX = result.filter(
        //     (item: Company) => item.Exchange === 2
        //   );
        //   const dataCompanyUpcom = result.filter(
        //     (item: Company) => item.Exchange === 3
        //   );
  