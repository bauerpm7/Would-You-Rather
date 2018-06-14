import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
 
const styles = {
  loginCard: {
    height: 300,
    width: 300,
    margin: 'auto',
    marginTop: '20%'
  }
}

class LoginCard extends Component{

  state = {
      username: '',
      password: '',
      userNotFound: false,
  }

handleSubmit () {
    const { setAuthedUser, users }  = this.props
    const { username, password } = this.state
     Object.keys(users).forEach(user => {
      if (users[user].id === username && users[user].password === password){
         setAuthedUser(username);
      }
    })
  }

  handleOnChange(option, text) {
    option === 'username'
    ? this.setState({ username: text })
    : this.setState({ password: text })
  }

  render() {
    const { users, classes } = this.props
    const { username, password } = this.state
    return (
      <Card className = {classes.loginCard}>
        <h2> Login Page</h2>
        <form>
        <input
          placeholder="username"
          value={username}
          onChange={(e) => this.handleOnChange('username', e.target.value)}>
        </input>
        <input
              className="LF_container__input--form"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => this.handleOnChange('password', e.target.value)}>
          </input>
          <Link
            to={Object.keys(users).length > 0 ? "/" : "/login"}
            onClick={() => {
              this.handleSubmit()
              }
            }
          >
          <span className="LF_container__span--form--a--text">Login</span>
          </Link>
          </form>
      </Card>
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