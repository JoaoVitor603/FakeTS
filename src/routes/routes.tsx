import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

export const TSRoutes: React.FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);
