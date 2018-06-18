//various vendor imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

//material-ui imports
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';

//import function from questions actions
import { handleAddQuestion } from '../actions/questions';

//import jss styles
import { styles } from './jss_styles/AddQuestion_styles'


class AddQuestion extends Component {
  // initial state for the component
  state = {
    optionOne: '',
    optionTwo: '',
    newQID: '',
    cancel: false
  };

  OPTION_MAX = 60;

/**
 * Sets the state of OptionOne or OptionTwo as long as the input has not exceeded
 * max character cout
 **/
  handleChange = key => e => {
    if (e.target.value.length <= this.OPTION_MAX) {
      this.setState({ [key]: e.target.value });
    }
  };

  /**
   * Calls the handleAddQuestion function then sets the state newQID to the new
   * id of the created question
   *    *   */
  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { handleAddQuestion, id } = this.props;

    handleAddQuestion({ optionOne, optionTwo, id })
      .then(res => {
        this.setState({
          newQID: res.question.id
        });
      });
  }
  
  render() {
    const { optionOne, optionTwo, newQID, cancel } = this.state;
    const { classes } = this.props

    // if the cancel button is clicked redirect the user to the dashboard
    if(cancel) {
      return <Redirect to={'/'} />;
    }
    //if newQID exists redirect the user to the new question
    if (newQID) {
      return <Redirect to={`/question/${newQID}`} />;
    }

    const WARN_SIZE = 30;

    const oneLeft = this.OPTION_MAX - optionOne.length;
    const twoLeft = this.OPTION_MAX - optionTwo.length;

    return (
      <Card className = {classes.card}>
        <CardContent className = {classes.cardContent}>

          <h2 className={classes.title}>
            Would You Rather...?
          </h2>

          <form onSubmit={this.handleSubmit}>
            <div className = {classes.container}>         
              <TextField
                className = {classes.textField}
                placeholder="Option One"
                value={optionOne}
                onChange={this.handleChange('optionOne')}
                multiline
                fullWidth
                required
                rows={2}
                InputProps={{
                  //show the user how many characters are left before they hit the limit
                  endAdornment: <InputAdornment position="end">{oneLeft <= WARN_SIZE ? oneLeft : ''}</InputAdornment>,
                }}
              />
              <TextField
                className = {classes.textField}
                placeholder="Option Two"
                value={optionTwo}
                onChange={this.handleChange('optionTwo')}
                multiline
                fullWidth
                required
                rows={2}
                InputProps={{
                  //show the user how many characters are left before they hit the limit
                  endAdornment: <InputAdornment position="end">{twoLeft <= WARN_SIZE ? twoLeft : ''}</InputAdornment>,
                }}
              />
            </div>
            <div style={{ display: 'flex' }}>
              <Button
                style={{ marginTop: '10px' }}
                color= 'primary'
                type="submit"
                disabled={optionOne === '' || optionTwo === ''}
              >
                Submit
              </Button>
              <div style={{ flex: '1' }}></div>
              <Button
                color = 'secondary'
                style={{ marginTop: '10px' }}
                onClick={() => this.setState({ cancel: true })}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card> 
    );
  }
}

AddQuestion.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default connect(null, { handleAddQuestion })(withStyles(styles)(AddQuestion));