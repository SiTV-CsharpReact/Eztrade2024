import { g_arrHAMarketStatus, g_arrHOMarketStatus, g_arrUPMarketStatus } from "../configs/app.config";

export function formatNumbertoDecimal(number: any) {
  const decimalPart = number % 1;
  if (decimalPart !== 0) {
    return number.toFixed(2);
  } else {
    return number.toString();
  }
}
export function formatNumber(number: any) {
  if (!number || number === 0 || number === "0") return 0; // hoac ''
  else return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}
export function formatNumberMarket(number: any) {
  if (!number || number === 0 || number === "0") return ""; // hoac ''
  else return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}
// export const formatNumberPhanTram = (number: any) => {
//   var roundedNumber = Math.round(number * 100) / 100;
//   return roundedNumber;
// }
export const setColorMenuMarket = (value?: string) => {
  let Color = "text-color-down";
  if (value) {
    if (value.includes("-")) {
      Color = "text-color-down";
    } else if (value === "0") {
      Color = "text-color-down";
    } else {
      Color = "text-color-up";
    }
  }
  return Color;
};
// status sàn HNX
export const fStatusMarketHNX = (value?: string) => {
  let valueStatus = "";
  g_arrHAMarketStatus.forEach((g_HNXStatus) => {
    if (g_HNXStatus[0] === value) {
      valueStatus = g_HNXStatus[1];
    }
  });
  return valueStatus;
};
// status HSX
export const fStatusMarketHSX = (value?: string) => {
  let valueStatus = "";
  g_arrHOMarketStatus.forEach((g_HSXStatus: any) => {
    if (g_HSXStatus[0] === value) {
      valueStatus = g_HSXStatus[2];
    }
  });

  return valueStatus;
};
//status sàn UPCOM
/* `export const` is used in TypeScript to export a constant variable or function from a module so that
it can be imported and used in other modules. When a variable or function is exported using `export
const`, it can be accessed by other modules that import the module where the export is defined. This
allows for better organization and reusability of code in a TypeScript project. */
/* `export const` is used in TypeScript to export a constant variable or function from a module so that
it can be imported and used in other modules. This allows the exported constant to be accessed and
used in other parts of the codebase. */
export const fStatusMarketUPCOM = (value?: string) => {
  let valueStatus = "";
  g_arrUPMarketStatus.forEach((g_UPCStatus) => {
    if (g_UPCStatus[0] === value) {
      valueStatus = g_UPCStatus[1];
    }
  });
  return valueStatus;
};
export const formatNumberToM = (value: any) => {
  // Kiểm tra nếu giá trị lớn hơn hoặc bằng 1 triệu
  if (value >= 1000000) {
    // Chia cho 1 triệu và làm tròn đến 2 chữ số thập phân
    return (value / 1000000).toFixed(2) + "M";
  } else {
    // Giữ nguyên giá trị nếu nhỏ hơn 1 triệu
    if (!value || value === 0 || value === "0") return 0; // hoac ''
    else return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  }
}
export const _getDateTs = (dateTime: any): number => {
  let d: number = 0; // Khởi tạo biến d với kiểu number và gán giá trị ban đầu là 0
  if (dateTime instanceof Date) {
    // Kiểm tra xem dateTime có phải là một đối tượng Date không
    d = dateTime.getTime(); // Lấy thời gian Unix của dateTime
  } else if (typeof dateTime === "string") {
    // Kiểm tra xem dateTime có kiểu là string không
    d = new Date(dateTime).getTime(); // Chuyển đổi chuỗi thành đối tượng Date và lấy thời gian Unix
  }
  return d; // Trả về giá trị thời gian Unix
}