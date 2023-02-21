import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../Hooks/auth";

export const User = React.createContext({});

const SessionProvider = ({ children }) => {
  const navigate = useNavigate("");
  const location = useLocation("");
  const data = {
    token: sessionStorage.getItem("ssid"),
    base_url_api: process.env.REACT_APP_BASE_URL_API,
  };

  useEffect(() => {
    if (location.pathname == "/login" || location.pathname == "/register") {
      if (data.token !== null) {
        return navigate("/");
      }
    } else {
      if (data.token == null) {
        navigate("/login");
      }

      if (data.token !== null) {
        auth.me().then((res) => {
          // console.log({ res });
          if (!res.status) {
            alert("Token anda sudah expired");
            sessionStorage.removeItem("ssid");
            navigate("/login");
          }
        });
      }
    }
  }, []);
  return <User.Provider value={data}> {children}</User.Provider>;
};

export default SessionProvider;
