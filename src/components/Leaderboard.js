import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UserAvatar from './UserAvatar';
import { withStyles } from '@material-ui/core/styles';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#3f51b5',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const styles = theme => ({
  root: {
    width: 300,
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: '80%',
    minWidth: 600
    }, 
    paddingTop: 30
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

  componentDidMount() {
    this.updateViewportSize();
    window.addEventListener('resize', this.updateViewportSize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateViewportSize)
  }

  updateViewportSize () {
    this.setState({isMobile: window.innerWidth < 750 })
  }
  render() {
    const { users, history, classes } = this.props;
    const { isMobile } = this.state

    return (
      <div className= {classes.root}>
        
      {isMobile ?
        <Paper>
          <Table>
            <TableHead className = {classes.tableHead} >
              <TableRow className = {classes.tableRow}>
                <CustomTableCell color = 'white' padding = "dense">rank</CustomTableCell>
                <CustomTableCell padding = "none"></CustomTableCell>
                <CustomTableCell padding = "dense" >name</CustomTableCell>
                <CustomTableCell padding = "dense" >score</CustomTableCell>
              </TableRow>
            </TableHead>
        
            <TableBody>
              {
                users.map((user, i) => (
                  <TableRow
                    key={user.id}
                    hover
                    onClick={() => history.push(`/user/${user.id}`)}
                  >
                    <CustomTableCell padding = "dense">{i+1}</CustomTableCell>
                    <CustomTableCell padding="none">
                      <UserAvatar size= {40} id={user.id} />
                    </CustomTableCell>
                    <CustomTableCell padding = "dense">{user.name}</CustomTableCell>
                    <CustomTableCell padding = "dense" >{user.asked + user.answered}</CustomTableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </Paper> :
        <Paper>
          <Table>
            <TableHead className={classes.tableHead}>
              <TableRow className = {classes.tableRow}>
                <CustomTableCell padding = "dense">rank</CustomTableCell>
                <CustomTableCell padding="none"></CustomTableCell>
                <CustomTableCell padding = "dense" >name</CustomTableCell>
                <CustomTableCell padding = "dense" >asked</CustomTableCell>
                <CustomTableCell padding = "dense" >answered</CustomTableCell>
                <CustomTableCell padding = "dense" >score</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                users.map((user, i) => (
                  <TableRow
                    key={user.id}
                    hover
                    onClick={() => history.push(`/user/${user.id}`)}
                  >
                    <TableCell padding = "dense">{i+1}</TableCell>
                    <TableCell padding="none">
                      <UserAvatar size= {40} id={user.id} />
                    </TableCell>
                    <TableCell padding = "dense">{user.name}</TableCell>
                    <TableCell padding = "dense" >{user.asked}</TableCell>
                    <TableCell padding = "dense" >{user.answered}</TableCell>
                    <TableCell padding = "dense" >{user.asked + user.answered}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </Paper>
        } 
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: users 
    ? Object.values(users)
      .map(({ id, name, answers, questions }) => ({
        id,
        name,
        asked: questions
          ? questions.length
          : 0,
        answered: answers
          ? Object.keys(answers).length
          : 0,
      }))
      .sort((a, b) => (b.asked + b.answered) - (a.asked + a.answered))
    : []
  }
};

export default connect(mapStateToProps)(withStyles(styles)(Leaderboard))