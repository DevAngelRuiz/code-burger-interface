import axios from 'axios'

// dentro de axios, existe o interceptors pra efetuar alguma ação antes da requisição (no caso antes de enviar a requisição irá add o itoken)

const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3001'
})
apiCodeBurger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default apiCodeBurger
