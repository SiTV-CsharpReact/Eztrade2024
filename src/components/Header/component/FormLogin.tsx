import { Modal, Box, Tabs, Tab, Typography } from "@mui/material";
import QRCodeStyling from "qr-code-styling";
import React, { memo, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "./Logo";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../../../store/configStore";
import { loginAsync } from "../../loginSlice";
import { DownIcon } from "../../ui/icons/DownIcon";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const qrCode = new QRCodeStyling({
  width: 200,
  height: 200,
  // image: styles.logoFPTS,
  dotsOptions: {
    color: "#000",
    type: "extra-rounded",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    imageSize: 0.6,
  },
  cornersSquareOptions: {
    color: "#000",
    type: "extra-rounded",
  },
  cornersDotOptions: {
    color: "#007db8",
    type: "dot",
  },
});
const FormLogin = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, loading, ProfileAccount } = useAppSelector(
    (state) => state.Login
  );
  const [popupLogin, setPopupLogin] = useState(false);
  const [value, setValue] = React.useState(0);

  const schema = yup.object().shape({
    LoginName: yup.string().required("Bạn cần nhập số tài khoản hoặc bí danh"),
    Password: yup.string().required("Bạn cần nhập mật khẩu"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Sử dụng yup để xác thực
  });

  const onSubmit = (data: any) => {
    dispatch(loginAsync(data));
    // if(isAuthenticated) setPopupLogin(false);
    console.log(data);
    // Gửi dữ liệu đăng nhập điều này ở đây
  };

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  const url = "https://qr-code-styling.com";
  // const [url, setUrl] = useState("https://qr-code-styling.com");
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, []);
  useEffect(() => {
    qrCode.update({
      data: url,
    });
  }, [url]);

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <>
      {!isAuthenticated ? (
        <div>
          <div className="button">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>

            <button
              className="tricolor-border-btn"
              onClick={() => setPopupLogin(true)}
            >
              Đăng nhập
            </button>
          </div>
        </div>
      ) : (
        <div className="flex">
          {ProfileAccount.LoginName} <DownIcon />
        </div>
      )}

      {!isAuthenticated ? (
        <Modal
          open={popupLogin}
          onClose={() => setPopupLogin(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <Box className="w-[500px] h-[600px] bg-[#0a0808] border border-[#434343] rounded-lg">
            <div className="flex justify-center py-3">
              <Logo height={70} fontSize={25} />
            </div>

            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                paddingLeft: "25px",
              }}
            >
              <Tabs
                value={value}
                onChange={() => handleChange}
                aria-label="basic tabs example"
                textColor="inherit"
                TabIndicatorProps={{ sx: { bgcolor: "#1AA7A4" } }}
                sx={{
                  ".Mui-selected": {
                    color: `#1AA7A4`,
                  },
                }}
              >
                <Tab
                  label={
                    <span className="text-xs manrope">Đăng nhập tài khoản</span>
                  }
                  {...a11yProps(0)}
                />
                <Tab
                  label={
                    <span className="text-xs manrope">Đăng nhập QrCode</span>
                  }
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form_login py-1">
                    <span>Số tài khoản / bí danh</span>
                    <br />
                    <div className="input_form_login">
                      <input
                        className="input__form"
                        {...register("LoginName")}
                      />
                      {errors.LoginName && (
                        <span className="text-red-500">
                          {typeof errors.LoginName.message === "string"
                            ? errors.LoginName.message
                            : ""}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="form_login py-4">
                    <span>Mật khẩu</span>
                    <br />
                    <div className="input_form_login">
                      <input
                        className="input__form"
                        type="password"
                        {...register("Password")}
                      />
                      {errors.Password && (
                        <span className="text-red-500">
                          {typeof errors.Password.message === "string"
                            ? errors.Password.message
                            : ""}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="form_login py-4">
                    <button className="button__form_login" type="submit">
                      {!loading ? "Đăng nhập" : "...."}
                    </button>
                  </div>
                </form>
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Box ref={ref} />
            </CustomTabPanel>
          </Box>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

export default memo(FormLogin);
