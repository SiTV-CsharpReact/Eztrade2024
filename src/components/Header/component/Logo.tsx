import React, { memo } from "react";
import LogoFPTSShort from "../../../../public/FPTS-logongan.png";

interface PropConfig {
   height?: number;
   width?: number;
   fontSize?: number;
   
}

const Logo: React.FC<PropConfig> = ({ height, fontSize }) => {
  return (
    <div className="flex h-full items-center">
      <img src={LogoFPTSShort} style={{ height: height ?? 28 }} alt="Logo FPTS" />
      <div className={`text-[#1AAF74] whitespace-nowrap px-2`}>
        <span  style={{fontSize:fontSize}}>
        FPTS
        </span>
       
      </div>
    </div>
  );
};

export default memo(Logo);
