import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import BlogIndex from '../templates/blog-index'

class EnglishIndex extends React.Component {
  render() {
    const config = get(this, 'props.data.config')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const location = this.props.location

    return (
      <BlogIndex
        config={config}
        location={location}
        language='en'
        posts={posts}
      />
    )
  }
}

export default EnglishIndex

export const pageQuery = graphql`
  query {
    config:markdownRemark(frontmatter: {config_language: {eq: "en"}}) {
      ...ConfigIndex
    }
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { language: { eq: "en" } } }
      ) {
      edges {
        node {
          ...BlogIndex
        }
      }
    }
  }
`
