import useAsync from '../useAsync';

import * as alunosApi from '../../services/alunosApi';

export default function usePostAluno() {
  const {
    data: postAlunoData,
    loading: postAlunoLoading,
    error: postAlunoError,
    act: postAlunoAct
  } = useAsync((data) => alunosApi.postAluno(data), false);

  return {
    postAlunoData,
    postAlunoLoading,
    postAlunoError,
    postAlunoAct
  };
}