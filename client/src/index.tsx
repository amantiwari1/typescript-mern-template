import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ScrollToTop from "./website/utils/ScrollToTop";
import App from './website/App';
import store from './shared/store';
ReactDOM.render(

  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);