import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import reportWebVitals from './reportWebVitals';

/*const Root = () => {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/page2' component={Page2} />
        </Switch>
      </Router>
  )
}*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
