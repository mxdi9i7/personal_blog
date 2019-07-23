import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

const token = "61953a1542da2d4cd8ecb0e8e32cfa";

const httpLink = createHttpLink({
  uri: "https://graphql.datocms.com/"
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: Object.assign(headers || {}, {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    })
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const AppContainer = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
ReactDOM.render(<AppContainer />, document.getElementById("root"));
registerServiceWorker();
