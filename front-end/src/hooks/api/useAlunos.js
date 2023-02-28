import useAsync from '../useAsync';
//import useToken from '../useToken';

import * as alunosApi from '../../services/alunosApi';

export default function useAlunos() {
  //const token = useToken();
  
  const {
    data: alunos,
    loading: alunosLoading,
    error: alunosError,
    act: getAlunos
  } = useAsync(() => alunosApi.getAlunos());

  return {
    alunos,
    alunosLoading,
    alunosError,
    getAlunos
  };
}