import { useState } from "react"
import styled from "styled-components"

import usePostCurso from "../../../hooks/api/usePostCurso";

export function AddCurso() {
    const [cadastro, setCadastro] = useState(false);

    return (
        <>
            {
            cadastro === true ? 
                <AddCursoPopUp setCadastro={setCadastro}/> 
                : 
                <Button onClick={()=>setCadastro(true)}>
                    Cadastrar novo curso
                </Button>
            }
        </>
    )
}

function AddCursoPopUp({ setCadastro }) {
    const { postCursoAct, postCursoLoading } = usePostCurso();

    const [nome, setNome] = useState('')
    const [carga_horaria, setCarga_horaria] = useState(0)

    async function submit(event) {
        event.preventDefault();
    
        try {
          const body = {
            nome,
            carga_horaria: Number(carga_horaria)
          } 
          await postCursoAct(body);
          setNome('')
          setCarga_horaria(0)
          setCadastro(false);
        } catch (err) {
          alert("Não foi possível cadastrar um novo curso.")
        }
      }

    return (
        <Container>
            <form onSubmit={submit}>
                <Input 
                placeholder="nome" 
                type="text" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)}/>

                <Input 
                placeholder="Carga horária" 
                type="number" 
                value={carga_horaria} 
                onChange={(e) => setCarga_horaria(e.target.value)}/>
                
                <Button type="submit" color="primary" disabled={postCursoLoading}>
                    Cadastrar
                </Button>

            </form>
            <Button onClick={()=>setCadastro(false)}>Cancelar</Button>
        </Container>
    )
}

const Container = styled.div`

`

const Input = styled.input`

`

const Button = styled.button`

`