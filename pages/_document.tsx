import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See pictures taken by Louni Longheval"
          />
          <meta property="og:site_name" content="" />
          <meta
            property="og:description"
            content="See pictures taken by Louni Longheval"
          />
          <meta property="og:title" content="Portfolio of Louni Longheval" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Portfolio of Louni Longheval" />
          <meta
            name="twitter:description"
            content="See pictures taken by Louni Longheval"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
