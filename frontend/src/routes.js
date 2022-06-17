import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Logon from "./pages/Logon";

export default function Ways() {
    return(
        <BrowserRouter>
            <Routes>
                <Route  exact path="/" element={<Logon />} />
            </Routes>
        </BrowserRouter>
    );
}