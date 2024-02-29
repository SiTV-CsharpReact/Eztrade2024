import TableValueIndex from "./TableValueIndex/TableValueIndex";
import { useEffect, useState } from "react";
import { fetchChartIndexAsync, fetchConfigChartIndexAsync, setDataChartRealTime } from "./chartIndex/chartIndexSlice";
import { useAppDispatch, useAppSelector } from "../store/configStore";
import ChartIndex from "./chartIndex/ChartIndex";
import ValueIndex from "./valueIndex/ValueIndex";
import {
  fetchHNXValueIndexAsync,
  fetchHSXValueIndexAsync,
} from "./TableValueIndex/ValueIndex";
import { IACTION_LIST, IDataCDT, IRP } from "./chartIndex/interface/interface.config";
import agent from "../api/agent";

const IndexMarketWatch = () => {
  
  const dispatch = useAppDispatch();
  const [sttFetchData, setSTTFetchData] = useState(true);
  useEffect(() => {
    dispatch(fetchHSXValueIndexAsync());
    dispatch(fetchHNXValueIndexAsync());
  }, [dispatch]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchConfigChartIndexAsync());
      } catch (error) {
        // Xử lý lỗi nếu cần
        console.error("Error fetching first API data:", error);
      }
    };
    fetchData();
  }, [dispatch]);
  const INTERVAL = 30000; 
  const HOUR_STOP_UPDATE = 15;
  const ACTION_LIST: IACTION_LIST = {
    GET_SS: "ss", // get snapshot data (update) , can phai co Max
    GET_CDT: "cdt", // get check date time
  };
  const { viewIndex } = useAppSelector((state) => state.settingIndex);
  const { listIndexHSX } = useAppSelector((state) => state.valueIndex);
  const {configChartIndex} =useAppSelector((state) => state.chartIndex);
  console.log(configChartIndex)
  const splitViewIndex = viewIndex.map((item) => {
    // Sử dụng split() để tách chuỗi thành một mảng con
    const splitItem = item.split(":");

    // Trả về một đối tượng mới với hai thuộc tính là tên và sàn giao dịch
    return {
      name: splitItem[0],
      exchange: splitItem[1],
    };
  });
  // console.log(splitViewIndex);
  useEffect(() => {
    dispatch(fetchChartIndexAsync());
  }, [dispatch]);
  
   // xu ly data realtime
   useEffect(() => {
    const fetchDataCDT = async () => {
      try {
        // Sau khi có dữ liệu từ API đầu tiên, gọi API thứ hai với giá trị từ API đầu tiên
        if (configChartIndex) {
          const  RP: IRP = { s: ACTION_LIST.GET_SS, m: configChartIndex };
          const dataCDT: IDataCDT = await agent.chartIndex.getCDT(
            ACTION_LIST.GET_CDT
          );
          const { data } = await agent.chartIndex.getTimeSS(RP);
          // dispatch(fetchChartIndexCDTAsync(ACTION_LIST.GET_CDT));
          // dispatch(fetchChartIndexTimeAsync(RP));
          if (dataCDT) {
            if (dataCDT.IsWorkingDay && new Date(dataCDT.Now).getHours() >= HOUR_STOP_UPDATE // la NGAY LAM VIEC + tu sau 15h00 => destroy timer
            ) {
              setSTTFetchData(false);
            }
            // }
          }
          if (data?.SS !== null) {
            dispatch(setDataChartRealTime(data));
          }
        }
      } catch (error) {
        // Xử lý lỗi nếu cần
        // console.error("Error fetching second API data:", error);
      }
      // if (!sttFetchData || !configChartIndex) {
      //   clearInterval(intervalId); // Dừng interval nếu không cần tiếp tục
      // }
    };
    fetchDataCDT();
    // Thiết lập interval để gọi API mỗi 1 phút
    const intervalId = setInterval(fetchDataCDT, INTERVAL);
      if (!sttFetchData || !configChartIndex) {
        clearInterval(intervalId); // Dừng interval nếu không cần tiếp tục
      }
    // Trả về một hàm để xóa interval khi component unmount hoặc thay đổi
    return () => {
      clearInterval(intervalId);
    };
  }, [
    dispatch,
    configChartIndex,
    sttFetchData,
    ACTION_LIST.GET_SS,
    ACTION_LIST.GET_CDT,
  ]);
  return (
    <div className="grid grid-cols-12 gap-1 h-full bg-black py-1">
      <div className="col-span-7 xl:col-span-8 flex space-x-1 h-full overflow-x-auto rounded scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-scroll">
        {splitViewIndex.map((item, key) => (
          <div key={key} className="p-1.5 bg-[#1A1D1F] rounded ml-1.5">
            <ChartIndex name={item.name} san={item.exchange} index={key} />
            <ValueIndex
              name={item.name}
              san={item.exchange}
              index={key}
              data={item.exchange === "HNX" ? [] : listIndexHSX}
            />
          </div>
        ))}
      </div>
      <div className="col-span-5 xl:col-span-4">
        <TableValueIndex />
      </div>
    </div>
  );
};

export default IndexMarketWatch;
