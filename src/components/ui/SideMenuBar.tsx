import { ITEM_MENU_ITEMS } from "../../libs/constants/ItemMenuItems";
import { MAIN_MENU_ITEMS } from "../../libs/constants/MainMenuItems";
import { ORDER_MENU_ITEMS } from "../../libs/constants/OrderMenuItems";
import { SETTING_MENU_ITEMS } from "../../libs/constants/SettingMenuItems";
import { USER_MENU_ITEMS } from "../../libs/constants/UserMenuItems";
import SideMenuList from "./SideMenuList";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

const SideMenuBar = () => {
    return <aside className="border-r border-r-gray-200 w-64 overflow-scroll overflow-x-hidden">
        {/* Aside Header */}
        <div className="flex items-center gap-1 bg-white px-4 py-2 border-b border-b-gray-200 fixed top-0 w-[250px] z-10">
            <img src="/restaurant-logo.png" alt="logo" width={60} />
            <span className="text-2xl font-bold text-orange-600">Rest</span>
        </div>
        <div className="mt-12">
            <SideMenuList list={MAIN_MENU_ITEMS} title="Main" />
            <SideMenuList list={ITEM_MENU_ITEMS} title="Items" />
            <SideMenuList list={ORDER_MENU_ITEMS} title="Orders" />
            <SideMenuList list={USER_MENU_ITEMS} title="Users" />
            <SideMenuList list={SETTING_MENU_ITEMS} title="Settings" />

            <div className="pt-4 px-4">
                <button className="group flex items-center gap-2 py-2 px-4 text-sm text-red-600 bg-red-100 w-full hover:text-white hover:bg-red-600 rounded-md">
                    <ArrowLeftOnRectangleIcon className="h-5 w-5 text-red-600 group-hover:text-white" /> Logout
                </button>
            </div>
        </div>
    </aside>
}

export default SideMenuBar;