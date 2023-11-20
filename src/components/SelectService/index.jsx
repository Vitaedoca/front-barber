import { Container } from "./styles";


export function SelectService({ name, value, duration, onClick }) {
    return(
        <Container onClick={onClick}>
            <img src="https://images.unsplash.com/photo-1695653422877-87f3a1520e42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
        
        <div>
            <h3>{name}</h3>
            <div className="description">
                <span><strong>R$ {value}</strong></span>
                <span>{duration} min</span>
            </div>
        </div>
        </Container>
    )
}