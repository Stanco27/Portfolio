import { Route, Routes } from "react-router-dom";
import NormalPage from "./Normal/normal-page";

const AppRoute = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<NormalPage />} />
          <Route path="/Home" element={<NormalPage />} />
        </Routes>
    </>
  );
};

export default AppRoute;
