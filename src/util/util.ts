export function formatNumberToM(value: any) {
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
export const formatNumberPhanTram = (number: any) => {
  var roundedNumber = Math.round(number * 100) / 100;
  return roundedNumber;
}