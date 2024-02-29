import axios, { AxiosResponse } from "axios";
import { IDataCDT } from "../components/chartIndex/interface/interface.config";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const BASE_URL = "https://marketstream.fpts.com.vn/";

export interface IRP {
  s: string;
  m: string;
}

const requests = {
  get: <T>(url: string, params?: URLSearchParams) =>
    axios.get<T>(url, { params }).then(responseBody),
    post: (url: string, body: object) => axios.post(url, body).then(responseBody),
  postFormData: <T>(url: string, body: object) =>
    axios
      .post<T>(url, body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        return responseBody<T>(response);
      })
      .catch((error) => {
        console.log("Lỗi trong quá trình gửi yêu cầu: " + error);
        throw error;
      }),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Account = {
  get: () => requests.get("/trade/api/ApiData/ProfileAccount"),
};
const Login ={
  post: (data:any) => requests.post("http://localhost:8420/api/stock/v1/account/ore_authen_login",data),
}
const chartIndex = {
  get: () => requests.get<string[]>(BASE_URL + "/chart/data.ashx?s=full"),
  getSS: () => requests.get<any>(BASE_URL + `/chart/data.ashx?s=config&v=20160829061939`),
  getTimeSS: (dataChartIndex: IRP) => requests.postFormData<any>(BASE_URL + "/chart/data.ashx", dataChartIndex),
  getCDT: (value_getCDT: string) => requests.get<IDataCDT>(BASE_URL + `/chart/data.ashx?s=${value_getCDT}`),
};
const ValueIndex = {
  get: (floor:string) => requests.get(BASE_URL+`${floor}/data.ashx?s=index`),
};
// get cache data stock info
const Company = {
  get: () =>
    requests.get(
      "http://eztrade4.fpts.com.vn/api/ApiData/get_cache_stockinfo"
    ),
};
const agent = {
  Account,
  chartIndex,
  ValueIndex,
  Company,
  Login
};

export default agent;
