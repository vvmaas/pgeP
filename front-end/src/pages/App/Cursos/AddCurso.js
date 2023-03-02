import { useState } from "react"
import styled from "styled-components"

import usePostCurso from "../../../hooks/api/usePostCurso";

export function AddCurso() {
    const [cadastro, setCadastro] = useState(false);

    return (
        <Container>
            {
            cadastro === true ? 
                <AddCursoPopUp setCadastro={setCadastro}/> 
                : 
                <Button onClick={()=>setCadastro(true)}>
                    Cadastrar novo curso
                </Button>
            }
        </Container>
    )
}

function AddCursoPopUp({ setCadastro }) {
    const { postCursoAct, postCursoLoading } = usePostCurso();

    const [nome, setNome] = useState('')
    const [carga_horaria, setCarga_horaria] = useState('')

    async function submit(event) {
        event.preventDefault();
    
        try {
          const body = {
            nome,
            carga_horaria: Number(carga_horaria)
          } 
          if(isNaN(body.carga_horaria)){
            return alert("Carga horária deve ser um número")
          }
          await postCursoAct(body);
          setNome('')
          setCarga_horaria('')
          setCadastro(false);
        } catch (err) {
          alert("Não foi possível cadastrar um novo curso.")
        }
      }

    return (
        <ContainerAdd>
            <h1>Adicionar curso</h1>
            <form onSubmit={submit}>
                <Input 
                placeholder="Nome do curso" 
                type="text" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)}/>
                <Input 
                placeholder="Carga horária (horas totais)" 
                type="text" 
                value={carga_horaria} 
                onChange={(e) => setCarga_horaria(e.target.value)}/>
                
                <Button type="submit" color="primary" disabled={postCursoLoading}>
                    Cadastrar
                </Button>

            </form>
            <Button onClick={()=>setCadastro(false)}>Cancelar</Button>
        </ContainerAdd>
    )
}

const Container = styled.div`
    margin: 20px auto; 
    width: 60%;
    padding-bottom: 15px;
    border-bottom: solid 2px lightgrey;
`

const ContainerAdd = styled.div`
    h1 {
        margin-bottom: 12px;
    }
    form {
        display: flex;
        flex-direction: column ;
        h4 {
            margin-bottom: 9px;
        }
    }
`

const Input = styled.input`
    margin-bottom: 15px;
    max-width: 300px;
`

const Button = styled.button`
    max-width: 100px;
    margin-top: 9px;
`