import { useState } from "react"
import styled from "styled-components"

import useCursos from "../../../hooks/api/useCursos";
import usePostAluno from "../../../hooks/api/usePostAluno";

export function AddAluno() {
    const [cadastro, setCadastro] = useState(false);
    const { cursos } = useCursos();

    return (
        <Container>
            {
            cursos ? 
                cadastro ? 
                    <AddAlunoPopUp Cursos={cursos} setCadastro={setCadastro}/> 
                    : 
                    <Button onClick={()=>setCadastro(true)}>
                        Cadastrar novo aluno
                    </Button>
                : 
                ""
            }
        </Container>
    )
}

function AddAlunoPopUp({ setCadastro, Cursos }) {
    const { postAlunoAct, postAlunoLoading } = usePostAluno();

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cursos, setCursos] = useState([])

    async function submit(event) {
        event.preventDefault();
    
        try {
          const body = {
            nome,
            email,
            cursos,
          } 
          await postAlunoAct(body);
          setNome('')
          setEmail('')
          setCursos([])
          setCadastro(false);
        } catch (err) {
          alert("Não foi possível cadastrar um novo aluno.")
        }
      }

      function handleCheckBoxes(id) {
        for (let i = 0; i < cursos.length; i++) {
            if(cursos[i] === id){
                const arr = [...cursos]
                arr.splice(i, 1)
                setCursos(arr);
                return
            }  
        }
        const arr = [...cursos]
        arr.push(id)
        setCursos(arr);
      }

    return (
        <ContainerAdd>
            <h1>Adicionar aluno</h1>
            <form onSubmit={submit}>
                <Input 
                placeholder="nome" 
                type="text" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)}/>

                <Input 
                placeholder="email" 
                type="text" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/>

                <h4>Selecione os cursos: </h4>
                    {Cursos.map(curso => {
                        return(
                            <CheckBoxWrapper key={curso.id}>
                                <label>{curso.nome}</label>
                                <input id={curso.id} type="checkbox" value={curso.id} onChange={(e) => handleCheckBoxes(e.target.value)} />
                            </CheckBoxWrapper>
                        )
                    })}
                
                <Button type="submit" color="primary" disabled={postAlunoLoading}>
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

const CheckBoxWrapper = styled.div`
    width: 20%;
    justify-content: space-between;
`

const Button = styled.button`
    max-width: 100px;
    margin-top: 9px;
`