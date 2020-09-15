import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';

import { App } from './components/App';
import { store } from './store';
import { globalTheme } from './theme';

import * as serviceWorker from './serviceWorker';
import './styles.scss';

const customHistory = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={globalTheme}>
        <BrowserRouter history={customHistory}>
          <App />
        </BrowserRouter>
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
