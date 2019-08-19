import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ErrorMessage from './ErrorMessage';
import SocialAuthButtons from '../../components/SocialAuthButtons';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 1)
  }
}));

export default function LoginForm(props) {
  const { facebookLogin, googleLogin, regularLogin, handleInputChange, inputs, wrongCredentials } = props;
  const classes = useStyles();
  return (
    <div>
      <Typography component='h1' variant='h5' align='center'>
        Sign in
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
          value={inputs.email}
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
          value={inputs.password}
        />
        { inputs.isSubmitted && wrongCredentials ?
          <ErrorMessage message="We didn't find an account with that email address or password." />
          : null }
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          onClick={regularLogin}>
          Continue
        </Button>
        <SocialAuthButtons
          facebookAuthHandler={facebookLogin}
          googleAuthHandler={googleLogin}
        />

        <Grid container>
          <Grid item xs>
            <Link href='#' variant='body2'>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href='/signup' variant='body2'>
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );

}

