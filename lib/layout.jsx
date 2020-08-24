import React from 'react'
import { Page } from '@geist-ui/react'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <Page size="mini">
      <Page.Header>
        <Header />
      </Page.Header>
      <Page.Content>{children}</Page.Content>
    </Page>
  )
}

export default Layout
