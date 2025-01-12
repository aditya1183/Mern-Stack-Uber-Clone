import React from "react";
import { Route, Routes } from "react-router-dom";

import UserLogin from "./Pages/UserLogin";
import Usersignup from "./Pages/Usersignup";
import CaptianLogin from "./Pages/CaptianLogin";
import Captiansignup from "./Pages/Captiansignup";
import Start from "./Pages/Start";
import Home from "./Pages/Home";
import UserProtectedWrapper from "./Pages/UserProtectedWrapper";
import UserLogout from "./Pages/UserLogout";
import CapatainHome from "./Pages/CapatainHome";
import CapatainProtectedWrapper from "./Pages/CapatainProtectedWrapper";
import CapatainLogout from "./Pages/CapatainLogout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<Usersignup />} />
        <Route path="/captain-login" element={<CaptianLogin />} />
        <Route path="/captain-signup" element={<Captiansignup />} />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/capatain-home"
          element={
            <CapatainProtectedWrapper>
              <CapatainHome />
            </CapatainProtectedWrapper>
          }
        />
        <Route path="/user/logout" element={<UserLogout />} />
        <Route path="/capatain/logout" element={<CapatainLogout />} />
      </Routes>
    </div>
  );
};

export default App;
