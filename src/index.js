import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter  } from "react-router-dom";
import App from "./views/App";
import "antd/dist/antd.less";
import "normalize.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import './i18n'
//importing redux toolkit store
import {store as reduxToolkitStore} from "./Redux/store"
import { Provider  as ReduxToolkitProvider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

root.render(
  <ReduxToolkitProvider store={reduxToolkitStore}>
  {/* <Provider store={store}> */}
    <PersistGate persistor={persistor}>
    <AlertProvider template={AlertTemplate} {...options}>
      <HashRouter >   
        <App />
      </HashRouter >
      </AlertProvider>
    </PersistGate>
  {/* </Provider> */}
  </ReduxToolkitProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
