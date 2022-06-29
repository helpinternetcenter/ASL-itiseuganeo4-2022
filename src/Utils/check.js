import credenziali from '../api/credenziali.json'

export function ricerca (nome, password) {
  let ingresso = false
  let val = 0
  const utenteLog = {
    ingresso: false,
    id: 0
  }

  for (let i = 0; i < credenziali.data.length; i++) {
    if (nome == credenziali.data[i].usernameCredenziali & password == credenziali.data[i].passwordCredenziali) {
      ingresso = true
      val = i
      break
    }
  }

  utenteLog.ingresso = ingresso
  utenteLog.id = val

  return (utenteLog)
}
