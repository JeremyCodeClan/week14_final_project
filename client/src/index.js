import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PERSIST, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { createStore, applyMiddleware } from 'redux';
import { createStateSyncMiddleware, initMessageListener } from 'redux-state-sync';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';
import App from './App';
import reportWebVitals from './reportWebVitals';

const reduxStateSyncConfig = {blacklist: [PERSIST]};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(createStateSyncMiddleware(reduxStateSyncConfig)))
);

initMessageListener(store)
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
