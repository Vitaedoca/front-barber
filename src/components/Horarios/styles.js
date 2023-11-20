import styled from "styled-components";



export const Container = styled.div`

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    width: 70px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
`;