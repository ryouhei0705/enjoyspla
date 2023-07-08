import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3691680629047240" crossOrigin="anonymous"></script>
      
      <header>
        <h1>エンジョイスプラ</h1>
        <nav>
          <ul>
            <li><Link href='/'>スプラビンゴへ</Link></li>
            <li><Link href='/about'>管理者紹介</Link></li>
          </ul>
        </nav>
      </header>

      <body>
        <Main />
        <NextScript />
      </body>

      <footer>
        <p>&copy; copyright enjoyspla 2023</p>
      </footer>
    </Html>
  )
}
