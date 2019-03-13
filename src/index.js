import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import '../node_modules/graphiql/graphiql.css';

const fetcher = (graphQLParams) => {
  return fetch('https://graphql2chartjs.hasura.app/v1alpha1/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

ReactDOM.render(<div style={{height: '100vh'}}> <GraphiQL fetcher={fetcher} /></div>, document.getElementById('root'));

