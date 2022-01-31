import React from 'react';

import App from '../src/App';

export default function Index(props) {
  return (
    <App randomQuote={props.randomQuote} />
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/api/quote/`);
  const {data: quotes} = await res.json();
  
  const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];

  return {
    props: { randomQuote }
  }
}
