import { RECEIVE_USERS, SAVE_QUESTION_ANSWER, CREATE_USER } from '../actions/constants'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, ...action.users };
    case CREATE_USER:
      const { user } = action
      return {
        ...state,
        [user.id]: user
        }
    case SAVE_QUESTION_ANSWER:
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