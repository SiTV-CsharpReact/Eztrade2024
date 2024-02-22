import TableValueIndex from "./TableValueIndex/TableValueIndex";
import { useEffect } from "react";
import { fetchChartIndexAsync } from "./chartIndex/chartIndexSlice";
import { useAppDispatch, useAppSelector } from "../store/configStore";
import ChartIndex from "./chartIndex/ChartIndex";
import ValueIndex from "./valueIndex/ValueIndex";
import {
  fetchHNXValueIndexAsync,
  fetchHSXValueIndexAsync,
} from "./TableValueIndex/ValueIndex";

const IndexMarketWatch = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchHSXValueIndexAsync());
    dispatch(fetchHNXValueIndexAsync());
  }, [dispatch]);
  const { viewIndex } = useAppSelector((state) => state.settingIndex);
  // const { valueIndexHNX, valueIndexHSX } = useAppSelector(
  //   (state) => state.valueIndex
  // );
  const { listIndexHSX } = useAppSelector((state) => state.valueIndex);
  // console.log(valueIndexHNX, valueIndexHSX);
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
