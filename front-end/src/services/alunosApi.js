import api from './api';

export async function getAlunos() {
    const response = await api.get('/alunos', 
    // {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // }
    );
    return response.data;
  }
  