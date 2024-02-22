import React, { useState } from "react";
import { TProps } from "../../model/Index";
import { Modal, Box } from "@mui/material";
import { CloseIcon } from "../ui/icons/CloseIcon";
import { SearchIcon } from "../ui/icons/SearchIcon";
import { useAppDispatch, useAppSelector } from "../../store/configStore";
import { ClearIcon } from "../ui/icons/ClearIcon";
import "./valueIndex.scss";
import { changeIndexValue } from "../settingIndexSlice";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#1A1D1F",
  color: "#c1c1c1",
  borderRadius: "6px",
};

const ValueIndex: React.FC<TProps> = ({ name, san, index, data }: TProps) => {
  // console.log(data)
  const { viewIndex, listSettingIndex } = useAppSelector(
    (state) => state.settingIndex
  );

  const dispatch = useAppDispatch();
  const [popupValue, setPopupValue] = useState<boolean>(false);
  const [valueIndex, setValueIndex] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const showPopupsetting = (name: string) => {
    setValueIndex(name);
    setPopupValue(true);
  };
  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value.toUpperCase());
  };
  const changeIndex = (
    oldValue: string,
    newValue: string,
    san: string,
    index: number
  ) => {
    // Sao chép mảng viewIndex để tránh thay đổi mảng gốc
    const updatedViewIndex = viewIndex.map((item, i) => {
      // Nếu giá trị của phần tử hiện tại trong mảng trùng khớp với giá trị cũ và vị trí không phải vị trí đã chọn
      if (item.includes(oldValue) && i == index) {
        // Thay thế giá trị của phần tử bằng giá trị mới
        return newValue + ":" + san;
      } else {
        // Giữ nguyên giá trị của phần tử
        return item;
      }
    });
    dispatch(changeIndexValue(updatedViewIndex));
    setPopupValue(false);
    // Trả về mảng viewIndex đã được cập nhật
  };
  return (
    <>
      {data?.map((value, i) => (
        value.IndexId == name?
        <div key={i} className="index-value">
          <div className="flex justify-between">
            <button
              className="flex select-index-button max-w items-center hover:text-color-highlight"
              type="button"
              onClick={() => showPopupsetting(name)}
            >
              <span className="ellipsis-wrap whitespace-nowrap overflow-hidden">
                {name}
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="inline text-sm"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              </svg>
            </button>
            <div className="flex items-center whitespace-nowrap text-color-down">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 20 20"
                className="inline"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {value?.IndexValue} ({value?.Change} {value?.ChangePercent})
       
            </div>
          </div>
          <div className="flex justify-between">
            <div>1,112,337,687 CP</div>
            <div>23,175.072 Tỷ</div>
          </div>
          <div className="stock-info flex justify-between">
            <div className="flex-1 flex items-center space-x-0.5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 20 20"
                className="inline text-color-up"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="inline text-color-up">{value?.Up} </span>
              <span className="inline text-color-ceil"> ({value?.Ceiling})</span>
            </div>
            <div className="flex-1 text-color-ref flex items-center justify-center space-x-0.5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="inline mb-0.5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 352H48c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48z" />
              </svg>
              <span>{value?.NoChange}</span>
            </div>
            <div className="flex-1 flex items-center justify-center space-x-0.5">
              <span className="text-color-down inline-flex items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 20 20"
                  className="inline"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {value?.Down}
              </span>
              <span className="inline text-color-floor"> ({value?.Floor})</span>
            </div>
            <div className="flex-1 text-right whitespace-nowrap pl-1">
              Phiên GDTT
            </div>
          </div>
        </div>:""
      ))}

      <Modal
        open={popupValue}
        onClose={() => setPopupValue(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="max-w-sm min-w-96">
            {/* Phần giao diện */}
            <div className="flex justify-between py-2.5 px-5">
              <div className="text-base font-bold pt-1">Chọn chỉ số</div>
              <div
                className="cursor-pointer"
                onClick={() => setPopupValue(false)}
              >
                <CloseIcon />
              </div>
            </div>
            <div className="form-control relative my-2.5 mx-5">
              <div className="absolute ml-1 top-2 left-1">
                <SearchIcon />
              </div>
              {/* Ô input tìm kiếm */}
              <input
                className="input-control px-8"
                placeholder="Tìm kiếm"
                value={searchTerm}
                onChange={handleSearch}
              />
              {searchTerm && ( // Kiểm tra nếu ô input có giá trị
                <div className="absolute right-2 top-2">
                  <button
                    className="focus:outline-none"
                    onClick={() => setSearchTerm("")} // Đặt giá trị của ô input thành chuỗi rỗng khi nhấp vào
                  >
                    <ClearIcon />
                  </button>
                </div>
              )}
            </div>
            <div>
              {/* Danh sách chỉ số */}
              <ul className="popupIndexValue" role="radiogroup">
                {listSettingIndex
                  .filter((setting) => setting.includes(searchTerm)) // Lọc chỉ số dựa trên giá trị của ô input
                  .map((setting, indexItem) => (
                    <li
                      key={indexItem}
                      className={`${
                        valueIndex == setting ? "bg-[#898989] text-white" : ""
                      } text-color-primary flex items-center justify-between text-sm px-6 py-2 cursor-pointer hover:text-white outline-none`}
                      onClick={() =>
                        changeIndex(valueIndex, setting, san, index)
                      }
                    >
                      {/* Tên chỉ số */}
                      <span id="headlessui-label-568">{setting}</span>
                      {/* Icon chỉ số được chọn */}
                      {valueIndex == setting && (
                        <div className="flex-shrink-0 text-color-highlight">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="none"
                              strokeLinecap="square"
                              strokeMiterlimit={10}
                              strokeWidth={44}
                              d="M416 128L192 384l-96-96"
                            />
                          </svg>
                        </div>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ValueIndex;
