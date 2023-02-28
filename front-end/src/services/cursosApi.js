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