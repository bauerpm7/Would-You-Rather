import { RECEIVE_USERS, CAST_VOTE, CREATE_USER } from '../actions/constants'

export default function users (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, ...action.users };
    case CREATE_USER:
      const { user } = action
      return {
        ...state,
        [user.id]: user
        }
    case CAST_VOTE:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      };
    default:
      return state;
  }
};