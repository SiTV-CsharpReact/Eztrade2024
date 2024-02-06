
import React from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
const MarqueeHeader = () => {
  const { t } = useTranslation(["home"]);
  return (
    <div className="manrope-light text-xs flex items-center">
    <Marquee>
    {t("home:Marquee.Noti")}
    {/* {t("home:Transfer.Chuyentien")} */}
    </Marquee>
  </div>
  )
}

export default React.memo(MarqueeHeader)