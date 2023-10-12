import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import DashboardPage from "./pages/DashboardPage";
import { ITEM_MENU_ITEMS } from "./libs/constants/ItemMenuItems";
import { ORDER_MENU_ITEMS } from "./libs/constants/OrderMenuItems";
import { USER_MENU_ITEMS } from "./libs/constants/UserMenuItems";
import { SETTING_MENU_ITEMS } from "./libs/constants/SettingMenuItems";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<RootLayout />}>
          <Route index element={<DashboardPage />} />
          {
            [...ITEM_MENU_ITEMS, ...ORDER_MENU_ITEMS, ...USER_MENU_ITEMS, ...SETTING_MENU_ITEMS].map((item) => {
              return <Route key={item.key} path={item.path} element={item.element}></Route>
            })
          }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
