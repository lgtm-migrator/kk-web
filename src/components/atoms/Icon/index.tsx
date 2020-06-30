import { IconProp, Icon as ReactIconKitIcon } from "react-icons-kit";
import React, { FC } from "react";

export type IconProps = Pick<IconProp, "icon">;

const Icon: FC<IconProps> = ({ icon }) => (
  <ReactIconKitIcon icon={icon} size={30} style={{ color: "#a6dfec" }} />
);

export default Icon;
