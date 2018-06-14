import React, {Component} from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  questionList : {
    listStyle: 'none',
    padding: 0,
    paddingBottom: 50
  },
}


class Dashboard extends Component {
  render () {
    const { questions, classes } = this.props
    return (
      <div className = {classes.container}>
        <h3>Questions</h3>
        <ul className = {classes.questionList}>
          {questions ? questions.map(id => (
            <li 
              className = {classes.listitem}
              key = {id}>
              <Question id = {id} />
            </li>))
            : <div>No questions yet</div>
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  return {
    questions: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Dashboard))