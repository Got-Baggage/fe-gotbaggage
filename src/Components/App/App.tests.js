import { render, screen } from '@testing-library/react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const client = new ApolloClient({
  uri: 'https://be-gotbaggage.fly.dev/graphql',
  cache: new InMemoryCache(),
});

test('renders baggage app', () => {
  render(
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>
  );

  const linkElement = screen.getByText('BAGGAGE');
  expect(linkElement).toBeInTheDocument();
});
