import React, { FC } from "react";
import { IconProp, Icon as ReactIconKitIcon } from "react-icons-kit";

export type IconProps = Pick<IconProp, "icon" | "size" | "style">;

const Icon: FC<IconProps> = ({ icon, size, style }) => (
  <ReactIconKitIcon icon={icon} size={size} style={style} />
);

export default Icon;
