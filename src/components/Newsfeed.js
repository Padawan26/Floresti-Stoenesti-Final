import React from "react"
import * as styles from "../styles/newsfeed.module.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { ImCircleRight } from "react-icons/im"

const query = graphql`
  {
    allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { uri: {}, name: { eq: "Stiri" } } } }
      }
      sort: { fields: date, order: DESC }
      limit: 4
    ) {
      edges {
        node {
          id
          title
          excerpt
          uri
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 100)
                }
              }
            }
          }
          date(formatString: "DD-MM-YYYY")
        }
      }
    }
  }
`
const Newsfeed = () => {
  const data = useStaticQuery(query)
  const posts = data.allWpPost.edges
  return (
    <section className="homeBlock">
      <h1 className={styles.name}>Ultimele Știri</h1>
      <div className={styles.cards}>
        {posts.map(post => {
          return (
            <div key={post.node.id} className={styles.card}>
              <div className={styles.image}>
                <Link to={post.node.uri}>
                  <GatsbyImage
                    objectFit="cover"
                    image={
                      post.node.featuredImage.node.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    alt="image"
                  />
                </Link>
              </div>
              <div className={styles.dateAndAuthor}>
                <span className={styles.date}>{post.node.date}</span>
                <span className={styles.author}>
                  {post.node.author.node.name}
                </span>
              </div>
              <Link to={post.node.uri} className={styles.title}>
                <h2>{post.node.title}</h2>
              </Link>
              <p
                className={styles.content}
                dangerouslySetInnerHTML={{
                  __html: post.node.excerpt,
                }}
              ></p>
              <Link to={post.node.uri} className={styles.link}>
                <ImCircleRight />
                Citește întreg articolul
              </Link>
            </div>
          )
        })}
      </div>
      <div className={styles.cta}>
        <Link to="/informatii/stiri" className={styles.link}>
          <ImCircleRight />
          Vezi toate știrile
        </Link>
      </div>
    </section>
  )
}

export default Newsfeed
