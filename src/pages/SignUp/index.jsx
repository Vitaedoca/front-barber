import { useState } from "react";
import { api } from "../../services/api";
import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

export function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos");
        }

        api.post("/users", { name, email, password })
        .then( () => {
            alert("Usuário cadastrado com sucesso");
            navigate("/");
        })
        .catch( error => {
            if(error.response) {
                alert(error.response.data.message);
            }else {
                alert("Não foi possivel cadastrar");
            }
        })
    }

    return (
        <Container>

            <Background/>

            <Form>
                <h1>Barber Shop</h1>
                <p>A barbearia que você precisava</p>
    
    
                <h3>Realizar cadastro</h3>

                <Input 
                    icon={ FiUser }
                    placeholder="Nome"
                    type="text"
                    onChange = {e => setName(e.target.value)}
                />
                <Input 
                    icon={ FiMail }
                    placeholder="E-mail"
                    type="email"
                    onChange = {e => setEmail(e.target.value)}
                />
                <Input
                    icon={ FiLock } 
                    placeholder="Senha"
                    type="password"
                    onChange = {e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={ handleSignUp }/>
                
                <Link to="/">
                    <FiArrowLeft/>
                    Voltar para o login
                </Link>
            </Form>


    

        </Container>
    )
}