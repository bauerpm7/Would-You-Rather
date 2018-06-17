import { RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_QUESTION_ANSWER} from './constants'
import { showLoading, hideLoading} from 'react-redux-loading'
import { saveQuestion, saveQuestionAnswer } from '../utils/api'


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


export const saveAnswer = ({ authedUser, qid, answer }) => {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  }
}

export const handleSaveAnswer  = ({qid, answer}) => (dispatch, getState) => {
  const { authedUser } = getState();

  dispatch(showLoading());

  return saveQuestionAnswer({
    authedUser,
    qid,
    answer
  })
    .then(dispatch(saveAnswer( {authedUser, qid, answer} )))
    .then(dispatch(hideLoading()));
};



export function handleAddQuestion ({ optionOne, optionTwo, author}) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch (showLoading())

    return saveQuestion({
      author: authedUser,
      optionOneText: optionOne,
      optionTwoText: optionTwo
    })
      .then((question) => dispatch(addQuestion(question)))
      .then((question) => {
        dispatch(hideLoading())
        return question
      })  
  }
}

