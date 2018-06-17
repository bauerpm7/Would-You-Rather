import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { formatDate } from '../utils/helpers';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import UserAvatar from './UserAvatar';
import { Link } from 'react-router-dom';
import VictoryPie from './PieChart';
import { handleSaveAnswer } from '../actions/questions';
import PropTypes from 'prop-types';

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
  link: {
    textDecoration: 'none'
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
    paddingTop: 20,
    textTransform: 'uppercase',
    color: '#fff'
  },
  date: {
    color: '#fff'
  },
  disabledButton: { 
    marginTop: 5,
    marginBottom: 5,
    margin: 'auto',
    textTransform: 'uppercase',
    width: '90%',
    border: '0.5px solid black',
    borderRadius: 2,
    paddingTop: 10,
    paddingBottom: 10

  },
  button: {
    width: '90%',
    marginTop: 5,
    marginBottom: 5
  },
  questionContent: {
    [theme.breakpoints.up('sm')] : {
      width: 325,
    },
   [theme.breakpoints.up('md')] : {
      width: 450,
    },
  },
  container: {
    width: 325,
    height: 325,
    margin: 'auto',
    marginTop: -30,
    textAlign: 'center',
    [theme.breakpoints.up('md')] : {
      width: 450,
      height: 450
    },
  },
  title: {
    marginTop: 40,
    textAlign: 'center'
  }
})

class QuestionDetails extends Component {
  
  handleClick = answer => {
    const {id, handleSaveAnswer} = this.props;
    handleSaveAnswer({
      qid: id,
      answer
    });
  }

  handleAlreadyAnswered = () => (alert("You've already answered this question."))

  render() {
    const { 
      question : { optionOne, optionTwo, timestamp },  
      author, 
      classes,
      answered } = this.props

    const date = formatDate(timestamp)
    let optionOneVotes = optionOne.votes.length
    let optionTwoVotes = optionTwo.votes.length

    return (
      <div>
        <Card className = {classes.questionCard} >
           <CardContent className={classes.questionInfo}>
            <Link className = {classes.link} to = {`/user/${author.id}`}>
              <UserAvatar size={60} id = {author.id}
              />
              <Typography variant='body1' className = {classes.authorName} >{author.name}</Typography>
              <Typography variant='body1' className = {classes.date} >{date}</Typography>
            </Link>
          </CardContent>
          <CardContent className = {classes.questionContent}>
            <Typography 
              className = {classes.questionTitle}
              variant = 'title'> Would you rather ... ?</Typography>
            {
              answered ? 
              <Fragment> 
              <Button 
                onClick = {() => this.handleAlreadyAnswered()}
                variant="outlined" 
                color="primary" 
                className={classes.button}>
                {optionOne.text}
              </Button>
              <Button 
                onClick = {() => this.handleAlreadyAnswered()}
                variant="outlined" 
                color="secondary" 
                className={classes.button}>
                {optionTwo.text}
              </Button>
            </Fragment> :
            <Fragment> 
              <Button 
                onClick = {() => this.handleClick('optionOne')}
                variant="outlined" 
                color="primary" 
                className={classes.button}>
                {optionOne.text}
              </Button>
              <Button 
                onClick = {() => this.handleClick('optionTwo')}
                variant="outlined" 
                color="secondary" 
                className={classes.button}>
                {optionTwo.text}
              </Button>
            </Fragment>
            } 
           </CardContent>
        </Card>
        {optionOne.votes.length > 0 || optionTwo.votes.length > 0  ?
          <Fragment>
            <h3 className= {classes.title} >Vote Tally</h3>
            <div className= {classes.container}>
              <VictoryPie
                
                innerRadius = {75}
                height ={300}
                width = {300}
                labelRadius ={120}
                data = {[
                  { x: 1, y: optionOneVotes, label: `A: ${optionOneVotes}` },
                  { x: 2, y: optionTwoVotes, label: `B: ${optionTwoVotes}` } 
                  ]}
                startAngle = {-90}
                endAngle = {90}
                colorScale = {["#3f51b5",'#f01659']}
              />
            </div>
          </Fragment> :
          <h3 className= {classes.title} >Be the first to vote!</h3>
        }
        
      </div>

      )
  }
}


const mapStateToProps = ({ questions, users, authedUser }, props ) => {
  const {id} = props.match.params
  const question = questions[id];
    return {
      id,
      question,
      authedUser,
      author: users[question.author],
      answered: question.optionOne.votes.includes(authedUser) 
        ? 'optionOne' 
        : question.optionTwo.votes.includes(authedUser) 
          ? 'optionTwo' 
          : null,
    }
  } 
  
QuestionDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  question: PropTypes.object.isRequired,
  answered: PropTypes.string, 
  id: PropTypes.string.isRequired,
  handleSaveAnswer: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { handleSaveAnswer })(withStyles(styles)(QuestionDetails))