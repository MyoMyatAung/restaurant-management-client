import { DocumentCheckIcon, DocumentIcon, ServerIcon } from "@heroicons/react/24/outline";
import { SideMenuItem } from "../schemas/side-menu-item.schema";

export const ORDER_MENU_ITEMS: SideMenuItem[] = [
    {
        key: "order",
        title: "Order",
        path: "order",
        icon: <DocumentIcon className="h-5 w-5 text-gray-600 group-hover:text-orange-600" />,
        activeIcon: <DocumentIcon className="h-5 w-5 text-orange-600" />,
        element: <div>This is order page</div>
    },
    {
        key: "invoice",
        title: "Invoice",
        path: "invoice",
        icon: <DocumentCheckIcon className="h-5 w-5 text-gray-600 group-hover:text-orange-600" />,
        activeIcon: <DocumentCheckIcon className="h-5 w-5 text-orange-600" />,
        element: <div>This is invoice page</div>
    },
    {
        key: "pos",
        title: "POS",
        path: "pos",
        icon: <ServerIcon className="h-5 w-5 text-gray-600 group-hover:text-orange-600" />,
        activeIcon: <ServerIcon className="h-5 w-5 text-orange-600" />,
        element: <div>This is pos page</div>
    }
]