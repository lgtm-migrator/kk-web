import "ress";
import "./src/styles/global.scss";
import "github-markdown-css";
import "react-toastify/dist/ReactToastify.css";
import "dayjs/locale/ja";

import dayjs from "dayjs";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
import mixpanel from "mixpanel-browser";
import React from "react";

import DarkModeContext from "./src/contexts/DarkModeContext";

export const onClientEntry = () => {
  dayjs.locale("ja");

  if (process.env.NODE_ENV === "development") {
    return;
  }

  LogRocket.init("t4xmlm/kk-web");

  LogRocket.getSessionURL((sessionURL) => {
    mixpanel.track("LogRocket", { sessionURL });
  });

  setupLogRocketReact(LogRocket);
};

export const wrapRootElement = ({ element }) => (
  <DarkModeContext.Provider>{element}</DarkModeContext.Provider>
);
