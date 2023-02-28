import useAsync from '../useAsync';
//import useToken from '../useToken';

import * as cursosApi from '../../services/cursosApi';

export default function useCursos() {
  //const token = useToken();
  
  const {
    data: cursos,
    loading: cursosLoading,
    error: cursosError,
    act: getCursos
  } = useAsync(() => cursosApi.getCursos());

  return {
    cursos,
    cursosLoading,
    cursosError,
    getCursos
  };
}