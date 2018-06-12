import React, {Component} from 'react';


class Login extends Component {
  state = {
    username: '',
    password: '',
    userNotFound: false,
  }

  handleSubmit(e) {
    e.preventDefault();
    let { users } = this.props;
    let { username, password } = this.state;
    if (users.indexOf(username) >= 0 && users.indexOf(username).password === password) {
      this.props.dispatch(setAuthedUser(this.state.username));
    } else {
      this.setState({
        userNotFound: true,
      });
    }
  }

  render() {
    return (
      
    )
  }

}