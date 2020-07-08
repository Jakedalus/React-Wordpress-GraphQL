import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const PortfolioItems = () => {

  // console.log('PortfolioItems, props :>> ', props);
  
  return (
    <StaticQuery query={graphql`
    {
        allWordpressWpPortfolio {
          edges {
            node {
              id  
              title
              slug
              content
              excerpt
              featured_media {
                source_url
              }
            }
          }
        }
      }
    `} render={props => props.allWordpressWpPortfolio.edges.map(portfolioItem => (
        <div key={portfolioItem.node.id}>
            <h2>{portfolioItem.node.title}</h2>
            <img src={portfolioItem.node.featured_media.source_url} alt="portfolio thumbnail" />
            <div dangerouslySetInnerHTML={{__html: portfolioItem.node.excerpt}} />
            <Link to={`portfolio/${portfolioItem.node.slug}`}>Read more</Link>
        </div>
    ))}/>
  );
}

export default PortfolioItems
