import Document, { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@geist-ui/react'
import flush from 'styled-jsx/server'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = CssBaseline.flush()

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styles}
          {flush()}
        </>
      ),
    }
  }

  render() {
    return (
      <Html lang="en-us">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-110371817-19" />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-110371817-19');
              `,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
