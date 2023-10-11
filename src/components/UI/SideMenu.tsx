import { FcBullish, FcCustomerSupport } from "react-icons/fc";
import { BiLogOut } from "react-icons/bi";
import {
  BOTTOM_MENU_ITEMS,
  SIDE_MENU_ITEMS,
} from "../../lib/constants/SideMenuItems";
import SideMenuItem from "./SideMenuItem";

const SideMenu = () => {
  return (
    <div className="flex flex-col bg-neutral-800 w-64">
      <div className="flex items-center gap-3 m-4">
        <FcBullish fontSize={24} />
        <span className="text-neutral-100 font-bold text-lg">OpenShop</span>
      </div>
      <div className="bg-neutral-700 mt-4 mb-8 mx-4 p-4 flex items-center gap-2 rounded-lg">
        <FcCustomerSupport fontSize={32} />
        <div>
          <h3 className="text-neutral-100 font-semibold text-sm">
            Myo Myat Aung
          </h3>
          <p className="text-neutral-300 text-xs">Super Adminstrator</p>
        </div>
      </div>
      <hr />
      <div className="flex-1 flex flex-col justify-start gap-1 m-4">
        {SIDE_MENU_ITEMS.map((item) => {
          return (
            <SideMenuItem key={item.key} item={item}>
              <p>Test</p>
            </SideMenuItem>
          );
        })}
      </div>
      <hr />
      <div className="m-4">
        {BOTTOM_MENU_ITEMS.map((item) => {
          return (
            <SideMenuItem key={item.key} item={item}>
              <p>Test</p>
            </SideMenuItem>
          );
        })}
        <button className="flex items-center gap-3 text-red-400 font-semibold rounded-md px-3 py-1 hover:bg-red-400 hover:text-neutral-100 w-full">
          <BiLogOut className="text-lg" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default SideMenu;
