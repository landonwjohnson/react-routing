import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { Hashrouter as Router} from "react-router-dom";

import store from './store';

ReactDOM.render(
  <Router>
  <Provider store={ store }>
    <App />
  </Provider>
  </Router>, 
  document.getElementById('root')
);
registerServiceWorker();