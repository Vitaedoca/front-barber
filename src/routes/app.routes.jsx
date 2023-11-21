import { Route, Routes } from "react-router-dom";
import { Profile } from "../pages/Profile";

import { App } from "../app/App";
import { Agendamento } from "../pages/Agendamento";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="*" element={<App/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    )
}