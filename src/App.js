import "./App.css";
import Detail from "./components/detail/detail";
import Homepage from "./components/homepage/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import PrivateRoutes from "./privateroutes";
import NoPage from "./components/nopage/nopage";
import Notification from "./components/notification/notification";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Homepage />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/detail/:id"
          element={
            <PrivateRoutes>
              <Detail />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/notification"
          element={
            <PrivateRoutes>
              <Notification />
            </PrivateRoutes>
          }
        ></Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
