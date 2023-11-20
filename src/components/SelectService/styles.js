import styled from "styled-components";


export const Container = styled.div`

    width: 360px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 10px;

    h3 {
        font-size: 16px;
        font-weight: 700; 
    }

    > div {
        margin-left: 15px;
        span {
            font-size: 12px;
            font-weight: 400; 
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

    img {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        width: 107px;
        height: 83px; 
    }
    .description {
        display: flex;
        flex-direction: column;
    }
`;