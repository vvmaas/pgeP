import { useState, useEffect } from "react";

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
        <>
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
        </>
    )
}