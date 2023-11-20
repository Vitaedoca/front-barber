import { Container } from "./styles";


export function Button({ title, loading, ...rest }) {
    return (
        <Container
        type="button"
        {...rest}
        >
            {/* Sempre em chaves, conteúdo de uma propriedade */}
            {/* props.title */}
            {title}
        </Container>
    )
}