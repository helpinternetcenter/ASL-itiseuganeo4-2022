const ENDPOINT = 'http://10.0.3.158:3000/'
const LOGIN = ENDPOINT + 'Login'
const REGISTRAZIONE = ENDPOINT + 'Registrazione'
const HOME = ENDPOINT + 'Home'
const CARRELLO = ENDPOINT + 'Carello/?idUtente='
const IDUTENTE = ENDPOINT + 'idUtente/?id='
const INFORMAZIONI = ENDPOINT + 'DataAcquisto/?idUtente='

export const registrazione = async (value, setMessage, gotoLogin) => {
  let response = {}
  try {
    response = await fetch(REGISTRAZIONE, {
      method: 'POST',
      body: JSON.stringify(value),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    response = await response.json()
    if (response.result === true) {
      setMessage(response.text)
      gotoLogin()
    } else {
      setMessage(response.text)
    }
  } catch (error) {
    console.error(error)
  }
}

export const login = async (username, password) => {
  let response = {}
  try {
    response = await fetch(LOGIN, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })

    response = await response.json()
    return response
  } catch (error) {
    console.error(error)
  }
}

export const home = async () => {
  try {
    const temp = await fetch(HOME)
    const response = await temp.json()
    return response
  } catch (error) {
    console.error(error)
  }
}

export const carrelloUtente = async (id) => {
  try {
    const temp = await fetch(CARRELLO + id)
    const response = await temp.json()
    return response
  } catch (error) {
    console.error(error)
  }
}
export const idUtente = async (id) => {
  try {
    const temp = await fetch(IDUTENTE + id)
    const response = await temp.json()
    console.log(response)
    return response
  } catch (error) {
    console.error(error)
  }
}
export const informazioniUtente = async (valori, setMessage, gotoLogin) => {
  let response = {}
  try {
    response = await fetch(INFORMAZIONI, {
      method: 'POST',
      body: JSON.stringify(valori),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    response = await response.json()
    if (response.result === true) {
      setMessage(response.text)
      gotoLogin()
    } else {
      setMessage(response.text)
    }
  } catch (error) {
    console.error(error)
  }
}
