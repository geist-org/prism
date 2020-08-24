import Head from 'next/head'
import React from 'react'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { PrismBaseline } from '../packages/index'

const Application = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Prism style of Geist UI</title>
        <link rel="dns-prefetch" href="//prism.geist-ui.dev" />
        <meta name="google" value="notranslate" />
        <meta name="referrer" content="strict-origin" />
        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
      </Head>
      <GeistProvider>
        <PrismBaseline />
        <CssBaseline />
        <Component {...pageProps} />
      </GeistProvider>
    </>
  )
}

export default Application
