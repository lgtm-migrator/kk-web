import "./style.module.scss";

import React, { FC } from "react";

export type MainProps = Pick<JSX.IntrinsicElements["main"], "children">;

const Main: FC<MainProps> = ({ children }) => (
  <main role="main" styleName="main">
    {children}
  </main>
);

export default Main;
