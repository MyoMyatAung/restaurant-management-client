import { ITEM_MENU_ITEMS } from "../../libs/constants/ItemMenuItems";
import { MAIN_MENU_ITEMS } from "../../libs/constants/MainMenuItems";
import { ORDER_MENU_ITEMS } from "../../libs/constants/OrderMenuItems";
import { SETTING_MENU_ITEMS } from "../../libs/constants/SettingMenuItems";
import { USER_MENU_ITEMS } from "../../libs/constants/UserMenuItems";
import SideMenuList from "./SideMenuList";

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
        </div>
    </aside>
}

export default SideMenuBar;