import api from './api';

export async function getAlunos() {
    const response = await api.get('/alunos'
    );
    return response.data;
  }

  export async function postAluno(body) {
    const response = await api.post('/alunos/', body
    );
    return response.data;
  }
  