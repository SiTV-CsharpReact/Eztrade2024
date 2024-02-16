import TimeLine from "./component/TimeLine";
import SearchStockCode from "./component/SearchStockCode";
import Logo from "./component/Logo";
import MarqueeHeader from "./component/Marquee";
import Language from "./component/Language";
import Noti from "./component/Noti";
import HeaderMenu from "./HeaderMenu";
import FormLogin from "./component/FormLogin";

const Header = () => {
 
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
