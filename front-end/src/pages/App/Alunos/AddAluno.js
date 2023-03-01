import { useState } from "react"
import styled from "styled-components"

import usePostAluno from "../../../hooks/api/usePostAluno";

export function AddAluno() {
    const [cadastro, setCadastro] = useState(false);

    return (
        <>
            {
            cadastro === true ? 
                <AddAlunoPopUp setCadastro={setCadastro}/> 
                : 
                <Button onClick={()=>setCadastro(true)}>
                    Cadastrar novo aluno
                </Button>
            }
        </>
    )
}

function AddAlunoPopUp({ setCadastro }) {
    const { postAlunoAct, postAlunoLoading } = usePostAluno();

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [cursos, setCursos] = useState([])

    async function submit(event) {
        event.preventDefault();
    
        try {
          const body = {
            nome,
            cpf,
            email,
            cursos,
          } 
          await postAlunoAct(body);
          setNome('')
          setCpf('')
          setEmail('')
          setCursos([])
          setCadastro(false);
        } catch (err) {
          alert("Não foi possível cadastrar um novo aluno.")
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
                placeholder="cpf" 
                type="text" 
                value={cpf} 
                onChange={(e) => setCpf(e.target.value)}/>

                <Input 
                placeholder="email" 
                type="text" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
                
                <Button type="submit" color="primary" disabled={postAlunoLoading}>
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