import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  loginCard: {
    height: 300,
    width: 300,
    margin: 'auto',
    marginTop: '20%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  button: {
    width: '50%',
    margin: 'auto',
    marginTop: 20,
    marginBottom: 20
  },
  input: {
    marginBottom: 30
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    padding: 30
  },
  warning: {
    textAlign: 'center',
    color: '#f01659',
    marginBottom: -31,
    [theme.breakpoints.up('sm')] : {
      marginTop: 50,
      marginBottom: -71,
    },
  },
  loginHeader: {
    backgroundColor: '#3f51b5',
    color: '#fff'
  }
})

class LoginCard extends Component{

  state = {
      username: '',
      password: '',
      invalidCredentials: false
  }

handleLoggedin () {
  const { from }  = this.props.location.state
  const { history } = this.props
  history.push( from )
}

handleSubmit () {
    const { setAuthedUser, users }  = this.props
    const { username, password, invalidCredentials } = this.state
     Object.keys(users).forEach(user => {
      if (users[user].id === username && users[user].password === password){
         setAuthedUser(username);
         this.handleLoggedin()
         this.setState({invalidCredentials: false})
      }
      return
    })
     this.setState({invalidCredentials: true})
     
  }

  handleOnChange(option, text) {
    option === 'username'
    ? this.setState({ username: text })
    : this.setState({ password: text })
  }

  render() {
    const { users, classes } = this.props
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
              value={password}
              onChange={(e) => this.handleOnChange('password', e.target.value)}>
          </Input>
          <Button
            className = {classes.button}
            variant = 'contained'
            color = 'secondary'
            onClick={() => {
              this.handleSubmit()
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

const mapStateToProps = ( { users, authedUser }, props) => {
  return {
    users,
    authedUser,
    ...props
  }
}

export default withRouter(connect(mapStateToProps, { setAuthedUser})(withStyles(styles)(LoginCard)))