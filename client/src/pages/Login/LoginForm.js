import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF as faCoffee } from '@fortawesome/free-brands-svg-icons/faFacebookF';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 1)
  },
  socialLoginButton: {
    width: '100%',
    margin: '5px 0',
    borderRadius: 2
  },
  facebookButton: {
    background: '#4D69B9',
    height: 43,
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px',
    borderColor: '#d8d8d8',
    color: '#fff',
    border: 'transparent',
    paddingLeft: 11,
    textAlign: 'left',
    fontSize: 14,
    fontFamily: 'Helvetica, Arial, "lucida grande",tahoma,verdana,arial,sans-serif'
  }
}));

export default function LoginForm(props) {
  const { facebookLogin, googleLogin, regularLogin, handleInputChange, inputs} = props;
  const classes = useStyles();

  return (
       <div>
      <Typography component='h1' variant='h5' align='center'>
        Sign in
      </Typography>
      <form className={classes.form}>
        <TextField
          variant='outlined'
          margin='normal'
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
          margin='normal'
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
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          onClick={regularLogin}>
          Sign In
        </Button>
        <div style={{ flexWrap: 'wrap' }} >
          <FacebookLogin
            cssClass={`${classes.socialLoginButton} ${classes.facebookButton}`}
            icon={<FontAwesomeIcon icon={faCoffee} size='2x' style={{ marginRight: 25, fontSize: '1.5em' }} />}
            appId='292213141686047'
            fields='name,email,picture'
            callback={facebookLogin}
            textButton='Continue with Facebook'
          />
          <GoogleLogin
            className={classes.socialLoginButton}
            clientId='586788897755-ueejkhs6hfo0vl4nmku73h3lte9k3f71.apps.googleusercontent.com'
            buttonText='Login with Google'
            onSuccess={googleLogin}
            onFailure={googleLogin}
          />
        </div>

        <Grid container>
          <Grid item xs>
            <Link href='#' variant='body2'>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href='/signup' variant='body2'>
              {'Don"t have an account? Sign Up'}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );

}

