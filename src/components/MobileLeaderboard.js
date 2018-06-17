import React, { Component } from 'react';
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

class MobileLeaderboard extends Component  {
 
  render (){
    const { users } = this.props
    return( 
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
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
      </Paper>
    )
  }
}

export default MobileLeaderboard