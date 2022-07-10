import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import App from "./App";
import "./index.css";
import rootReducer from "./redux/reducers";

const createAppStore = () => configureStore({ reducer: rootReducer });

ReactDOM.render(
  
    <React.StrictMode>
      <Provider store={createAppStore()}>
        <BrowserRouter>
          <App />
          </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  document.getElementById("root")
);
