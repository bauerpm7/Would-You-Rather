import { RECEIVE_USERS, CREATE_USER } from './constants'
import { saveUser } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function createUser (user ){  
  return {
    type: CREATE_USER,
    user,
  } 
}

export function handleCreateUser ( name, id, password ) {
  return (dispatch, getState) => {
    dispatch ( showLoading ())
    return saveUser({
      name,
      id,
      password
    })
      .then((user) => dispatch(createUser(user)))
      .then(() => dispatch(hideLoading()))
  }
}


