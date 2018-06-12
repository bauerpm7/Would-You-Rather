import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './question'
import { isLoading } from './loading'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions}) => {
        dispatch(receiveQuestions(questions))
        dispatch(receiveUsers(users))
        dispatch(setAuthedUser(null))
        dispatch(setLoaded())
        dispatch(hideLoading())
    })
  }
}

function castVote ({ authedUser, qid, answer }) {
  return {
    type: CAST_VOTE,
    authedUser,
    qid,
    answer
  }
}

export function handleCastVote ({qid, answer}) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveVote({
      authedUser,
      qid,
      answer
    })
      .then(dispatch(castVote({ authedUser, qid, answer})))
      .then(dispatch(hideLoading()));
  };
};