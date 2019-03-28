import { createMuiTheme } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import { indigo } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: {
      main: indigo[500]
    },
    secondary: red,
    error: red
  },
  typography: {
    useNextVariants: true
  }
});
