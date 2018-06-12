import { SET_AUTHED_USER } from '../actions/constants'

export default function authedUsers (state = null, action) {
  switch(action.type) {
    case SET_AUTHED_USER : 
      return action.id
    default: 
      return state
  }

}