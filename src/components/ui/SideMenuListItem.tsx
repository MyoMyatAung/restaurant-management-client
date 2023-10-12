import { Link, useLocation } from "react-router-dom";
import { SideMenuItem } from "../../libs/schemas/side-menu-item.schema";

type Props = {
  item: SideMenuItem;
};

const SideMenuListItem: React.FC<Props> = ({ item }) => {
  const { pathname } = useLocation();

  const paths = pathname.split("/"); // "/pathname/params" split pathnames via "/"
  const activePath = paths[paths.length - 1]; // the last index [params] is active path
  const isActive = activePath === item.path;

  return (
    <li>
      <Link
        to={`./${item.path}`}
        className={`group flex items-center gap-2 px-4 py-2 text-sm hover:text-orange-600 hover:bg-orange-100 rounded-md ${isActive ? "bg-orange-100 text-orange-600" : "text-gray-600"
          }`}
      >
        <span>{isActive ? item.activeIcon : item.icon}</span>
        <span>{item.title}</span>
      </Link>
    </li>
  );
};

export default SideMenuListItem;
