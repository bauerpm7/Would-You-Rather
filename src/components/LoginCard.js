//vendor imports
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// material ui imports
import { setAuthedUser } from '../actions/authedUser';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

// jss styles import
import { styles } from './jss_styles/LoginCard_styles'

class LoginCard extends Component{
  //initial state
  state = {
      username: '',
      password: '',
      invalidCredentials: false
  }

  //submit the users login in credentials if the user credentials are verified 
  //set the user as the authorized user and redirect to dashboard
  handleSubmit () {
    const { setAuthedUser, users , history}  = this.props
    const { username, password } = this.state
     Object.keys(users).forEach(user => {
      if (users[user].id === username && users[user].password === password){
         setAuthedUser(username);
         this.setState({invalidCredentials: false})
         history.push('/')
      }
      return
    })
     this.setState({invalidCredentials: true})
  }

  //update the state to reflect the username and password text
  handleOnChange(option, text) {
    option === 'username'
    ? this.setState({ username: text })
    : this.setState({ password: text })
  }

  render() {
    const { classes } = this.props
    const { username, password, invalidCredentials } = this.state
    return (
      <Fragment>
        {invalidCredentials ? <h3 className = {classes.warning} >Invalid username or password</h3>
          : null}
        <Card className = {classes.loginCard}>
          <div className = {classes.loginHeader}>
            <h2> Login </h2>
          </div>
          <form className = {classes.loginForm}>
            <Input
              className = {classes.input}
              placeholder="username"
              value={username}
              onChange={(e) => this.handleOnChange('username', e.target.value)}>
            </Input>
            <Input
              className = {classes.input}
              placeholder="password"
              type = 'password'
              value={password}
              onChange={(e) => this.handleOnChange('password', e.target.value)}>
            </Input>
            <Link to='/create'>Register</Link>
            <Button
              className = {classes.button}
              variant = 'contained'
              color = 'secondary'
              onClick={() => {
                this.handleSubmit()
                }
              }>
                Submit
            </Button>
          </form>
        </Card>
      </Fragment>
    )
  }
}

const mapStateToProps = ( { users, authedUser }, props) => {
  return {
    users,
    authedUser,
    ...props
  }
}

LoginCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRouter(connect(mapStateToProps, { setAuthedUser})(withStyles(styles)(LoginCard)))