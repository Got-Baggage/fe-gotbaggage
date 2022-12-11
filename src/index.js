import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./Components/App/App"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'https://e44fa37e-c94e-4d93-8d75-4770f9b6db3c.mock.pstmn.io/graphql',
//   cache: new InMemoryCache(),
// });
const client = new ApolloClient({
  uri: 'https://be-gotbaggage.fly.dev/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
