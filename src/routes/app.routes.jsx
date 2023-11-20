import { Route, Routes } from "react-router-dom";
import { Profile } from "../pages/Profile";
import { Agendamento } from "../pages/Agendamento";
import { App } from "../app/App";

export function AppRoutes() {

    return(
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/agendamento" element={<Agendamento/>}/>
        </Routes>
    )
}