import React from "react"
// import { useStaticQuery, graphql, Link } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
// const query = graphql`
//   {
//     allWpPost(
//       filter: {
//         categories: { nodes: { elemMatch: { uri: {}, name: { eq: "Stiri" } } } }
//       }
//       sort: { fields: date, order: DESC }
//     ) {
//       edges {
//         node {
//           id
//           title
//           excerpt
//           uri
//           featuredImage {
//             node {
//               localFile {
//                 childImageSharp {
//                   gatsbyImageData
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
const AllPosts = () => {
  return <div>test</div>
  // const data = useStaticQuery(query)
  // const posts = data.allWpPost.edges
  // return (
  //   <div>
  //     {posts.map(post => {
  //       return (
  //         <div key={post.node.id} className="post">
  //           <GatsbyImage
  //             image={
  //               post.node.featuredImage.node.localFile.childImageSharp
  //                 .gatsbyImageData
  //             }
  //             alt="image"
  //           />
  //           <Link to={post.node.uri}>
  //             <h2>{post.node.title}</h2>
  //           </Link>
  //           <p
  //             dangerouslySetInnerHTML={{
  //               __html: post.node.excerpt,
  //             }}
  //           ></p>
  //         </div>
  //       )
  //     })}
  //   </div>
  // )
}
export default AllPosts
