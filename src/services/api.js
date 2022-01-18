import axios from 'axios';

const baseURL = 'https://profile-tt.herokuapp.com';
const api = axios.create({
  baseURL: baseURL,
});
//logando usuario 
const service = {
  login: async (user, pass) => {
    return api.post('/login', {
      "username": user,
      "password": pass
    })
  },
  listarPerfis: async () => {
    const token = localStorage.getItem('token');
    return api.get('/profile/', {
      headers: {
        'x-access-token': token,
      }
    })
  },
  listarPerfilUnico: async (id) => {
    const token = localStorage.getItem('token');
    return api.get(`/profile/${id}`, {
      headers: {
        'x-access-token': token,
      }
    })
  }

}
//listando todos os perfis

export default service;