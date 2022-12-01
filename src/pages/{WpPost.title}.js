import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"
import NavInformatii from "../components/SideNavs/NavInformatii"
import { BiCalendar } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import * as styles from "../styles/news.module.css"
const PostTemplate = ({ data }) => {
  const { title, content, featuredImage, date, author } = data.wpPost
  const imagePath = getImage(
    featuredImage.node.localFile.childImageSharp.gatsbyImageData
  )

  return (
    <div className="pageContainer">
      <main className="content">
        <Seo title={title} />
        <h1 className={styles.articleTitle}>{title}</h1>
        <div className={styles.info2}>
          <div className={styles.date}>
            <BiCalendar />
            <p>{date}</p>
          </div>
          <div className={styles.author}>
            <CgProfile /> <p>{author.node.name}</p>
          </div>
        </div>
        <GatsbyImage
          image={imagePath}
          alt="image"
          className={styles.articleImage}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>
      </main>
      <div className="sideNav">
        <NavInformatii />
      </div>
    </div>
  )
}
export const query = graphql`
  query getPost($title: String) {
    wpPost(title: { eq: $title }) {
      title
      content
      date(formatString: "DD-MM-YYYY")
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
    }
  }
`
export default PostTemplate
