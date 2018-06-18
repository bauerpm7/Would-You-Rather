// vendor imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//material ui import
import { withStyles } from '@material-ui/core/styles';

//component imports
import LeaderboardCard from './LeaderboardCard';


// jss styles
const styles = theme => ({
  root: {
    width: 300,
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: 500
    },
    [theme.breakpoints.up('md')]: {
      width: 700
    },
    paddingTop: "15%",
  },
    
})

class Leaderboard extends Component {

   constructor(props){
    super(props);
    this.state = {
      isMobile: false,
    }
    this.updateViewportSize = this.updateViewportSize.bind(this)
  }

  // listen for viewport size change
  componentDidMount() {
    this.updateViewportSize();
    window.addEventListener('resize', this.updateViewportSize);
  }

  // stop listening for viewport size change when component unmounts
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateViewportSize)
  }

  //toggle the state of isMobile based on viewport width
  updateViewportSize () {
    this.setState({isMobile: window.innerWidth < 600 })
  }
  render() {
    const { users, classes } = this.props;
    const { isMobile } = this.state
    return (
      <div className= {classes.root}>
        <LeaderboardCard
          users = { users }
          isMobile = {isMobile}
        /> 
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    //if there are users map over the users and return an array with the users id,
    //name, answers, and questions
    users: users 
    ? Object.values(users)
      .map(({ id, name, answers, questions }) => ({
        id,
        name,
        //check to see the user has asked any questions
        asked: questions
          ? questions.length
          : 0,
        //check to see if the user has answered any questions
        answered: answers
          ? Object.keys(answers).length
          : 0,
      }))
      //sort the returned users based on their score
      .sort((a, b) => (b.asked + b.answered) - (a.asked + a.answered))
    : []
  }
};

Leaderboard.propTypes = {
  classes : PropTypes.object.isRequired,
  history : PropTypes.object.isRequired,
  users : PropTypes.array.isRequired
}

export default connect(mapStateToProps)(withStyles(styles)(Leaderboard))