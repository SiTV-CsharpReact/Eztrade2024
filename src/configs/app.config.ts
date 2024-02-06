export const san_HNX = "hnx";
export const san_HSX = "hsx";
export const COOKIE_SESSION_NAME = "aspfpt_sessiontoken";
export const FEE_RATE_TP = "0.0005";
export const g_arrHOMarketStatus = [
    ["P", "Bắt đầu đợt KL định kỳ mở cửa", "ATO"],
    ["O", "Bắt đầu đợt KL lien tục", "Liên tục"],
    ["A", "Bắt đầu đợt KL định kỳ đóng cửa", "ATC"],
    ["C", "Đóng cửa MainBoard", "Thỏa thuận"],
    ["F", "Kết thúc nghỉ giữa đợt", "Kết thúc nghỉ giữa đợt"],
    ["H", "Ngưng giao dịch tất cả CK", "Ngưng GD"],
    ["I", "Bắt đầu nghỉ giữa đợt", "Nghỉ trưa"],
    ["K", "Kết thúc đợt Runn-off", "Đóng cửa"],
    ["N", "Giao dịch trở lại của CK cụ thể", "Giao dịch trở lại của CK cụ thể"],
    ["R", "Giao dịch trở lại tất cả CK", "Giao dịch trở lại tất cả CK"],
    ["G", "Đóng cửa", "Đóng cửa"],
    ["J", "Đóng cửa", "Đóng cửa"],
  ];
  export const g_arrHAMarketStatus = [
    // HNX
    ["LIS_AUC_C_NML_1", "ATC"], // ATC
    ["LIS_AUC_C_NML_LOC_1", "ATC (chặn hủy sửa)"], // ATC
    ["LIS_AUC_C_NEW_1", "ATC"], // ATC
    ["LIS_AUC_C_NEW_LOC_1", "ATC (chặn hủy sửa)"], // ATC
    ["LIS_CON_NML_90", "Đóng cửa"],
    ["LIS_CON_NML_2", "Nghỉ trưa"],
    ["LIS_CON_NML_1", "Liên tục"],
    ["LIS_PTH_P_NML_13", "Đóng cửa"],
    ["LIS_PTH_P_NML_1", "Thỏa thuận"],
    ["LIS_PTH_P_NML_97", "Đóng cửa"],
    ["LIS_CON_NEW_90", "Đóng cửa"],
    ["LIS_CON_NEW_2", "Nghỉ trưa"],
    ["LIS_CON_NEW_1", "Liên tục"],
    //thêm 2020-02-19 9h28 longht
    ["BON_CON_NML_1", "Liên tục"], //đã thêm 2020-02-19
    ["BON_CON_NML_2", "Nghỉ trưa"], //đã thêm 2020-02-19
    ["BON_PTH_P_NML_13", "Đóng cửa"], //đã thêm 2020-02-19
    ["BON_PTH_P_NML_1", "Thỏa thuận"], //2020-02-19
    ["BON_PTH_P_NML_97", "Đóng cửa"], //đã thêm 2020-02-19
    ["BON_AUC_C_NML_1", "ATC"], // ATC
  ];
  
  export const g_arrUPMarketStatus = [
    // UPCOM
    ["UPC_CON_NML_97", "Đóng cửa"],
    ["UPC_CON_NML_13", "Đóng cửa (kết thúc nhận lệnh)"],
    ["UPC_CON_NML_1", "Liên tục"],
    ["UPC_CON_NML_2", "Nghỉ trưa"],
    ["UPC_CON_NML_90", "Đóng cửa (chờ nhận lệnh)"],
    ["UPC_CON_NEW_97", "Đóng cửa"],
    ["UPC_CON_NEW_13", "Đóng cửa (kết thúc nhận lệnh)"],
    ["UPC_CON_NEW_1", "Liên tục"],
    ["UPC_CON_NEW_2", "Nghỉ trưa"],
    ["UPC_CON_NEW_90", "Đóng cửa (chờ nhận lệnh)"],
  ];