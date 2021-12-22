import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './App';

//provider is a component that we get from react-redux 
//this provider is a component that we wrap around the
//application. it allows us to get access to all the things
//related to the store.

//provider is a component class that we get from react-redux
//that once passed the store object will be able to give
//that redux store context to the rest of the application
//so that we can dispatch actions to that store or we can
//pull values of the store and into our component.

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>     
    </HashRouter>
    </Provider>,
    document.getElementById('root')
);

