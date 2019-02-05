import React from 'react';
import queryString from 'query-string';

export default function Result({ location }) {
  console.log(queryString.parse(location.search));
  return (
    <div>
      <h1>Result page</h1>
    </div>
  );
}
