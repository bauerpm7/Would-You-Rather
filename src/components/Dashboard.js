//various vendor imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

//material-ui imports
import QuestionCard from './QuestionCard';
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

// import custom jss styles
import { styles } from './jss_styles/Dashboard_styles'

class Dashboard extends Component {
  
  state = {
    //default state of switch
    checked: false
  }
  
  //toggle between displaying unanswered and answered questions
  handleToggleAnswered = (event) => {
    this.setState({checked: event.target.checked})
  };

  render() {
    const { classes, newQuestions, answeredQuestions } = this.props;
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
              onChange={this.handleToggleAnswered}
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

Dashboard.propTypes = {
  classes:  PropTypes.object.isRequired,
  newQuestions: PropTypes.array.isRequired,
  answeredQuestions: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(withStyles(styles)(Dashboard));