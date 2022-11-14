import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { history, store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { CssBaseline } from '@material-ui/core';
import { HistoryRouter as Router } from "redux-first-history/rr6";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <CssBaseline />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
