// vendor imports
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// material ui imports
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

// function import from actions
import { handleCreateUser } from '../actions/users';

// jss styles import
import { styles } from './jss_styles/NewUserCard_styles'


class NewUserCard extends Component{

  // initial state for component
  state = {
      username: '',
      password: '',
      fullName: '',
      emptyInput: false
  }

  //submission of new user input, alert user if fields left blank or if username
  //already exists.
  handleSubmit () {
    const { handleCreateUser, users, history }  = this.props
    const { fullName, username, password } = this.state
    if (document.getElementById('fullName').value !=='' &&
        document.getElementById('username').value !=='' &&
        document.getElementById('password').value !=='' 
        ){
      if(Object.keys(users).indexOf(username) >= 0){
        return alert('Username already exists')
      } else {
        handleCreateUser(fullName, username, password)
        }
      history.push('/login')
      return
    }
    this.setState({emptyInput: true})
  }

  //set the state based on user inputs
  handleOnChange(option, text) {
    if (option === 'fullName'){
      this.setState({fullName: text})
    }
    if (option === 'username'){
      this.setState({username: text})
    }
    if (option === 'password'){
      this.setState({password: text})
    }
    
  }

  render() {
    const { classes } = this.props
    const { emptyInput } = this.state
    return (
      <Fragment>
        {//alert the user if a field is left blank
          emptyInput ? <h3 className = {classes.warning} >All fields are required</h3> 
        : null
        }
        <Card className = {classes.loginCard}>
          <div className = {classes.loginHeader}>
            <h2> Create New User </h2>
          </div>
          <form className = {classes.loginForm}>
            <Input
              id='fullName'
              className = {classes.input}
              placeholder="full name"
              onChange={(e) => this.handleOnChange('fullName', e.target.value)}>
            </Input>
            <Input
              id='username'
              className = {classes.input}
              placeholder="username"
              onChange={(e) => this.handleOnChange('username', e.target.value)}>
            </Input>
            <Input
              id='password'
              className = {classes.input}
              placeholder="password"
              type='password'
              onChange={(e) => this.handleOnChange('password', e.target.value)}>
            </Input>
            
            <Button
              className = {classes.button}
              variant = 'contained'
              color = 'secondary'
              onClick={() => {
                this.handleSubmit();
                // this.handleLogin();
                }
              }
            >
              Submit
            </Button>
          </form>
        </Card>
      </Fragment>
    )
  }
}

const mapStateToProps = ( { users }, props) => {
  return {
    users,
    ...props
  }
}

NewUserCard.propTypes = {
  classes: PropTypes.object.isRequired,
  handleCreateUser: PropTypes.func.isRequired, 
  history: PropTypes.object.isRequired, 
  users: PropTypes.object.isRequired,
}

export default withRouter(connect(mapStateToProps, { handleCreateUser })(withStyles(styles)(NewUserCard)))