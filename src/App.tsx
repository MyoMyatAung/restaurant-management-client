import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./components/Layouts/RootLayout";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin" element={<RootLayout />}>
          <Route
            index={true}
            element={<div>This will be dashboard page</div>}
          />
          <Route
            path="property-type"
            element={<div>This will be property type page</div>}
          />
        </Route>
        <Route path="auth" element={<AuthPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
