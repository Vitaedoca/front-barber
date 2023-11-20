import { Container } from "./styles";
import { Description } from "./styles";
import { FiTrash2, FiEdit, FiClock, FiDollarSign } from "react-icons/fi"


export function Service({name, value, duration, iconEdit, iconDelete }) {
    return(
        <Container>
            <img src="https://images.unsplash.com/photo-1695033023233-6aae57417ddb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" />

            <Description>

                        <span>
                            
                            {name}
                            
                        </span>
                    
                        <span>

                            <FiDollarSign/>
                            <strong>R$ {value}</strong>
                            
                        </span>

                        <span>
                            
                            <FiClock/>
                            {duration} min
                            
                        </span>

            </Description>
                    
                <div className="container-icons">

                    {/* {iconEdit} */}
                    
                    {iconDelete}

                </div>


        </Container>
    )
}