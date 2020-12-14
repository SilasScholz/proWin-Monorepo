import axios from 'axios';

const api = axios.create({
  baseURL: 'Add URL here',
  timeout: 3000,
});

export const getExampleAction = async () => await api.get('/example');
