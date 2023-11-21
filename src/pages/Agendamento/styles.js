import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
        width: 350px;
    }

    > button {
        margin-top: 52px;
        margin-bottom: 22px;
        max-width: 350px;
    }

    .rdp {
        --rdp-cell-size: 45px;
        --rdp-caption-font-size: 28px;
        --rdp-accent-color: ${({theme}) => theme.COLORS.ORANGE};
        --rdp-background-color: #e7edff;
        /* Switch to dark colors for dark themes */
        --rdp-accent-color-dark: #3003e1;
        --rdp-background-color-dark: ${({theme}) => theme.COLORS.ORANGE};
        /* Outline border for focused elements */
        --rdp-outline: 2px solid var(--rdp-accent-color);
        /* Outline border for focused and selected elements */
        --rdp-outline-selected: 2px solid rgba(0, 0, 0, 0.75);
    }

    button.rdp-button_reset.rdp-button.rdp-day.rdp-day_selected {
        border-radius: 10px;
    }

    .rdp-table {
        /* background-color: ${({theme}) => theme.COLORS.BACKGROUND_900}; */
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .my-selected:not([disabled]) { 
        font-weight: bold; 
        border-radius: 2px;
    }
    .rdp-months div {
        border-radius: 10px 10px 0px 0px; 
    }

    .rdp-caption {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    }

    .rdp-button_reset:hover{
        background-color: ${({theme}) => theme.COLORS.ORANGE} !important;
        border-radius: 10px; 
    }

    .rdp-day_today:not(.rdp-day_outside) {
        color: red;
    }


    .horarios {
        max-width: 360px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        > div {
            max-width: 100px;
        }
    }

    .swiper-container {
        
        display: flex;
        flex-direction: row;
        
        
    }

 

`;
export const Profile = styled.div`

    margin-top: 35px;
    > h2 {
            font-size: 25px;
            font-style: normal;
            font-weight: 500; 
        }

    div {
        cursor: pointer;
    }
`;

export const Service = styled.div`
    margin-top: 35px;
    margin-bottom: 35px;
    > div {
        margin-top: 18px;
    }
    cursor: pointer;
`;


