import useAsync from '../useAsync';

import * as cursosApi from '../../services/cursosApi';

export default function usePostCurso() {
  const {
    data: postCursoData,
    loading: postCursoLoading,
    error: postCursoError,
    act: postCursoAct
  } = useAsync((data) => cursosApi.postCurso(data), false);

  return {
    postCursoData,
    postCursoLoading,
    postCursoError,
    postCursoAct
  };
}