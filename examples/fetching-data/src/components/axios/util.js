import axios from 'axios'

const urlBase = import.meta.baseURL || 'https://jsonplaceholder.typicode.com'

const instance = axios.create({
  baseURL: urlBase,
  // timeout: 1000,
  // headers: {
  //   'Authorization': 'Bearer ' + localStorage.getItem('token'),
  // }
})

export default instance
