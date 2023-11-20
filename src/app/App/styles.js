import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "brand header"
    "menu option";

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    
`

export const Brand = styled.div`

    grid-area: brand;

    display: flex;
    align-items: center;
    justify-content: center;

    
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.WHITE};
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > img {
        width: 150px;
        font-size: 20px;
        font-weight: 900;
    }
`;

export const Menu = styled.div`

    grid-area: menu;
    /* padding: 25px ; */
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    padding: 0 20px;
    
`;

export const Option = styled.div`



`;