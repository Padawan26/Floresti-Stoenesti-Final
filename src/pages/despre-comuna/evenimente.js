import React from "react"
import NavComuna from "../../components/SideNavs/NavComuna"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

const Evenimente = ({ data }) => {
  const events = data.allWpMediaItem.nodes
  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Evenimente</h1>
        <div className="events">
          {events.map(event => {
            const pathToImage = getImage(
              event.localFile.childImageSharp.gatsbyImageData
            )
            var link = event.description
            const title = event.caption.replace("<p>", "").replace("</p>", "")
            if (link) link = link.replace("<p>", "").replace("</p>", "")
            return (
              <div key={event.id} className="event">
                <h2 style={{marginBottom:"1rem"}}>{title}</h2>
                <a href={link} target="_blank" rel="noreferrer">
                  <GatsbyImage image={pathToImage} alt="image" />
                </a>
              </div>
            )
          })}
        </div>
      </main>
      <div className="sideNav">
        <NavComuna />
      </div>
    </div>
  )
}
export const query = graphql`
  {
    allWpMediaItem(
      sort: { order: DESC, fields: date }
      filter: { title: { eq: "eveniment" } }
    ) {
      nodes {
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100, height: 500, placeholder: TRACED_SVG)
          }
        }
        caption
        id
        description
      }
    }
  }
`
export default Evenimente