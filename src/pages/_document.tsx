import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
}

    render() {
        return (
          <Html>
            <Head>
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
              />
              <meta content="VulpoTheDev" property="og:title" />
              <meta
                content="Website that showcases my Projects, Experiences, Comissions and all about me"
                property="og:description"
              />
              <meta content="https://vulpo.xyz" property="og:url" />
              <meta content="/images/vulpo.png" property="og:image" />
              <meta
                content="#ff00dd"
                data-react-helmet="true"
                name="theme-color"
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