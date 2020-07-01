import "./style.module.scss";

import React, { FC } from "react";

export type ButtonProps = Pick<
  JSX.IntrinsicElements["button"],
  "disabled" | "type"
>;

const Button: FC<ButtonProps> = ({ children, disabled, type }) => (
  <button disabled={disabled} styleName="button" type={type}>
    {children}
  </button>
);

export default Button;
