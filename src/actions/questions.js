import { RECEIVE_QUESTIONS, ADD_QUESTION} from './constants'
import { showLoading, hideLoading} from 'react-redux-loading'
import { saveQuestion } from '../utils/api'

export function  receiveQuestions ( questions ) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function addQuestion (question) {
  return{
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion ({ optionOne, optionTwo}) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch (showLoading())

    return saveQuestion({
      author: authedUser,
      optionOneText: optionOne,
      optionTwoText: optionTwo
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

