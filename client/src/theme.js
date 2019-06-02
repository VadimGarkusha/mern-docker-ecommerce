import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2F2FA2',
    },
    secondary: {
      main: '#ff4081'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
      gradient: 'linear-gradient(to right, #2F2FA2 0%, #ff4081 100%);'
    },

  },
});

export default theme;