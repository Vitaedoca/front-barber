import styled from "styled-components";


export const Container = styled.div`

    .fc-col-header-cell-cushion, .fc-daygrid-day-number {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
    .fc .fc-daygrid-day.fc-day-today {
        /* background-color: var(--fc-today-bg-color); */
        background: ${({ theme }) => theme.COLORS.ORAGE};
        opacity: 0.4;
    }
    a {
        color: white;

    }
    .fc .fc-list-event:hover td {
        background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    .fc .fc-daygrid-event-harness {
        padding: 25px;
        font-size: 22px;

        :hover {
            background-color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
    
`;

export const ContainerModal = styled.div`
    position: absolute;
    top: 30%;
    left: 45%;
    width: 100%;
    z-index: 1000;
    
    /* display: flex;
    align-items: center;
    justify-content: center; */
    /* margin-top: 0; */
`;