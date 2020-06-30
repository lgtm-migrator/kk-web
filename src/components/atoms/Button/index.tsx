import "./style.module.scss";

import React, { FC } from "react";

export type ButtonProps = Pick<JSX.IntrinsicElements["button"], "type">;

const Button: FC<ButtonProps> = ({ children }) => (
  <button styleName="button">{children}</button>
);

export default Button;
