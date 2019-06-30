import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import SocialAuthButtons from '../../components/SocialAuthButtons';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 1)
  },
  warning: {
    color: theme.palette.error.main
  }
}));

export default function SignUpForm(props) {
  const { facebookLogin, googleLogin, regularSignUp, handleInputChange, inputs, isConfirmPasswordInvalid } = props;
  const { email, password, confirmPassword, isValidationFailed } = inputs;

  const classes = useStyles();

  return (
    <div>
      <Typography component='h1' variant='h5' align='center'>
        Create Account
      </Typography>
      <form className={classes.form}>
        <TextField
          variant='outlined'
          margin='dense'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          type='email'
          onChange={handleInputChange}
          value={email}
        />
        <TextField
          variant='outlined'
          margin='dense'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='password'
          onChange={handleInputChange}
          value={password}
        />
        <TextField
          variant='outlined'
          margin='dense'
          required
          fullWidth
          name='confirmPassword'
          label='Confirm Password'
          type='password'
          id='confirmPassword'
          autoComplete='password'
          onChange={handleInputChange}
          value={confirmPassword}
        />
        {
          isValidationFailed && password.split('').length < 8 ?
            <Typography
              component='p'
              variant='caption'
              align='left'
              className={classes.warning}>
              <FontAwesomeIcon
                icon={faInfoCircle}
                style={{ marginRight: 4 }}
              />
              Password should be at least 8 characters!
      </Typography>
            : null
        }
        {
          isValidationFailed && isConfirmPasswordInvalid() ?
            <Typography
              component='p'
              variant='caption'
              align='left'
              className={classes.warning}>
              <FontAwesomeIcon
                icon={faInfoCircle}
                style={{ marginRight: 4 }}
              />
              The password and confrimation password must match!
      </Typography>
            : null
        }
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          onClick={regularSignUp}>
          Continue
        </Button>
        <SocialAuthButtons
          facebookAuthHandler={facebookLogin}
          googleAuthHandler={googleLogin}
        />

        <Grid container>
          <Grid item>
            <Link href='/signin' variant='body2'>
              {"Already have an account? Sign In"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
