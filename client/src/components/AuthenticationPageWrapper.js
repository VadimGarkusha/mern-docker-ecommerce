import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const styles = theme => ({
  '@global': {
    body: {
      background: theme.palette.background.gradient,
    },
  },
  paper: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: theme.palette.background.default,
    border: [
      [2, 'solid', theme.palette.primary.main]
    ],
    borderRadius: 15
  },
  avatar: {
    width: 80,
    height: 80,
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  largeIcon: {
    width: 70,
    height: 70
  }
});


class AuthenticationPageWrapper extends React.Component {

  render() {
    const {classes, Component} = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PersonIcon className={classes.largeIcon}/>
          </Avatar>
          <Component/>
        </div>
        <Box mt={5}>
        </Box>
      </Container>
    );
  }
}

export default withStyles(styles)(AuthenticationPageWrapper);