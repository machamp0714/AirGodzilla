import React from "react";
import ReactDOM from "react-dom";
import "../src/styles/index.scss";
import App from "./containers/App";
import store, { persistor } from "./configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div className="App">
    <CookiesProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </CookiesProvider>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
