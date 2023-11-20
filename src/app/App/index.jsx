import React from "react";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { NavBar } from "../../components/NavBar";
import { Brand } from "./styles";
import { Menu } from "./styles";
import { Option } from "./styles";
import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Agenda } from "../../pages/Agenda";
import { Services } from "../../pages/Services";
import { EditService } from "../../pages/EditService";
export function App() {
    return (
        <Container>
            <Brand>
                <h2><strong>BarberShop</strong></h2>
            </Brand>
            <Header />
            <Menu>
                <NavBar />
            </Menu>
            <Option>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/agenda" element={<Agenda />} />
                    <Route path="/editService" element={<EditService />} />
                </Routes>
            </Option>
        </Container>   
    )
}
