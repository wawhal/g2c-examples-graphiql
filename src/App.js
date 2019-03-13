import React from 'react';
import GraphiQL from 'graphiql';
import '../node_modules/graphiql/graphiql.css';

const App = () => {
  const fetcher = (graphQLParams) => {
    return fetch('https://graphql2chartjs.hasura.app/v1alpha1/graphql', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(graphQLParams),
    }).then(response => response.json());
  }
  return (
    <div>
      <GraphiQL fetcher={fetcher} />
    </div>
  )
}

export default App;
