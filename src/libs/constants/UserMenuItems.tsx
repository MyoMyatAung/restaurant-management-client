import { ShieldCheckIcon, ShieldExclamationIcon, UserIcon } from "@heroicons/react/24/outline";
import { SideMenuItem } from "../schemas/side-menu-item.schema";

export const USER_MENU_ITEMS: SideMenuItem[] = [
    {
        key: "user",
        title: "Users",
        path: "user",
        icon: <UserIcon className="h-5 w-5 text-gray-600 group-hover:text-orange-600" />,
        activeIcon: <UserIcon className="h-5 w-5 text-orange-600" />
    },
    {
        key: "role",
        title: "Role",
        path: "role",
        icon: <ShieldCheckIcon className="h-5 w-5 text-gray-600 group-hover:text-orange-600" />,
        activeIcon: <ShieldCheckIcon className="h-5 w-5 text-orange-600" />
    },
    {
        key: "permission",
        title: "Permission",
        path: "permission",
        icon: <ShieldExclamationIcon className="h-5 w-5 text-gray-600 group-hover:text-orange-600" />,
        activeIcon: <ShieldExclamationIcon className="h-5 w-5 text-orange-600" />
    }
]