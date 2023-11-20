import { Container, Profile, Service } from "./styles";
import { DatePickerr } from "../../components/DatePicker"
import { Header } from "../../components/Header";
import { Cabeleireiro } from "../../components/Cabeleireiro";
import { SelectService } from "../../components/SelectService";
import { Horarios } from "../../components/Horarios";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { format, parseISO  } from 'date-fns';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export function Agendamento() {
    const [agendamento, setAgendamento] = useState("");
    const [services, setServices] = useState("");


    useEffect(() => {
        async function handleEvent() {
          const response = await api.get("/users");
          const responseSer = await api.get("/services");

          setServices(responseSer.data.services);
          setAgendamento(response.data.barbeiros);
    
        }
  
        handleEvent();
    }, []);

    const [description, setDescription] = useState("");
    function handleClickCabeleireiro(id, name){
        setDescription(id);
        // Faça o que precisar com o ID e o nome do cabeleireiro aqui
    };

    const [service, setService] = useState("");

    function handleService(id, name, value) {
        setService(name);
    } 

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateSelect = (date) => {
        setSelectedDate(format(date, 'yyyy-MM-dd'));
        console.log(format(date, 'yyyy-MM-dd'));
    };

    async function handleAgendamento(name, start, end, id) {
        await api.post("/agenda",  {name, start, end, id} );
        console.log(name, start, end);
    }

    const [ hora, setHora ] = useState("");


    const [horario, setHorario] = useState([]);
    //const params = useParams()

    useEffect(() => {
        async function fetchHorairos() {
            const response = await api.get("/horarios/disponiveis");
            setHorario(response.data.horariosDisponiveis);
        }

        fetchHorairos();
    }, []);

    const swiperParams = {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
    };
    
    

    return (
        <Container>
            <Header/>
            <Profile>
                <h2>Cabeleireiros</h2>

                {
                    agendamento && agendamento.map( item =>(
                        
                        <Cabeleireiro 
                            key={item.id}
                            name={item.name}
                            onClick={() => handleClickCabeleireiro(item.id, item.name)}
                        />
                    ))
                }

            </Profile>

            <Service>
                <h2>Serviços</h2>

                {
                    services && services.map(item => (
                        <SelectService 
                            key={item.id}
                            name={item.name}
                            value={item.value}
                            duration={item.duration}
                            onClick={e => handleService(item.id, item.name, item.value)}
                        />
                    ))
                }
               
            </Service>


            <DatePickerr
                selected={selectedDate}
                handle={handleDateSelect}
            />

            <Swiper className="swiper-container"{...swiperParams}>
                {
                    horario && horario.map( h => (

                            <SwiperSlide>
                            <Horarios
                                key={h.id}
                                horario={h.horario}
                                onClick={e => setHora(h.horario)}
                            />
                            </SwiperSlide>
                    ))
                }
            </Swiper>

            <Button
                title="Salvar"
                onClick={e => {
                    const dateTime = selectedDate ? selectedDate + "T" + hora : null; // Combina a data e o horário
                    const endDateTime = "2023-11-20T11:40:00"; // Seu valor de endDateTime (altere conforme necessário)
                    handleAgendamento(service, dateTime, endDateTime, description);
                    // Use a variável "dateTime" que contém a combinação de data e horário
                }}            />


        </Container>
    )
}