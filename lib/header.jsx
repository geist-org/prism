import React from 'react'

const Header = () => {
  return (
    <header>
      <h1>@zeit-ui/react-prism</h1>
      <style jsx>{`
        header {
          height: 450px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        h1 {
          font-size: 0.8rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
      `}</style>
    </header>
  )
}

export default Header
