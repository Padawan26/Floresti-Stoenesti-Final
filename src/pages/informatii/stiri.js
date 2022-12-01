import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useState } from "react"
import Pagination from "../../components/Pagination"
import NavInformatii from "../../components/SideNavs/NavInformatii"
import * as styles from "../../styles/news.module.css"
import { ImCircleRight } from "react-icons/im"
import { BiCalendar } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"

const Stiri = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPage] = useState(7)
  const posts = data.allWpPost.nodes
  const indexLast = currentPage * itemsPage
  const indexFirst = indexLast - itemsPage

  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }
  const increment = pages => {
    if (currentPage < pages.length) setCurrentPage(currentPage + 1)
  }
  const decrement = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const currentItems = posts.slice(indexFirst, indexLast)

  return (
    <div className="pageContainer">
      <main className="content">
        <h1>Știri</h1>
        <Pagination
          itemsPage={itemsPage}
          totalItems={posts.length}
          currentPage={currentPage}
          paginate={paginate}
          increment={increment}
          decrement={decrement}
        />
        <div>
          <div className={styles.posts}>
            {currentItems.map(post => {
              const pathToImage = getImage(
                post.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData
              )
              return (
                <div key={post.id} className={styles.post}>
                  <div className={styles.top}>
                    <Link to={post.uri}>
                      <GatsbyImage
                        className={styles.image}
                        image={pathToImage}
                        alt="image"
                        objectFit="fixed"
                      />
                    </Link>

                    <div className={styles.text}>
                      <Link to={post.uri}>
                        <h2>{post.title}</h2>
                      </Link>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt,
                        }}
                      ></p>
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <div className={styles.info}>
                      <div className={styles.date}>
                        <BiCalendar />
                        <p>{post.date}</p>
                      </div>
                      <div className={styles.author}>
                        <CgProfile /> <p>{post.author.node.name}</p>
                      </div>
                    </div>
                    <Link to={post.uri} className={styles.link}>
                      <ImCircleRight />
                      Citește întreg articolul
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
      <div className="sideNav">
        <NavInformatii />
      </div>
    </div>
  )
}

export const query = graphql`
  {
    allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { uri: {}, name: { eq: "Stiri" } } } }
      }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        id
        title
        excerpt
        uri
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
                gatsbyImageData(
                  quality: 100
                  width: 300
                  height: 200
                  placeholder: TRACED_SVG
                )
              }
            }
          }
        }
      }
    }
  }
`
export default Stiri
