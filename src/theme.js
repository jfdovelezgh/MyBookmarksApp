import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#2a846a',
      light: '#5eb498',
      dark: '#00563f',
    },
    secondary: {
      main: '#808796',
      light: '#afb7c7',
      dark: '#535a68',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#282c34',
    },
  },
});

export default theme;