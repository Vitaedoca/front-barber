import styled from "styled-components";
import backgroundImg from "../../image/p7eHXR4mf_0.png"


export const Container = styled.div`

    height: 100vh;
    display: flex;
    align-items: stretch;

`;


export const Form = styled.form`
    padding: 0 160px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    > h1 {
        font-size: 48px;
        font-style: normal;
        font-weight: 700; 
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > h3 {
        font-size: 24px; 
        font-weight: 500; 
        margin-top: 80px;
        margin-bottom: 27px;
    }
    
    > a {
        color: ${({ theme }) => theme.COLORS.ORANGE};
        margin-top: 124px;
    }
    
`;


export const Background = styled.form`

    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    mix-blend-mode: screen; 
`;