import { CubeIcon, CubeTransparentIcon, QrCodeIcon, TagIcon } from "@heroicons/react/24/outline";
import { SideMenuItem } from "../schemas/side-menu-item.schema";

export const ITEM_MENU_ITEMS: SideMenuItem[] = [
    {
        key: "item",
        title: "Item",
        path: "item",
        icon: <CubeIcon className="h-5 w-5 text-gray-600 group-hover:text-orange-600" />,
        activeIcon: <CubeIcon className="h-5 w-5 text-orange-600" />
    },
    {
        key: "item-category",
        title: "Item Category",
        path: "item-category",
        icon: <CubeTransparentIcon className="h-5 w-5 text-gray-600 group-hover:text-orange-600" />,
        activeIcon: <CubeTransparentIcon className="h-5 w-5 text-orange-600" />
    },
    {
        key: "brand",
        title: "Brand",
        path: "brand",
        icon: <TagIcon className="h-5 w-5 text-gray-600 group-hover:text-orange-600" />,
        activeIcon: <TagIcon className="h-5 w-5 text-orange-600" />
    },
    {
        key: "qr",
        title: "Print QR Code",
        path: "qr",
        icon: <QrCodeIcon className="h-5 w-5 text-gray-600 group-hover:text-orange-600" />,
        activeIcon: <QrCodeIcon className="h-5 w-5 text-orange-600" />
    }
]