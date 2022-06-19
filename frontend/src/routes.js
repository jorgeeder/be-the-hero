import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

export default function Ways() {
    return(
        <BrowserRouter>
            <Routes>
                <Route  exact path="/" element={<Logon />} />
                <Route  path="/register" element={<Register />} />
                <Route  path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}