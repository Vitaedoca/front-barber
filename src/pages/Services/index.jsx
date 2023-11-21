import { Container } from "./styles";
import { Service } from "../../components/service";
import { FiPlus } from "react-icons/fi"
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export function Services() {

    const [services, setServices] = useState([]);
    //const params = useParams()

    useEffect(() => {
        async function fetchServices() {
            const response = await api.get("/services");
            setServices(response.data.services);
        }

        fetchServices();
    }, []);

    async function handleDelete(id) {
        const confirm = window.confirm("Deseja realmente remover esse serviço?");

        if(confirm) {
            await api.delete(`/services/${id}`);
            // Atualiza a lista de serviços após a exclusão
            const updatedServices = services.filter(service => service.id !== id);
            setServices(updatedServices);
        }
    }

    return(
        <Container>
            <div className="header">
                <h1>Seus Serviços</h1>
                <Link to="/EditService">
                    Adicionar
                    <FiPlus/>
                </Link>
            </div>
            
            {
                services && services.map(service => (
                    <Service 
                        key={service.id} 
                        name={service.name} 
                        value={service.value} 
                        duration={service.duration} 
                        iconEdit={<FiEdit/>} 
                        iconDelete={<FiTrash2 onClick={() => handleDelete(service.id)}/>}
                    />
                ))
            }
        </Container>
    )
}
