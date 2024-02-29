import Header from "./components/Header/Header";
import TableMarketWatch from "./components/TableMarketWatch/TableMarketWatch";
import IndexMarketWatch from "./components/IndexMarketWatch";

function App() {
  return (
    <>
    {/* header */}
      <Header></Header>
  {/* index */}
        <IndexMarketWatch/>
   {/* table    */}
      <TableMarketWatch />
      {/* <ChartJSTest/> */}
    </>
  );
}

export default App;
