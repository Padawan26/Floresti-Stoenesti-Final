import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allWpPost(
      filter: {
        categories: {
          nodes: { elemMatch: { uri: {}, name: { eq: "Anunţuri publice" } } }
        }
      }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        id
        title
        excerpt
        uri
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 90

                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`

const ToateAnunturile = () => {
  const data = useStaticQuery(query)
  const posts = data.allWpPost.nodes
  return (
    <div>
      {posts.map(post => {
        return (
          <div key={post.id} className="post">
            <GatsbyImage
              image={
                post.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData
              }
              alt="image"
            />
            <Link to={post.uri}>
              <h2>{post.title}</h2>
            </Link>
            <p
              dangerouslySetInnerHTML={{
                __html: post.excerpt,
              }}
            ></p>
          </div>
        )
      })}
    </div>
  )
}

export default ToateAnunturile
