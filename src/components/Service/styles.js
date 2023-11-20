import styled from "styled-components";


export const Container = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 35px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    border-radius: 5px;

    > img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .container-icons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 22px;
        > svg {
            display: flex;
            align-items: center;
            background-color: ${({theme}) => theme.COLORS.ORANGE};
            padding: 9px;
            font-size: 35px;
            border-radius: 5px;
            cursor: pointer;
        }
        
        
    }
`;

export const Description = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 650px;

    svg {
        color: ${({ theme }) => theme.COLORS.ORANGE};
        font-size: 18px;
        margin-right: 7px;
    }
`;