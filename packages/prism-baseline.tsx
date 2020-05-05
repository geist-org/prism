import React from 'react'
import { useTheme } from '@zeit-ui/react'
import flush from 'styled-jsx/server'
import flushToReact from 'styled-jsx/server'

const PrismBaseline: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const theme = useTheme()
  
  return (
    <>
      {children}
      <style global jsx>{`
        .tag {
          color: ${theme.palette.accents_5};
        }
        
        .punctuation {
          color: ${theme.palette.accents_4};
        }
        
        .attr-name {
          color: ${theme.palette.accents_6};
        }
        
        .attr-value {
          color: ${theme.palette.accents_4};
        }
        
        .language-javascript {
          color: ${theme.palette.accents_4};
        }
        
        span.class-name {
          color: ${theme.palette.warning};
        }
        
        span.maybe-class-name {
          color: ${theme.palette.purple};
        }
        
        span.token.string {
          color: ${theme.palette.accents_5};
        }
        
        span.token.comment {
          color: ${theme.palette.accents_3};
        }
        
        span.token.parameter {
          color: ${theme.palette.violet };
        }
        
        span.token.property-access {
          color: ${theme.palette.warningDark};
        }
        
        span.keyword {
          color: ${theme.palette.success};
        }
        
        span.token.boolean {
          color: ${theme.palette.successDark};
        }
        
        span.plain-text {
          color: ${theme.palette.accents_3};
        }
      `}</style>
    </>
  )
}

type MemoPrismBaselineComponent<P = {}> = React.NamedExoticComponent<P> & {
  flush: typeof flushToReact
}

const MemoPrismBaseline = React.memo(PrismBaseline) as MemoPrismBaselineComponent<React.PropsWithChildren<{}>>
MemoPrismBaseline.flush = flush

export default MemoPrismBaseline
