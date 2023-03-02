import styled from "styled-components"

export function CursoLine({id, nome, carga_horaria}) {
    return (
        <Container>
                <SpanLeft>{nome}</SpanLeft>
                <SpanRight>{carga_horaria}{carga_horaria === "Carga horária" ? "" : "hrs"}</SpanRight>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
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

const SpanLeft = styled.span`
    text-align: left;
`