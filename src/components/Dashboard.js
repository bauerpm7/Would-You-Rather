import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionCard from './QuestionCard';
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    width:'100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
   questionList : {
    listStyle: 'none',
    padding: 0,
    paddingBottom: 50
  },
  label : {
    margin: 'auto'
  }
}

class Dashboard extends Component {
  state = {
    checked: false
  }
  
  handleChange = (event) => {
    this.setState({checked: event.target.checked})
  };

  render() {
    const { authedUser, classes, newQuestions, answeredQuestions } = this.props;
    const { checked } = this.state;

    return (
      <div className = {classes.container}>
        <FormControlLabel
          className= {classes.label}
          control={
            <Switch
              className= {classes.switch}
              checked = {this.state.checked}
              value='checked'
              onChange={this.handleChange}
            />
          }
          label = "Show Questions You've Answered"
        />  
        <ul className = {classes.questionList}> 
        {checked 
          ? answeredQuestions.map(id => (
            <li 
              className = {classes.listitem}
              key = {id}>
              <QuestionCard id = {id} />
            </li>))
          : newQuestions.map(id => (
            <li 
              className = {classes.listitem}
              key = {id}>
              <QuestionCard id = {id} />
            </li>))
          }
        </ul>
      </div>  
    );
  }
}

const mapStateToProps = ({ authedUser, questions }) => {
  return {
    authedUser,
    newQuestions: Object.values(questions).filter(question => !question.optionOne.votes.includes(authedUser) && 
                  !question.optionTwo.votes.includes(authedUser))
                  .sort((a, b) => b.timestamp - a.timestamp)
                  .map(question => question.id),
    answeredQuestions:  Object.values(questions).filter(question => question.optionOne.votes.includes(authedUser) ||
                        question.optionTwo.votes.includes(authedUser))
                        .sort((a, b) => b.timestamp - a.timestamp)
                        .map(question => question.id),
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Dashboard));