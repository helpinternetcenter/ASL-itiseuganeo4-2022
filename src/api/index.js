const ENDPOINT = 'http://10.0.3.158:3000/'
const LOGIN = ENDPOINT + 'Login'
const REGISTRAZIONE = 'http://10.0.3.158:3000/Registrazione'
const HOME = 'http://10.0.3.158:3000/Home'

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
    return (response)
  } catch (error) {
    console.error(error)
  }
}
