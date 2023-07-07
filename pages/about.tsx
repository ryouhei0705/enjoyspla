import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const About = () => {
    return (
        <div>
            {/* <HamburgerMenu /> */}
            <Head>
                <title>エンジョイスプラ</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Link href='/'>
                スプラビンゴへ
            </Link>
            <div>
                <p>
                    このサイトは<a href="https://twitter.com/ryouhei_0705">@ryouhei0705</a>が運営しています。また、Amazonのアソシエイトとして、ryouhei0705は適格販売により収入を得ています。
                </p>
            </div>
        </div>
    );
};

export default About;
