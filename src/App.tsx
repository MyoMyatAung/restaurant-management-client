import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<RootLayout />}>
          <Route
            index={true}
            element={<div>This will be dashboard page</div>}
          />
          <Route
            path="property-type"
            element={<div>This will be property type page</div>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
