import React, { memo} from "react";
import Popover from "@mui/material/Popover/Popover";
import { useTranslation } from "react-i18next";
import { LanguageVNIcon } from "../../ui/icons/LanguageVNIcon";
import { LanguageENIcon } from "../../ui/icons/LanguageENIcon";
import { useAppDispatch, useAppSelector } from "../../../store/configStore";
import { setLanguage } from "../../configSlice";
interface LanguageOptionProps {
  label: string;
  value: string;
  isSelected: boolean;
  prop?: boolean;
}
const Language = () => {
  const dispatch = useAppDispatch();
  const Language = useAppSelector((state=> state.Config.Language))
  const { i18n } = useTranslation();
  const changeLanguage = (lng:string) => {
    dispatch(setLanguage(lng))
    i18n.changeLanguage(lng);
    handleClose();
  };
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const LanguageOption: React.FC<LanguageOptionProps> = ({
    label,
    value,
    isSelected,
    prop,
  }) => (
    <div
      className={`flex text-center px-1 ${isSelected ? "bg-[#737373]" : ""} ${
        prop ? "py-1" : ""
      } cursor-pointer`}
      onClick={() => changeLanguage(value)}
    >
      {value == "VN" ? <LanguageVNIcon /> : <LanguageENIcon />}
      <span className="pl-1 pt-0.5 whitespace-nowrap">{label}</span>
    </div>
  );
  return (
    <>
      <div
        aria-describedby={id}
        className="flex text-center"
        onClick={handleClick}
      >
        {Language === "VN" ? (
          <LanguageOption label="Tiếng Việt" value="VN" isSelected={false} />
        ) : (
          <LanguageOption label="English" value="EN" isSelected={false} />
        )}
      </div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        className=" mt-1"
      >
        <div className="bg-[#505050] text-white">
          <LanguageOption
            label="Tiếng Việt"
            value="VN"
            isSelected={Language === "VN"}
            prop={true}
          />
          <LanguageOption
            label="English"
            value="EN"
            isSelected={Language === "EN"}
            prop={true}
          />
        </div>
      </Popover>
    </>
  );
};

export default memo(Language);
