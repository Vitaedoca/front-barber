import { useContext, useState } from "react";
import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom"
import { AuthContext } from "../../hooks/auth";

export function Signin() {

    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");

    const { signIn } = useContext(AuthContext);
    
    async function handleSignIn() {
        signIn({ email, password });
    }

    return (
        <Container>

            <Form>
                <h1>Barber Shop</h1>
                <p>A barbearia que você precisava</p>
    
    
                <h3>Faça seu login</h3>

                <Input 
                    icon={ FiMail }
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    icon={ FiLock } 
                    placeholder="Senha"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />

                <Button
                    title="Entrar"
                    onClick={ handleSignIn }
                />
                
                <Link to="/register">
                    Criar conta
                </Link>
            </Form>

    
            <Background/>

        </Container>
    )
}