import ChartIndex from "./chartIndex/ChartIndex";
import ValueIndex from "./valueIndex/ValueIndex";
import TableValueIndex from "./TableValueIndex/TableValueIndex";
import { useEffect } from "react";
import { fetchChartIndexAsync } from "./chartIndex/chartIndexSlice";
import { useAppDispatch } from "../store/configStore";

const IndexMarketWatch = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchChartIndexAsync());
   
  }, [dispatch]);
  return (
    <div className="grid grid-cols-12 gap-1 h-full bg-black py-1">
      <div className="col-span-7 xl:col-span-8 flex space-x-1 h-full overflow-x-auto rounded scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-scroll">
        <div className="p-1.5 bg-[#1A1D1F] rounded ml-1">
          <ChartIndex name="HNX" san="HNX" />
          <ValueIndex name="HNX" san="HNX" />
        </div>
        <div className="p-1.5 bg-[#1A1D1F] rounded  ">
          <ChartIndex name="VN30" san="HSX" />
          <ValueIndex name="VN30" san="HSX" />
        </div>
        <div className="p-1.5 bg-[#1A1D1F] rounded  ">
          <ChartIndex name="VNI" san="HSX" />
          <ValueIndex name="VNI" san="HSX" />
        </div>
        <div className="p-1.5 bg-[#1A1D1F] rounded  ">
          <ChartIndex name="VNI" san="HSX" />
          <ValueIndex name="VNI" san="HSX" />
        </div>
      </div>
      <div className="col-span-5 xl:col-span-4">
      <TableValueIndex />
      </div>
    
    </div>
  );
};

export default IndexMarketWatch;
