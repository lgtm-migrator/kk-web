import "./style.module.scss";

import React, { FC } from "react";
import { Icon } from "react-icons-kit";
import { iosLightbulb } from "react-icons-kit/ionicons/iosLightbulb";

export type ToggleButtonProps = Pick<
  JSX.IntrinsicElements["input"],
  "checked"
> & {
  handleChange: JSX.IntrinsicElements["input"]["onChange"];
};

const ToggleButton: FC<ToggleButtonProps> = ({ checked, handleChange }) => (
  // eslint-disable-next-line jsx-a11y/label-has-for
  <label styleName="toggle-button">
    <input
      checked={checked}
      onChange={handleChange}
      styleName="checkbox"
      type="checkbox"
    />
    <Icon icon={iosLightbulb} size={18} />
  </label>
);

export default ToggleButton;
