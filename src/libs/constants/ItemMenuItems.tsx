import { CubeIcon, CubeTransparentIcon, QrCodeIcon, TagIcon } from "@heroicons/react/24/outline";
import { SideMenuItem } from "../schemas/side-menu-item.schema";
import ItemPage from "../../pages/ItemPage";

export const ITEM_MENU_ITEMS: SideMenuItem[] = [
    {
        key: "item",
        title: "Item",
        path: "item",
        icon: <CubeIcon className="h-5 w-5 text-gray-600 group-hover:text-orange-600" />,
        activeIcon: <CubeIcon className="h-5 w-5 text-orange-600" />,
        element: <ItemPage />
    },
    {
        key: "item-category",
        title: "Item Category",
        path: "item-category",
        icon: <CubeTransparentIcon className="h-5 w-5 text-gray-600 group-hover:text-orange-600" />,
        activeIcon: <CubeTransparentIcon className="h-5 w-5 text-orange-600" />,
        element: <div>This is category page</div>
    },
    {
        key: "brand",
        title: "Brand",
        path: "brand",
        icon: <TagIcon className="h-5 w-5 text-gray-600 group-hover:text-orange-600" />,
        activeIcon: <TagIcon className="h-5 w-5 text-orange-600" />,
        element: <div>This is brand page</div>
    },
    {
        key: "qr",
        title: "Print QR Code",
        path: "qr",
        icon: <QrCodeIcon className="h-5 w-5 text-gray-600 group-hover:text-orange-600" />,
        activeIcon: <QrCodeIcon className="h-5 w-5 text-orange-600" />,
        element: <div>This is QR code page</div>
    }
]