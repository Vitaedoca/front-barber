import { Main, Image, Formale, Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom"; 
import { useEffect, useState } from "react";


export function EditService() {

    const [ files, setFiles ] = useState();
    const [previews, setPreviews ] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        if(!files) return;

        let tmp = [];
        for(let i = 0; i < files.length; i++) {
            tmp.push(URL.createObjectURL(files[i]));
        }
        const objectURL = tmp;
        setPreviews(objectURL);

        for(let i = 0; i < files.length; i++) {
            return() => {
                URL.revokeObjectURL(objectURL[i]);
            };
        }
    },[files]);

    const [title, setTitle] =  useState("");
    const [valor, setValor] =  useState("");
    const [tempo, setTempo] =  useState("");

    async function handleServices() {

        try {
            await api.post("/services", {
                name: title,
                value: valor,
                duration: tempo,
                image: files
            } )

            
            alert("Serviço adicionado com sucesso!");
        }
        catch (error) {
            if(error.response) {
              alert(error.response.data.message);
            } else {
              alert("Não foi possível criar a nota!");
            }
        }
        navigate("/services");
    }

    

    return(
        <Container>

            <Main>

                <header className="header">

                    <h2>Adicionar serviço</h2>

                    <Link to="/Services">Vontar</Link>

                </header>

                <Formale>

                <Image>

                    <label htmlFor="file">

                        <input 
                            type="file"
                            id="file"
                            onChange={(e) => {
                                if(e.target.files && e.target.files.length > 0) {
                                    setFiles(e.target.files);
                                }
                            }}
                        />
                        {/* Verifica se tem alguma imagem para preview */}
                        {previews && previews.length > 0 ? (
                            previews.map((pic) => <img src={pic} key={pic} />)
                        ) : (
                            <span>Imagem</span>
                        )}
                    </label>

                </Image>
                
                    <Input 
                        type="text" 
                        placeholder="Titulo"
                        onChange={e=> setTitle(e.target.value)}
                    />
                    <Input 
                        type="number" 
                        placeholder="Valor"
                        onChange={e=> setValor(e.target.value)}
                        
                    />
                    <Input 
                        type="text" 
                        placeholder="Tempo"
                        onChange={e => setTempo(e.target.value) }
                    />

                </Formale>

                <Button title="Salvar" onClick={handleServices}/>
            </Main>

            
        </Container>

        
    )
}