import React, { Component, Fragment } from 'react';
import Header from './Header'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from '../components/Dashboard'
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import Login from './Login'
import NewUser from './NewUser';
import NotFound from './NotFound';
import QuestionDetails from './QuestionDetails'
import UserDetails from './UserDetails'
import AddQuestion from './AddQuestion'
import Leaderboard from './Leaderboard'



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
    <Router>
      <Fragment>
        <LoadingBar />
        <div >
          <Header/>

            <Switch>
              <PrivateRoute path = '/' exact component={Dashboard}/>
              <Route path = '/login' component = {Login} />
              <Route path = '/create' component = {NewUser} />
              <PrivateRoute path = '/question/:id' component = {QuestionDetails}/>
              <PrivateRoute path = '/user/:id' component = {UserDetails}/>
              <PrivateRoute path = '/new_question' component = {AddQuestion}/>
              <PrivateRoute path = '/leaderboard' component = {Leaderboard}/>
              <Route component={NotFound}/>
            </Switch>
        </div>
      </Fragment>
      </Router>
    );
  }
}



export default connect()(App);

