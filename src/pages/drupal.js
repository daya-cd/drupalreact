import React,{ Component } from "react"
import Layout from "../components/layout"


const Drupal =({data})=>
(
  <Layout>
  <div>
  {data.allNodeMembers.edges.map(({ node,i}) => (
    <div key={i}>{node.title}</div>
  ))}
</div>
</Layout>
)

export default Drupal

export const query = graphql`
{
  allNodeMembers {
    edges {
      node {
        title
        body {
          value
        }
      }
    }
  }
}
`