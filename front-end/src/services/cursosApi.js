import api from './api';

export async function getCursos() {
    const response = await api.get('/cursos', 
    // {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // }
    );
    return response.data;
  }

  export async function postCurso(body) {
    const response = await api.post('/cursos/', body,
    // {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // }
    );
    return response.data;
  }