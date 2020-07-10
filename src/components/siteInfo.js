import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

const SiteInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  color: white;
  margin: auto 0;
`

const SiteTitle = styled.div`
  font-weight: bold;
`

const SiteLogo = styled.img`
  width: 100px;
  margin: 10px;
`

const SiteInfo = props => (
  <StaticQuery
    query={graphql`
      {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
            }
          }
        }
        allWordpressWpLogo {
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
    `}
    render={props => {
      console.log("SiteInfo, props:", props)
      return (
        <SiteInfoWrapper>
          <SiteLogo
            src={props.allWordpressWpLogo.edges[0].node.url.source_url}
          />
          <div>
            <SiteTitle>
              {props.allWordpressSiteMetadata.edges[0].node.name}
            </SiteTitle>
            <div>
              {props.allWordpressSiteMetadata.edges[0].node.description}
            </div>
          </div>
        </SiteInfoWrapper>
      )
    }}
  />
)

export default SiteInfo
