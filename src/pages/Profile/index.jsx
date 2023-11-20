import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Container, Avatar, Form } from "./styles";
import { FiCamera, FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
export function Profile() {

    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOl, setPasswordOl] = useState();
    const [passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [ avatar, setAvatar] = useState(avatarUrl);
    const [ avatarFile, setAvatarFile] = useState(null);


    async function handleUpdate() {
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOl
        }
        await updateProfile({ user, avatarFile });
    }

    function hanbleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return (

        <Container>

            <header>
                <Link to="/">
                    <FiArrowLeft/>
                </Link>
            </header>

            <Form>

        
                <Avatar>
                    <img src={avatar} alt="" />

                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input type="file" id="avatar" onChange={hanbleChangeAvatar}/>
                    </label>


                </Avatar>

                    <Input
                        icon={FiUser}
                        value={name}
                        onChange={e=> setName(e.target.value)}
                    />
                    <Input
                        icon={FiMail}
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                    />
                    <Input
                        icon={FiLock}
                        placeholder="Senha atual"
                        onChange={e=> setPasswordOl(e.target.value)}
                    />
                    <Input
                        icon={FiLock}
                        placeholder="Nova senha"
                        onChange={e=> setPasswordNew(e.target.value)}
                    />
                    {/* <Input
                        icon={FiLock}
                        placeholder="Confirmar senha"
                    /> */}

                    <Button
                        title="Confirmar"
                        onClick={handleUpdate}
                    />

            </Form>

        </Container>
    )
}