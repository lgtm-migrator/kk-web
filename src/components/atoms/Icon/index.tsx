import { IconProp, Icon as ReactIconKitIcon } from "react-icons-kit";
import React, { FC } from "react";

export type IconProps = Pick<IconProp, "icon" | "size">;

const Icon: FC<IconProps> = ({ icon, size }) => (
  <ReactIconKitIcon icon={icon} size={size} />
);

export default Icon;
