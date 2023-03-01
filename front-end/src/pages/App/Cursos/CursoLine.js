import styled from "styled-components"

export function CursoLine({id, nome, carga_horaria}) {
    return (
        <Container>
            <div>
                <span>{nome}</span>
            </div>
            <div>
                <span>{carga_horaria}{carga_horaria === "Carga horária" ? "" : "hrs"}</span>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: 0 auto;
    border: solid 1px grey;
    padding: 4px;

    div: {
        display: flex;
    }
`