
import ChartIndex from "./chartIndex/ChartIndex";
import ValueIndex from "./valueIndex/ValueIndex";
import TableChartIndex from "./chartIndex/TableChartIndex";

const IndexMarketWatch = () => {
  return (
    <div className="flex bg-black py-1">
      <div className="flex">
      <div className="p-2 bg-[#1A1D1F] rounded ml-1.5  mx-0.5">
        <ChartIndex name="HNX" san="HNX" />
        <ValueIndex name="HNX" san="HNX" />
      </div>
      <div className="p-2 bg-[#1A1D1F] rounded  mx-0.5">
        <ChartIndex name="VN30" san="HSX" />
        <ValueIndex name="HNX" san="HNX" />
      </div>
      <div className="p-2 bg-[#1A1D1F] rounded  mx-0.5">
        <ChartIndex name="VNI" san="HSX" />
        <ValueIndex name="HNX" san="HNX" />
      </div>
      <div className="p-2 bg-[#1A1D1F] rounded  mx-0.5">
        <ChartIndex name="VNI" san="HSX" />
        <ValueIndex name="HNX" san="HNX" />
      </div>
    </div>
      <TableChartIndex />
      </div>
  
  );
};

export default IndexMarketWatch;
