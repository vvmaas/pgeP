import styled from "styled-components"

export function AlunoLine({id, nome, cpf, email, cursos}) {
    return (
        <Container>
                <SpanLeft>{nome}</SpanLeft>
                <SpanCenter>{email}</SpanCenter>
                <SpanRight>Cursos: {cursos.length}</SpanRight>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: fit-content;
    margin: 0 auto;
    border: solid 1px grey;
    padding: 4px;
    span {
        width: 300px;
    }
`

const SpanRight = styled.span`
    text-align: right;
`

const SpanCenter = styled.span`
    text-align: center;
`

const SpanLeft = styled.span`
    text-align: left;
`