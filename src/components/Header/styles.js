import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`

    grid-area: header;
    
    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.BLACK};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;

    @media (max-width: 768px) {
        padding: 0 30px;
    }

`;

export const Profiles = styled(Link)`

    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;

    > img {
        border-radius: 50%;
        height: 56px;
        width: 56px;
    }

    > div {

        display: flex;
        flex-direction: column;

        > span {
            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-size: 16px;
        }

        > strong {
            color: ${({theme}) => theme.COLORS.WHITE};
            font-size: 18px;
        }
    }

`;
    export const Logout = styled.div`

        display: flex;
        align-items: center;
        justify-content: center;
    
        > svg {
            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-size: 28px;
            cursor: pointer;
        }

    `




