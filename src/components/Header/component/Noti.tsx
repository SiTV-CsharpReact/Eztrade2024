import { memo, useState } from "react";
import { NotiIcon } from "../../ui/icons/NotiIcon";
import { SetupIcon } from "../../ui/icons/SetupIcon";
import { CloseIcon } from "../../ui/icons/CloseIcon";
import Drawer from "@mui/material/Drawer/Drawer";
import React from "react";

const Noti = () => {
  const [showNoti, setShowNoti] = useState(false);
  return (
    <>
      <div className="px-1.5 cursor-pointer" onClick={() => setShowNoti(true)}>
        <NotiIcon />

        <Drawer
          anchor="right"
          open={showNoti}
          onClose={() => setShowNoti(false)}
        >
          <div className=" bg-[#272B30] text-white w-[550px] ">
            <div className="noti-head flex justify-between py-1.5 items-center">
              <div>
              <CloseIcon/>
              </div>
              <span className="text-xl">Thông báo</span>
              <div>
              <SetupIcon/>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default memo(Noti);
