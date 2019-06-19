import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles';
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

export default function SocialAuthButtons({ facebookAuthHandler, googleAuthHandler}) {
  const classes = useStyles();

  return (
    <div style={{ flexWrap: 'wrap' }} >
      <FacebookLogin
        cssClass={`${classes.socialLoginButton} ${classes.facebookButton}`}
        icon={<FontAwesomeIcon icon={faCoffee} size='2x' style={{ marginRight: 25, fontSize: '1.5em' }} />}
        appId='292213141686047'
        fields='name,email,picture'
        callback={facebookAuthHandler}
        textButton='Continue with Facebook'
      />
      <GoogleLogin
        className={classes.socialLoginButton}
        clientId='586788897755-ueejkhs6hfo0vl4nmku73h3lte9k3f71.apps.googleusercontent.com'
        buttonText='Continue with Google'
        onSuccess={googleAuthHandler}
        onFailure={googleAuthHandler}
      />
    </div>
  )
}