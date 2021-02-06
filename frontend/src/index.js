import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import store from './store';
import './bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
