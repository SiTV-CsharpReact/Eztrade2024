import Downshift from "downshift";
import { useAppDispatch } from "../../../store/configStore";
import { setStatusTradingView } from "../../chartTradingView/tradingViewSlice";
import { memo, useEffect, useRef, useState } from "react";
import { Company } from "../../company/companyMarketwach";
import { SearchIcon } from "../../ui/icons/SearchIcon";
import agent from "../../../api/agent";
const getHighlightedText = (text: string, highlight: string) => {
  const input = highlight.toLowerCase();
  const startIndex = text.toLowerCase().indexOf(input);
  const endIndex = startIndex + input.length;

  if (startIndex === -1) {
    return text;
  }
  return (
    <span className="text-sm min-w-[80px]">
      {text.substring(0, startIndex)}
      <span className="font-semibold text-[#1AAF74]">
        {text.substring(startIndex, endIndex)}
      </span>
      {text.substring(endIndex)}
    </span>
  );
  // };
};

function SearchStockCode() {
  const dispatch = useAppDispatch();
  const [dataSearchStockCode, setDataSearchStockCode] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem("companyData");
        if (!storedData) {
          const data = await agent.Company.get();
          localStorage.setItem("companyData", JSON.stringify(data));
          setDataSearchStockCode(data as string);
        } else {
          // Nếu có dữ liệu trong localStorage, cập nhật state dataSearchStockCode
          setDataSearchStockCode(storedData as string);
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu công ty từ API:", error);
      }
    };

    fetchData();
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Kiểm tra xem người dùng đã nhấn Ctrl + K chưa
      if (event.ctrlKey && event.key === "k") {
        // Ngăn chặn hành vi mặc định của sự kiện
        event.preventDefault();

        // Focus vào input khi nhấn Ctrl + K
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    };

    // Thêm sự kiện lắng nghe vào cả trang (hoặc phần tử nào đó)
    document.addEventListener("keydown", handleKeyDown);

    // Hủy sự kiện lắng nghe khi component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <Downshift
      onChange={(selection, { clearSelection }) => {
        if (selection) {
          dispatch(
            setStatusTradingView({
              Exchange: selection.Exchange,
              stockCode: selection.Code,
              statusTradingView: true,
            })
          );
        }
        // Xóa giá trị của input sau khi chọn
        clearSelection();
      }}
      itemToString={(item) => (item ? item.Code : "")}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => (
        <div className="relative">
          <div className="absolute ml-1 top-1.5 left-1">
            <SearchIcon />
          </div>

          <input
            {...getInputProps()}
            className="bg-[#3f4044] pl-6 p-1 rounded mx-1 input_search_stock max-w-36"
            placeholder="Tìm kiếm"
            ref={inputRef}
          ></input>

          <div className="absolute top-0.5 right-1 text-[10px] font-bold leading-5 ml-1 mr-0.5 border border-solid border-[#2f3a46] bg-[#141a1f] px-1 rounded">
            Ctril+k
          </div>
          {/* <input {...getInputProps()} /> */}
          <ul
            {...getMenuProps()}
            className="text-black absolute top-10 right-0  z-20 max-h-[400px] w-[400px] custom-scrollbar overflow-y-auto rounded bg-[#646464]"
          >
            {isOpen
              ? dataSearchStockCode &&
                JSON.parse(dataSearchStockCode)
                  .filter(
                    (item: Company) =>
                      !inputValue ||
                      item.Code.startsWith(inputValue.toUpperCase())
                  )
                  .map((item: Company, index: number) => (
                    <li
                      {...getItemProps({
                        key: item.Code,
                        index,
                        item,
                        style: {
                          padding: 5,
                          cursor: "pointer",
                          backgroundColor:
                            highlightedIndex === index
                              ? "lightgray"
                              : "#646464",
                          fontWeight: selectedItem === item ? "bold" : "normal",
                          color: "#ededed",
                          display: "flex",
                        },
                      })}
                    >
                      {inputValue &&
                        getHighlightedText(
                          `${item.Code}`,
                          inputValue.toUpperCase()
                        )}
                      <span className="">{item.ScripName}</span>
                      <span className="ml-auto text-[10px]">
                        {item.Exchange === 1
                          ? "HOSE"
                          : item.Exchange === 2
                          ? "HNX"
                          : "UPCOM"}
                      </span>
                    </li>
                  ))
              : null}
          </ul>
        </div>
      )}
    </Downshift>
  );
}
export default memo(SearchStockCode);
