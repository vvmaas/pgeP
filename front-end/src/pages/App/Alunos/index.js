import { useState, useEffect } from "react";
import styled from "styled-components";

import { AlunoLine } from "./AlunoLine";
import { AddAluno } from "./AddAluno";
import useAlunos from "../../../hooks/api/useAlunos";

export default function Alunos() {
    const { alunos } = useAlunos();

    return (
        <>
        <AddAluno />
        { alunos ? (
            <RenderAlunos alunos={alunos}/>
        ) : (
            'Carregando...'
            )
        }
        </>
    )
}

function RenderAlunos(props) {
    const { alunos } = props;

    return (
        <Container>
            {alunos[0] ? (<div>
                {alunos?.map(aluno => {
                    return (
                        <>
                            <AlunoLine key={aluno.id} cursos={aluno.cursos} id={aluno.id} nome={aluno.nome} email={aluno.email} />
                        </>
                    )    
                })}
            </div>
            ) : (
                'Não há alunos registrados'
            )
        }
        </Container>
    )
}

const Container = styled.div`
    width: 60%;
    margin: 0 auto;
    h5 {
        width: 300px;
    }
`