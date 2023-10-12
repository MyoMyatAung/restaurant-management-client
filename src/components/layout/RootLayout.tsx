import { Outlet } from "react-router-dom";
import SideMenuBar from "../ui/SideMenuBar";

const RootLayout = () => {
    return <div className="flex w-screen h-screen">
        <SideMenuBar />
        <div className="flex-1 bg-gray-50">
            <header className="h-[50.55px] border-b border-b-gray-200">
                This is Header
            </header>
            <main className="m-4">
                <Outlet />
            </main>
        </div>
    </div>
}

export default RootLayout;