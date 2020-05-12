import Head from 'next/head'
import React from 'react'
import { ZEITUIProvider, CSSBaseline } from '@zeit-ui/react'
import { PrismBaseline } from '../packages/index'

const Application = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Prism style of ZEIT UI</title>
        <link rel="dns-prefetch" href="//prism.zeit-ui.co" />
        <meta name="google" value="notranslate" />
        <meta name="referrer" content="strict-origin" />
        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
      </Head>
      <ZEITUIProvider>
        <PrismBaseline />
        <CSSBaseline />
        <Component {...pageProps} />
      </ZEITUIProvider>
    </>
  )
}

export default Application
