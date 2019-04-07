import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {Provider} from './store/context';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
