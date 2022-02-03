import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="robots" content="all" />
          <meta
            httpEquiv="Content-Security-Policy"
            content="connect-src 'self' vitals.vercel-insights.com"
          />
          <meta charSet="utf-8" />
          <meta name="title" content="Alan Giavino" />
          <meta
            name="description"
            content="Hey! I'm Alan Giavino, a front-end developer. This is my personal portfolio. Here you can see my work and contact me. "
          />
          <meta
            name="keywords"
            content="Alan Giavino, github, frontend developer, designer"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="/seo-bg.png" />
          <meta property="og:title" content="Alan Giavino" />
          <meta
            property="og:description"
            content="Hey! I'm Alan Giavino, a front-end developer. This is my personal portfolio. Here you can see my work and contact me."
          />
          <meta property="og:image" content="/seo-bg.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://portfolio-alangiavino.vercel.app/"
          />
          <meta property="twitter:title" content="Alan Giavino" />
          <meta
            property="twitter:description"
            content="Hey! I'm Alan Giavino, a front-end developer. This is my personal portfolio. Here you can see my work and contact me."
          />
          <meta property="twitter:image" content="/seo-bg.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
