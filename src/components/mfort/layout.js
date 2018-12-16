import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import { css } from '@emotion/styled'
import { configureAnchors } from 'react-scrollable-anchor'





import { theme, hover, transitions } from '../../library/utils'

configureAnchors({
  offset: -60,
  scrollDuration: 800
})

// injectGlobal`
//   a {
//     text-decoration: none;
//     color: #1f1f1f;

//     ${hover(css`
//       color: ${theme.mint};
//     `)}

//     ${transitions('color 0.1s ease')};
//   }



//   button, input {
//     &:focus {
//       outline: 0;
//     }
//   }
// `

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `}
    render={data => (
      
       
       <div><main>
       {children}
       
     </main>
   
     </div>
        
        
      
    )}
  />
)



export default Layout
