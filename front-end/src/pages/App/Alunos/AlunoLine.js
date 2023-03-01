import styled from "styled-components"

export function AlunoLine({id, nome, cpf, email, cursos}) {
    return (
        <Container>
            <div>
                <span>{nome}</span>
            </div>
            <div>
                <span>{email}</span>
            </div>
            <div>
                <span>Cursos: {cursos.length}</span>
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