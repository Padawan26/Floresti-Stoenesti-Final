import React from "react"
import * as styles from "../styles/newsfeed.module.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { ImCircleRight } from "react-icons/im"

const query = graphql`
  {
    allWpPost(
      filter: {
        categories: {
          nodes: { elemMatch: { uri: {}, name: {} } }
        }
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
          slug
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

const NoticeFeed = () => {
  const data = useStaticQuery(query)
  const posts = data.allWpPost.edges
  return (
    <section className="homeBlock">
      <h1 className={styles.name}>Ultimele Anunțuri</h1>
      <div className={styles.cards}>
        {posts.map(post => {
          return (
            <div key={post.node.id} className={styles.card}>
              <div className={styles.image}>
                <Link to={post.node.slug}>
                  <GatsbyImage
                    image={
                      post.node.featuredImage.node.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    objectFit="contain"
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
              <Link to={post.node.slug} className={styles.title}>
                <h2>{post.node.title}</h2>
              </Link>
              <p
                className={styles.content}
                dangerouslySetInnerHTML={{
                  __html: post.node.excerpt,
                }}
              ></p>
              <Link to={post.node.slug} className={styles.link}>
                <ImCircleRight />
                Citește întreg articolul
              </Link>
            </div>
          )
        })}
      </div>
      <div className={styles.cta}>
        <Link to="/informatii/anunturi" className={styles.link}>
          <ImCircleRight />
          Vezi toate anunțurile
        </Link>
      </div>
    </section>
  )
}

export default NoticeFeed
