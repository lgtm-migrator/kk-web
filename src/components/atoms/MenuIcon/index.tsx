import { IconProp, Icon as ReactIconKitIcon } from "react-icons-kit";
import React, { FC } from "react";

export type MenuIconProps = Pick<IconProp, "icon">;

const MenuIcon: FC<MenuIconProps> = ({ icon }) => (
  <ReactIconKitIcon icon={icon} size={30} style={{ color: "#a6dfec" }} />
);

export default MenuIcon;
