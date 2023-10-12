import { NavLink, useLocation } from "react-router-dom"
import { SideMenuItem } from "../../libs/schemas/side-menu-item.schema";

type Props = {
    title: string;
    list: SideMenuItem[];
}

const SideMenuList: React.FC<Props> = ({ title, list }) => {
    const { pathname } = useLocation();

    const paths = pathname.split("/"); // "/pathname/params" split pathnames via "/"
    const activePath = paths[paths.length - 1]; // the last index [params] is active path

    return <div className="pt-4 px-4">
        <h3 className="text-sm text-gray-600">{title}</h3>
        <ul className="mt-3 mb-4">
            {
                list.map((item) => {
                    return <li key={item.key}>
                        <NavLink to={item.path} className={({ isActive }) => `group flex items-center gap-2 px-4 py-2 text-sm hover:text-orange-600 hover:bg-orange-100 rounded-md ${isActive ? "bg-orange-100 text-orange-600" : "text-gray-600"}`}>
                            <span>{activePath === item.path ? item.activeIcon : item.icon}</span>
                            <span>{item.title}</span>
                        </NavLink>
                    </li>
                })
            }
        </ul>
        <hr />
    </div>
}

export default SideMenuList;