import { userConstants } from '../constants'

export default function users (state = {}, action) {
  switch(action.type) {
    case userContstants.RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case userConstants.CREATE_USER :
      const { user } = action
      let avatarUrl = '';
      if (user.avatarUrl !== null){
        avatarUrl = [user.avatarUrl] : ...state[user.avatarUrl]
      }
      return { 
        ...state,
        [action.user.id]: action.user,
        ...avatarUrl
     }
    default : 
      return state
  }
}