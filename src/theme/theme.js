import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue';

export const globalTheme = createMuiTheme({
  mainStyles: {
    backgroundColor: grey[800],
    colorText: grey[100],
    colorLink: lightBlue[200],
  },
});
