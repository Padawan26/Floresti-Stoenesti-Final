import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/newsfeed.module.css"
import { ImCircleRight } from "react-icons/im"
const query = graphql`
  {
    allWpMediaItem(
      sort: { order: DESC, fields: date }
      filter: { title: { eq: "eveniment" } }
      limit: 4
    ) {
      nodes {
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100, height: 650, placeholder: TRACED_SVG)
          }
        }
        caption
        id
        description
      }
    }
  }
`

export default function EventFeed() {
  const data = useStaticQuery(query)
  const events = data.allWpMediaItem.nodes
  return (
    <section className="homeBlock">
      <h1>Evenimente</h1>
      <div className={styles.homeEvents}>
        {events.map(event => {
          const pathToImage = getImage(
            event.localFile.childImageSharp.gatsbyImageData
          )
          var link = event.description
          const title = event.caption.replace("<p>", "").replace("</p>", "")
          if (link) link = link.replace("<p>", "").replace("</p>", "")
          return (
            <div key={event.id} className="event">
              <h2>{title}</h2>
              <a href={link} target="_blank" rel="noreferrer">
                <GatsbyImage image={pathToImage} alt="image" />
              </a>
            </div>
          )
        })}
      </div>
      <div className={styles.cta}>
        <Link to="/despre-comuna/evenimente" className={styles.link}>
          <ImCircleRight />
          Vezi toate evenimentele
        </Link>
      </div>
    </section>
  )
}
