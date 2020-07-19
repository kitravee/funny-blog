import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/Post"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <StaticQuery
      query={indexQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(
              ({ node: { frontmatter, excerpt } }) => (
                <Post
                  title={frontmatter.title}
                  author={frontmatter.author}
                  path={frontmatter.path}
                  date={frontmatter.date}
                  body={excerpt}
                />
              )
            )}
          </div>
        )
      }}
    />
  </Layout>
)

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            path
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
