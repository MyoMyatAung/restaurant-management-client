import { SideMenuItem } from "../../libs/schemas/side-menu-item.schema";
import SideMenuListItem from "./SideMenuListItem";

type Props = {
    title: string;
    list: SideMenuItem[];
};

const SideMenuList: React.FC<Props> = ({ title, list }) => {
    return (
        <div className="pt-4 px-4">
            <h3 className="text-sm text-gray-600">{title}</h3>
            <ul className="mt-3 mb-4">
                {list.map((item) => {
                    return <SideMenuListItem key={item.key} item={item} />;
                })}
            </ul>
            <hr />
        </div>
    );
};

export default SideMenuList;
