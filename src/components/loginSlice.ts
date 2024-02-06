import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import agent from "../api/agent";

// Định nghĩa interface cho dữ liệu đăng nhập
interface LoginData {
  username: string;
  password: string;
}
export interface ProfileAccount {
    LoginName: string
    Password: string
    TradingPassword: any
    Source: any
    IpClient: any
    IpServer: any
    SessionToken: string
    Referer: any
    UserAgent: any
    Browser: any
    IsMobile: any
    BrowserName: any
    BrowserVers: any
    ClientCode: string
    ClientName: string
    SessionNo: string
    CheckSession: number
    LoginStatus: number
    RsaToken: number
    CheckTradingPassword: number
    IsCheckSessionSuccess: boolean
    IsFirstLogin: boolean
    IsRsaTokenTradingPassword: boolean
    RsaMessage: string
    CheckPass2: number
    TradingPass1By1: number
  }
  // Trạng thái ban đầu của authentication
const emptyProfileAccount: ProfileAccount = {
    LoginName: "",
    Password: "",
    TradingPassword: null,
    Source: null,
    IpClient: null,
    IpServer: null,
    SessionToken: "",
    Referer: null,
    UserAgent: null,
    Browser: null,
    IsMobile: null,
    BrowserName: null,
    BrowserVers: null,
    ClientCode: "",
    ClientName: "",
    SessionNo: "",
    CheckSession: 0,
    LoginStatus: 0,
    RsaToken: 0,
    CheckTradingPassword: 0,
    IsCheckSessionSuccess: false,
    IsFirstLogin: false,
    IsRsaTokenTradingPassword: false,
    RsaMessage: "",
    CheckPass2: 0,
    TradingPass1By1: 0
  };
  
// Tạo hàm async thực hiện đăng nhập
export const loginAsync = createAsyncThunk(
  'auth/login',
  async (loginData: LoginData) => {
    try {
      // Gọi API để xác thực thông tin đăng nhập
      const response = await agent.Login.post(loginData);
      
      console.log(response)
      return response; // Trả về dữ liệu phản hồi từ server (nếu cần)
    } catch (error) {
      console.log(error);
    }
  }
);

// Định nghĩa trạng thái cho authentication
interface AuthState {
  isAuthenticated: boolean;
  ProfileAccount:ProfileAccount;
  loading: boolean;
  error: string | null;
  // Các trường dữ liệu khác có thể cần thiết cho authentication có thể được thêm vào ở đây
}

// Trạng thái ban đầu của authentication
const initialState: AuthState = {
  isAuthenticated: false,
  ProfileAccount:emptyProfileAccount,
  loading: false,
  error: null,
  // Khởi tạo các giá trị khác nếu cần
};

// Tạo slice cho authentication
const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action để đăng nhập thành công
    loginSuccess: (state) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    // Action để đăng xuất
    logout: (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
    // Các actions khác có thể được thêm vào ở đây
  },
  extraReducers: (builder) => {
    // Xử lý action loginAsync
    builder.addCase(loginAsync.pending, (state) => {
      state.loading = true; // Đánh dấu là đang thực hiện đăng nhập
      state.error = null; // Xóa bỏ lỗi nếu có
    });
    builder.addCase(loginAsync.fulfilled, (state,action) => {
      if(action.payload.Code == 0){
        state.isAuthenticated = true; // Đánh dấu là đã đăng nhập thành công
        state.loading = false; // Đánh dấu kết thúc quá trình đăng nhập
        state.error = null; // Xóa bỏ lỗi nếu có
        state.ProfileAccount = action.payload.Data
      }
   
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.isAuthenticated = false; // Đánh dấu là không đăng nhập thành công
      state.loading = false; // Đánh dấu kết thúc quá trình đăng nhập
      state.error = action.payload as string; // Lưu lỗi nếu có
    });
  },
});

// Export các actions từ slice
export const { loginSuccess, logout } = loginSlice.actions;
// Export reducer của slice
export default loginSlice;
