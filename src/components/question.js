import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { formatDate } from '../utils/helpers'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import UserAvatar from './UserAvatar'

const styles = theme => ({
  questionCard: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    width: 300,
    marginTop: 40,
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
    [theme.breakpoints.up('sm')] : {
      width: 475,
      flexDirection: 'row'
    },
    [theme.breakpoints.up('md')] : {
      width: 650,
      flexDirection: 'row'
    },
  },
  questionInfo: {
    backgroundColor: '#3f51b5',
    color: '#fff',
    width: 300,
    display: 'flex',
    flexDirection:'column',
    padding: 0,
    paddingTop: 15,
    paddingBottom: 15,
    [theme.breakpoints.up('sm')] : {
      width: 200
    },
  },
  avatar: {
    margin: 'auto',
    width: 60,
    height: 60,
  },
  authorName: {
    textTransform: 'uppercase',
    color: '#fff'
  },
  date: {
    color: '#fff'
  },
  button: { 
    marginTop: 5,
    marginBottom: 5,
    width: '90%'
  },
  questionContent: {
    [theme.breakpoints.up('sm')] : {
      width: 325,
    },
   [theme.breakpoints.up('md')] : {
      width: 450,
    },
  }
})


class Question extends Component {
  render() {
    const { question : {id, optionOne, optionTwo, timestamp },  author, classes
           } = this.props
    const date = formatDate(timestamp)

    return (
      <div>
        <Card raised = 'true' className = {classes.questionCard} >
          <CardContent className={classes.questionInfo}>
            <UserAvatar id = {author.id}
            />
            <Typography variant='body1' className = {classes.authorName} >{author.name}</Typography>
            <Typography variant='body1' className = {classes.date} >{date}</Typography>
          </CardContent>
          <CardContent className = {classes.questionContent}>
            <Typography variant = 'subheading'> Would you rather ... ?</Typography>
            <Button variant="outlined" color="primary" className={classes.button}>
              {optionOne.text}
            </Button>
            <Button variant="outlined" color="secondary" className={classes.button}>
              {optionTwo.text}
            </Button>
           </CardContent>
        </Card>
      </div>
      )
  }
}


const mapStateToProps = ({ questions, users, authedUser }, { id }) => {
  const question = questions[id];
  
  return {
    question,
    author: users[question.author],
  };
};


export default connect(mapStateToProps)(withStyles(styles)(Question))