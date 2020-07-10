/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import MainMenu from './mainMenu'
import {Helmet} from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
  {
    allWordpressWpFavicon {
      edges {
        node {
          url {
            alt_text
            source_url
          }
        }
      }
    }
  }
  `);
  
  console.log('Layout, data:', data);

  return (
  <div>
    <Helmet>
      <title>My Awesome Portfolio</title>
      <meta name="My Awesome Portfolio" content="My Awesome Portfolio" />
      <meta charSet="utf-8" />
      <link rel="icon" type="image/png" href={data.allWordpressWpFavicon.edges[0].node.url.source_url} sizes="16x16" />
    </Helmet>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  </div>
)}


export default Layout
