import createDataContext from './createDataContext'
import { login } from '../api'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signout':
      return { id: null }
    case 'signin':
    case 'signup':
      return {
        id: action.payload.id
      }
    default:
      return state
  }
}

const signup = dispatch => {
  return ({ email, password }) => {
    console.log('Signup')
  }
}

const signin = dispatch => {
  return ({ username, password }) => {
    login(username, password).then((response) => {
      dispatch({
        type: 'signin',
        payload: {
          id: response.idUtente
        }
      })
    }).catch(e => {
      console.error(e)
    })
  }
}

const signout = dispatch => {
  return () => {
    dispatch({ type: 'signout' })
  }
}

export const { Context, Provider } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { id: null }
)
