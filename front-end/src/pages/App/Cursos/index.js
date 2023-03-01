import { useState, useEffect } from "react";

import { CursoLine } from "./CursoLine";
import { AddCurso } from "./AddCurso";
import useCursos from "../../../hooks/api/useCursos";

export default function Cursos() {
    const { cursos } = useCursos();

    return (
        <>
        <AddCurso />
        { cursos ? (
            <RenderCursos cursos={cursos}/>
        ) : (
            'Carregando...'
            )
        }
        </>
    )
}

function RenderCursos(props) {
    const { cursos } = props;

    return (
        <>
        <CursoLine nome="Curso" carga_horaria="Carga horária" />
            {cursos[0] ? (<div>
                {cursos?.map(curso => {
                    return (
                        <>
                            <CursoLine id={curso.id} nome={curso.nome} carga_horaria={curso.carga_horaria}/>
                        </>
                    )    
                })}
            </div>
            ) : (
                'Não há cursos registrados'
            )
        }
        </>
    )
}