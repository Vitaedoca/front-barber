import { Container, Profile } from "./styles";
import { FiCalendar, FiClock } from "react-icons/fi"


export function Cabeleireiro({ name, imagem, onClick }) {
    return (
        <Container onClick={onClick}>
            <Profile>
                <img src={imagem} alt="" />
                <div>
                    <h3>{name}</h3>
                    <div className="info">
                        <span>

                            <FiCalendar/>
                            Segunda à sexta
                        </span>
                        <span>

                            <FiClock/>
                            8h às 18h
                        </span>
                    </div>
                </div>

            </Profile>
        </Container>
    )
}