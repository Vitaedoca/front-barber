import { Container } from "./styles";
import { Profiles } from "./styles";
import { Logout } from "./styles";
import { FiPower } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import avatarPlaceholder  from "../../assets/avatar_placeholder.svg";

export function Header() {

    const { signOut, user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    return (
        <Container>
            <Profiles to="/profile">
                
                <img src={avatarUrl} alt="" />

                <div>
                    <span>Bem vindo</span>
                    <strong>{user.name}</strong>
                </div>

            </Profiles>

            <Logout onClick={signOut}>
                <FiPower/>
            </Logout>

        </Container>
    )
}