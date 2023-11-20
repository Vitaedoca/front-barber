import { Container } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";
import { useState } from "react";
import { api } from "../../services/api";

export function Modal({ isOpen, icon: Icon, onClick }) {


    const [ name, setName ] = useState("");
    const [ start, setStart ] = useState("");
    const [ end, setEnd ] = useState("");

    async function hangleAgenda() {
        await api.post("/agenda", {name, start, end});

        onClick();
        console.log(start)
        window.location.reload();
    }

    if(isOpen) {
        return (
    
        
            <Container>

                <a href="#" onClick={onClick}>
                    {Icon && <Icon size={20}/>}
                </a>

                <Input
                    className="input1"
                    placeholder="Nome da pessoa"
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder="Início do serviço"
                    onChange={e => setStart(e.target.value)}
                />
                <Input
                    placeholder="Termino do serviço"
                    onChange={e => setEnd(e.target.value)}
                />

                <Button
                    title="Salvar"
                    onClick={hangleAgenda}
                />
            </Container>
        )

    }
}