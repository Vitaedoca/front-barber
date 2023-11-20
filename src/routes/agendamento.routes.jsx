import { Route, Routes, Router } from "react-router-dom";
import { Agendamento } from "../pages/Agendamento";
import { AppRoutes } from "./app.routes";
import { useAuth } from "../hooks/auth";

export function AgendamentoRoutes() {
    const { user, isAdmin } = useAuth();

    console.log(isAdmin);


    return(

        <Routes>
                <Route path="/agendamento" element={<Agendamento/>}/>
        </Routes>
    )
}