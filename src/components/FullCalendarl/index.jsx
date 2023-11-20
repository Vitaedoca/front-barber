import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, ContainerModal } from "./styled"; // Importe a Overlay

import { FiX } from "react-icons/fi"; 
import { api } from "../../services/api";
import { Modal } from "../Modal";

export function FullCalendarl() {
    const [agenda, setAgenda] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const handleDateClick = (info) => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    useEffect(() => {
      async function handleEvent() {
        const response = await api.get("/agenda");
  
        setAgenda(response.data.agenda);
      }

      handleEvent();
  }, []);


    return (
    <Container>

        <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        initialView="listWeek"
        headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,listWeek",
        }}
        weekends={true}
        locale="pt-br"
        selectable={true}
        buttonText={{
            today: "Hoje",
            month: "Mês",
            week: "Semana",
            day: "Dia",
            list: "Lista",
        }}
        allDaySlot={false}

        events={
          agenda && agenda.map(item => ({
          title: item.name,
          start: item.start,
          end: item.end,
        }))
      }
  
        
        businessHours={{
          daysOfWeek: [1, 2, 3, 4, 5, 6, 7], // Monday - Sunday
          startTime: "08:00", // Hora de início (8:00 AM)
          endTime: "19:00", // Hora de término (7:00 PM)
        }}
            eventColor="red"
            eventBackgroundColor="#FF9000"
            dateClick={handleDateClick}
            editable={true}
            slotMinTime="08:00:00"
            slotMaxTime="20:00:00"
        />

      

        <ContainerModal>
            <Modal 
                isOpen={openModal} 
                icon={FiX} 
                onClick={handleCloseModal} 
            />

        </ContainerModal>
        </Container>
    );
}
