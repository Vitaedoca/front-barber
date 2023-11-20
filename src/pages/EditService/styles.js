import styled from "styled-components";


export const Container = styled.div`

    width: 100%;
    margin-top: 36px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    align-items: center;
    justify-content: center;
    
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        
        > h2 {
            font-size: 36px;
            margin-bottom: 25px;
            font-weight: 500; 
        }

        > a {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 16px; 
        }
    }

`;

export const Main = styled.div`

    /* display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between; */
`;


export const Formale = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


> div {
    width: 550px;
    margin-bottom: 15px;
}

`;

export const Image = styled.div`

    width: 186px;
    height: 350px;
    

    > label {

        border-radius: 5px;

        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        width: 100%;
        height: 100%;
        border-style: dashed;
        border-width: 1px;
        border-radius: 5px;
        cursor: pointer;

        > input {
            display: none;
            color: blue;
        }
        
        img {
            max-width: 100%;
        }

        svg {
            width: 25px;
            height: 25px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }
    }
`;