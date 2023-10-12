import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { SideMenuItem } from "../schemas/side-menu-item.schema";
import DashboardPage from "../../pages/DashboardPage";

export const MAIN_MENU_ITEMS: SideMenuItem[] = [
    {
        key: "dashboard",
        title: "Dashboard",
        path: "",
        icon: <Squares2X2Icon className="h-5 w-5 text-gray-600 group-hover:text-orange-600" />,
        activeIcon: <Squares2X2Icon className="h-5 w-5 text-orange-600" />,
        element: <DashboardPage />
    }
];