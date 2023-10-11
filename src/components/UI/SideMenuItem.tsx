import React, { ReactNode } from "react";
import { SideMenuItem as SideMenuItemType } from "../../lib/constants/SideMenuItems";
import { NavLink } from "react-router-dom";

export interface Props {
  item: SideMenuItemType;
  children?: ReactNode;
}

const classes =
  "flex items-center gap-3 text-neutral-200 font-semibold rounded-md px-3 py-2 hover:bg-neutral-700";

const SideMenuItem: React.FC<Props> = (props) => {
  return (
    <NavLink
      to={props.item.path}
      className={({ isActive }) =>
        isActive ? `${classes} bg-neutral-700` : classes
      }
    >
      <span className="text-lg">{props.item.icon}</span>
      <span>{props.item.title}</span>
    </NavLink>
  );
};

export default SideMenuItem;
