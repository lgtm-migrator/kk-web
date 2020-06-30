import "./style.module.scss";

import React, { FC } from "react";

const Main: FC = ({ children }) => (
  <main role="main" styleName="main">
    {children}
  </main>
);

export default Main;
