import styled from "styled-components";


export const Container = styled.div`

    margin: 50px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }


    > div {
        display: flex;
        align-items: center;
        

        > a {
            display: flex;
            align-items: center;
            font-size: 16px;
            padding: 10px 26px;
            gap: 5px;
            cursor: pointer;
            border-radius: 5px;
            color: ${({theme}) => theme.COLORS.WHITE};
            background-color: ${({theme}) => theme.COLORS.ORANGE};

                > svg {
                    font-size: 22px;
                }
        }
    }
`;