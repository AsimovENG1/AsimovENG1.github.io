import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='h-100'>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3f3f3f" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#3f3f3f" />
      </Head>
      <body className='h-100'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
