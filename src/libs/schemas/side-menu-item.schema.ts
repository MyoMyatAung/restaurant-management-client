import { ReactNode } from "react";
export interface SideMenuItem {
    key: string;
    path: string;
    icon: ReactNode;
    activeIcon?: ReactNode;
    title: string;
    element: ReactNode;
}