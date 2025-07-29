import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink} from '@apollo/client';

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
  credentials: 'include',
});

const logLink = new ApolloLink((operation, forward) => {
  console.log(`Starting request for ${operation.operationName}`);
  console.log('Variables:', operation.variables);

  return forward(operation).map((response) => {
    console.log(`Response from ${operation.operationName}:`, response);
    return response;
  });
});

export const client = new ApolloClient({
  link: ApolloLink.from([logLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
    },
    query: {
      errorPolicy: 'all',
    },
  },
});