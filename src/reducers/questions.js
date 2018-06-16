import { RECEIVE_QUESTIONS, ADD_QUESTION } from '../actions/constants';
import { SAVE_QUESTION_ANSWER } from '../actions/constants';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS: {
      return { 
        ...state,
        ...action.questions 
      };
    }
    case ADD_QUESTION: {
      const { question } = action;
      return {
        ...state,
        [question.id]: {
          ...question
        }
      };
    }
    case SAVE_QUESTION_ANSWER: 
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authedUser)
          }
        }
      };
    
    default:
      return state;
  }
}