import React from 'react'
import { Page } from '@geist-ui/core'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <Page width="750px" dotBackdrop>
      <Page.Header>
        <Header />
      </Page.Header>
      <Page.Content>{children}</Page.Content>
    </Page>
  )
}

export default Layout
