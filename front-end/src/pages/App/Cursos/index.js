import { useState, useEffect } from "react";
import styled from "styled-components";

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
        <Container>
            {cursos[0] ? (<div>
                <CursoLine nome="Curso" carga_horaria="Carga horária" />
                {cursos?.map(curso => {
                    return (
                        <>
                            <CursoLine id={curso.id} nome={curso.nome} carga_horaria={curso.carga_horaria}/>
                        </>
                    )    
                })}
            </div>
            ) : (
                <h5>Não há cursos registrados</h5>
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