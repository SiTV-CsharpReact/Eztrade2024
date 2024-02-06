import  { useEffect } from "react";
import TimeLine from "./component/TimeLine";
import { useAppDispatch } from "../../store/configStore";
import { fetchCompanyAsync } from "../company/companyMarketwach";
import SearchStockCode from "./component/SearchStockCode";
import Logo from "./component/Logo";
import MarqueeHeader from "./component/Marquee";
import Language from "./component/Language";
import Noti from "./component/Noti";
import HeaderMenu from "./HeaderMenu";
import FormLogin from "./component/FormLogin";

const Header = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem("companyData")) dispatch(fetchCompanyAsync());
  }, []);
  return (
    <>
      <div className="manrope flex justify-between bg-[#1A1D1F] px-2 py-1 text-white">
        <Logo />
        <MarqueeHeader />
        <div className="flex justify-end  h-full items-center">
          <TimeLine />
          <SearchStockCode />
          <Language />
          <Noti />
         
          <FormLogin />
        </div>
      </div>

      <HeaderMenu />
    </>
  );
};

export default Header;
