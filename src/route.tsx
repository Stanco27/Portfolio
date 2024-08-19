import { Route, Routes } from "react-router-dom";
import MiniPage from "./Mini-Game/mini-page";
import TerminalPage from "./Terminal/terminal-page";
import NormalPage from "./Normal/normal-page";
import MainPage from "./Main-Page/main-page";
import ContactPage from "./Contact/contact-page";

const AppRoute = () => {
  return (
    <>
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="/Home" element={<MainPage />} />
          <Route path="/Mini" element={<MiniPage />} />
          <Route path="/Terminal" element={<TerminalPage />} />
          <Route path="/Normal" element={<NormalPage />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
    </>
  );
};

export default AppRoute;
