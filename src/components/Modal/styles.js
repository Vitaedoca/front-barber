import styled from "styled-components";

export const Container = styled.div`
    max-width: 350px;
    height: 350px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    padding: 18px;
    border-radius: 15px;


    > a {
        display: flex;
        justify-content: end;
        margin-bottom: 10px;

        > svg {
            color: ${({ theme }) => theme.COLORS.RED};
            font-size: 22px;
        }
    }
    

`;