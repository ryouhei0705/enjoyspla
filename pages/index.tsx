import React from 'react';
import Bingo from './bingo';
import AmazonAffiliate from './amazonAffiliate';
import Head from 'next/head';
import HamburgerMenu from '../components/HamburgerMenu'

const Home = () => {
  return (
    <div>
      {/* <HamburgerMenu /> */}
      <Head>
        <title>エンジョイスプラ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Bingo />
      <AmazonAffiliate />
    </div>
  );
};

export default Home;
