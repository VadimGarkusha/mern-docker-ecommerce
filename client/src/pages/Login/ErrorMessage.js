import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'inline-block',
    padding: theme.spacing(0.7),
    backgroundColor: theme.palette.error.light,
    border: [
      [1, 'solid', theme.palette.error.main]
    ]
  },
  message: {
    color: theme.palette.error.main,
    display: 'inline-block',
    width: '90%',
    float: 'right'
  },
  icon: {
    color: theme.palette.error.main,
    textAlight: 'left',
    display: 'inline-block',
    width: '10%',
    marginTop: theme.spacing(1),
    fontSize: 18
  }
}));

const ErrorMessage = (props) => {
  const { message } = props;
  const classes = useStyles();
  return (
    <Paper
      square={true}
      className={classes.paper}>
      <FontAwesomeIcon
            icon={faExclamationCircle}
            className={classes.icon}
          />
          <Typography
            component='span'
            variant='body2'
            align='right'
            className={classes.message}>
            {message}
          </Typography>
    </Paper>
  )
}

export default ErrorMessage;