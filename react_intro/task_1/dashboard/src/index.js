import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GetNotifications from './Notifications';

ReactDOM.render(
  <React.StrictMode>
    <div name="root-notifications">
      <GetNotifications />
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
