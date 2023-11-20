import { Container } from "./styles";
import { FullCalendarl } from "../../components/FullCalendarl";
import { useState, useEffect } from "react";
import { Horarios } from "../../components/Horarios";
import { api } from "../../services/api";

export function Home() {

    const [horario, setHorario] = useState([]);
    //const params = useParams()

    useEffect(() => {
        async function fetchHorairos() {
            const response = await api.get("/horarios");
            setHorario(response.data.horario);
        }

        fetchHorairos();
    }, []);

    return (
        <Container>

            <div>
                
                <h1>Agendamento</h1>

            </div>

            <div className="horarios">

                <div className="horario">

                    {
                        horario && horario.map( h => (

                            <Horarios 
                                key={h.id}
                                horario={h.horario}
                            />
                        ))
                    }
                </div>

                <FullCalendarl/>
                
            </div>


        </Container>
    )
}