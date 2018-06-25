import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';

const styles = theme => ({
  root: {
    width: '100%',
    // overflowX: 'auto',
  },
  table: {
    // minWidth: 700,
    width: '100%'
  },
});

function MessageList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Table className={classes.table}>

        <TableBody style={{width: "100%"}}>
          {props.messages.map(message => {
            return (
              <TableRow key={message.id} style={{width: "100%", border: "0"}}>
                <TableCell style={{borderBottom: 0, width: "100%"}}>
                  <div style={{width: "calc(80%)", overflow: "auto", display: "inline-block"}}>
                    <p style={{fontWeight: "bold", marginBottom: 5, color: "#3f51b5"}}>{message.user.username}</p>
                    <p style={{width: "100%", overflowWrap: "normal"}}>{message.content}</p>
                  </div>
                  <div style={{width: "20%", display: "inline-block", float: "right", verticalAlign: "top"}}>
                    <p style={{color: "#999"}}>{moment(message.created_at).format("h:mm:ss a")}</p>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

MessageList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessageList);
