import styled from "styled-components";


export const Container = styled.div`

    max-width: 100%;

    > ul {
        
        margin-top: 25px;
        list-style-type: none;
        text-decoration: none;
        padding: 0;

        > li {
            list-style-type: none;
            text-decoration: none;
            border-radius: 5px;
            
            &:hover {
                    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
            }
            
            > a {
                display: flex;
                align-items: center;
                padding: 12px 30px;
                font-size: 18px;
                gap: 9px;   
                color: ${({ theme }) => theme.COLORS.WHITE};
                
            }

        }
    }
`;