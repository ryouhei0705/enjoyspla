import React from 'react';
import Bingo from './bingo';
import Head from 'next/head';


const Home = () => {
  return (
    <div>
      <Head>
        <title>エンジョイスプラ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Bingo />
    </div>
  );
};

export default Home;
