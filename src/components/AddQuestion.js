import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { handleAddQuestion } from '../actions/questions';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { styles } from '../jss_styles/AddQuestion_styles'


class AddQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    newQID: '',
    cancel: false
  };

 

  OPTION_MAX = 60;

  handleChange = key => e => {
    if (e.target.value.length <= this.OPTION_MAX) {
      this.setState({ [key]: e.target.value });
    }
  };

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
    if(cancel) {
      return <Redirect to={'/'} />;
    }

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
                placeholder="First Option"
                value={optionOne}
                onChange={this.handleChange('optionOne')}
                multiline
                fullWidth
                required
                rows={2}
                InputProps={{
                  endAdornment: <InputAdornment position="end">{oneLeft <= WARN_SIZE ? oneLeft : ''}</InputAdornment>,
                }}
              />
                <TextField
                  className = {classes.textField}
                  placeholder="Second Option"
                  value={optionTwo}
                  onChange={this.handleChange('optionTwo')}
                  multiline
                  fullWidth
                  required
                  rows={2}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">{twoLeft <= WARN_SIZE ? twoLeft : ''}</InputAdornment>,
                  }}
                />
            </div>

            <div style={{ display: 'flex' }}>
              <Button
                color = 'secondary'
                style={{ marginTop: '10px' }}
                onClick={() => this.setState({ cancel: true })}
              >
                Cancel
              </Button>

              <div style={{ flex: '1' }}></div>
              <Button
                style={{ marginTop: '10px' }}
                color= 'primary'
                type="submit"
                disabled={optionOne === '' || optionTwo === ''}
              >
                Submit
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