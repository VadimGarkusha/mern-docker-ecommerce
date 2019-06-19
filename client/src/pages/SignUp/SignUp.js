import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { serverUrl } from '../../config/const';
import SignUpForm from './SignUpForm';


const useStyles = makeStyles(theme => ({
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
}));

export default function SignUp() {
  const classes = useStyles();
  const [inputs, setInputs] = useState({ email: '', password: '', isButtonDisabled: true });

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  };

  const facebookLogin = async (response) => {
    const { email, name, id } = response;
    const requestObj = { email, name, socialId: id };
    var serverResponse = await axios.post(`${serverUrl}/signup/social`, { requestObj });
    console.log(serverResponse);
  }

  const googleLogin = async (response) => {
    const { email, familyName, givenName, googleId } = response.profileObj;
    const requestObj = {
      email,
      name: `${givenName} ${familyName}`,
      socialId: googleId
    };
    var serverResponse = await axios.post(`${serverUrl}/signup/social`, { requestObj });
    console.log(serverResponse);
  }

  const regularSignUp = async (e) => {
    if (e)
      e.preventDefault();

    const { email, password } = inputs;

    var serverResponse = await axios.post(`${serverUrl}/signup`, { email, password });
    console.log(serverResponse);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonIcon className={classes.largeIcon} />
        </Avatar>
        <SignUpForm
          facebookLogin={facebookLogin}
          googleLogin={googleLogin}
          regularSignUp={regularSignUp}
          handleInputChange={handleInputChange}
          inputs />
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );

}
