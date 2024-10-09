import "./App.css";
import { useState, useEffect } from "react";
import Detail from "./components/detail/detail";
import Homepage from "./components/homepage/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import PrivateRoutes from "./privateroutes";
import NoPage from "./components/nopage/nopage";
import Notification from "./components/notification/notification";
import HistoryPage from "./components/historyPage/historyPage";
import axios from "axios";

function App() {
  const [vehicleData, setVehicleData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://vehicle-owner-database-default-rtdb.firebaseio.com/post-info-FRSC.json`,
      )
      .then((res) => {
        setVehicleData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Homepage data={vehicleData} />
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
          path="/history/:id"
          element={
            <PrivateRoutes>
              <HistoryPage />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/notification"
          element={
            <PrivateRoutes>
              <Notification data={vehicleData} />
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
