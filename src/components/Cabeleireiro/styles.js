import styled from "styled-components";



export const Container = styled.div`
    width: 100%;
    margin-top: 18px;
`;


export const Profile = styled.div`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    padding: 15px;
    width: 360px;
    border-radius: 10px;

    h3 {
        font-size: 18px; 
        font-weight: 500; 
    }

    > div {
        margin-left: 20px;
    }

    span {

        font-size: 12px; 
        font-style: normal;
        font-weight: 400; 
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        svg {
            color: ${({ theme }) => theme.COLORS.ORANGE};
            margin-right: 10px;
            font-size: 14px;
        }
    }

    img {
        width: 72px;
        height: 72px;
    }
    .info {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
    }
`;