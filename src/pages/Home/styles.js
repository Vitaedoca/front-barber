import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-top: 20px;

    > div {
        //width: 90vh;
        color: ${({ theme }) => theme.COLORS.WHITE}
    } 

    .fc-cell-shaded {
        background: ${({theme}) => theme.COLORS.BACKGROUND_800};
    }
    .horarios {
        display: flex;

        gap: 25px;

        .horario {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            width: 600px;
            gap: 10px;
            div {
                /* margin-bottom: 5px; */
            }
        }

    }
    
    
`;
