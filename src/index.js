import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./views/App";
import "antd/dist/antd.less";
import "normalize.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import './i18n'
//importing redux toolkit store
import {store as reduxToolkitStore} from "./Redux/store"
import { Provider  as ReduxToolkitProvider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxToolkitProvider store={reduxToolkitStore}>
  {/* <Provider store={store}> */}
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  {/* </Provider> */}
  </ReduxToolkitProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
