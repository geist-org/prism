import React from 'react'
import { Link, Image } from '@geist-ui/core'

const PoweredBy: React.FC<unknown> = () => {
  return (
    <div className="powered-by">
      <Link
        target="_blank"
        rel="noreferrer nofollow"
        href="https://geist-ui.dev/powered-by-netlify">
        <Image
          src="https://www.netlify.com/img/global/badges/netlify-dark.svg"
          alt="Deploys by Netlify"
        />
      </Link>
      <style jsx>{`
        .powered-by {
          position: fixed;
          bottom: 20px;
          right: 20px;
        }
      `}</style>
    </div>
  )
}

export default PoweredBy
