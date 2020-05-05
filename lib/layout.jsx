import React from 'react'
import { useTheme } from '@zeit-ui/react'
import Header from './header'

const Layout = ({ children }) => {
  const theme = useTheme()
  
  return (
    <section>
      <Header />
      {children}
      <style jsx>{`
        section {
          width: calc(${theme.layout.pageWidth} - 200pt);
          max-width: 90vw;
          margin: 0 auto;
          padding: calc(${theme.layout.gap} * 3) 0;
        }
      `}</style>
    </section>
  )
}

export default Layout
