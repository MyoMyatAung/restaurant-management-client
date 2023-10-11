import { MdSpaceDashboard } from "react-icons/md";
import { BsFillBoxFill, BsFillCartFill } from "react-icons/bs";
import { AiOutlineQuestionCircle, AiFillSetting } from "react-icons/ai";
import { ReactNode } from "react";

export interface SideMenuItem {
  key: string;
  path: string;
  icon: ReactNode;
  title: string;
}

export const SIDE_MENU_ITEMS: Array<SideMenuItem> = [
  {
    key: "dashboard",
    title: "Dashboard",
    path: "/",
    icon: <MdSpaceDashboard />,
  },
  {
    key: "product",
    title: "Products",
    path: "/products",
    icon: <BsFillBoxFill />,
  },
  {
    key: "order",
    title: "Orders",
    path: "/order",
    icon: <BsFillCartFill />,
  },
];

export const BOTTOM_MENU_ITEMS: Array<SideMenuItem> = [
  {
    key: "settings",
    title: "Settings",
    path: "/settings",
    icon: <AiFillSetting />,
  },
  {
    key: "supports",
    title: "Helps & Support",
    path: "/supports",
    icon: <AiOutlineQuestionCircle />,
  },
];
