import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/about.module.scss'

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

            <div className={styles.subtitle}>
                サイト管理者
            </div>
            <div>
                ryouhei0705
            </div>

            <div className={styles.subtitle}>
                ツイッターアカウント
            </div>
            <div>
                <a href="https://twitter.com/ryouhei_0705">@ryouhei0705</a>
            </div>

            <div>
                アマゾンリンク
                <br></br>
                エンジョイスプラ及びその管理者であるryouhei0705は、Amazonのアソシエイトとして適格販売により収入を得ています。
            </div>
       
        </div>
    );
};

export default About;
