import { loginConstants } from '../constants'


function setLoginPending(isLoginPending) {
  return {
    type: loginConstants.SET_LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: loginConstants.SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginError(loginError) {
  return {
    type: loginConstants.SET_LOGIN_ERROR,
    loginError
  }
}