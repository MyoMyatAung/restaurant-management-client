import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { SideMenuItem } from "../schemas/side-menu-item.schema";

export const SETTING_MENU_ITEMS: SideMenuItem[] = [
    {
        key: "setting",
        title: "Setting",
        path: "setting",
        icon: <Cog6ToothIcon className="h-5 w-5 text-gray-600 group-hover:text-orange-600" />,
        activeIcon: <Cog6ToothIcon className="h-5 w-5 text-orange-600" />,
        element: <div>This is setting page</div>
    }
]