import { Container } from "./styles";
import { FiScissors, FiBook, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";


export function NavBar({ icon: Icon, title: Title, isActive = false }) {
    return (
        <Container>
            <ul>
                <li>
                    <Link to="/"><FiHome/>Home</Link>
                </li>
                <li>
        
                    <Link to="/Services"><FiScissors/>Serviços</Link>
                </li>
                <li>
                    <Link to="/Agenda"><FiBook/>Agenda</Link>
                </li>
            </ul>
        </Container>
    )
}