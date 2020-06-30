import "./style.module.scss";

import React, { FC } from "react";

export type ToggleButtonProps = Pick<
  JSX.IntrinsicElements["button"],
  "disabled" | "onClick"
>;

const ToggleButton: FC<ToggleButtonProps> = ({ disabled, onClick }) => (
  <button disabled={disabled} onClick={onClick} styleName="button" />
);

export default ToggleButton;
