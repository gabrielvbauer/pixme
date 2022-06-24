import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pixme-production.up.railway.app/'
})

export { api }