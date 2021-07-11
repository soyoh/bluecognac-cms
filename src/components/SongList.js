import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { HTMLContent } from "../components/Content";
import { SongPageTemplate } from '../templates/song-page'

class SongList extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <>
        {posts &&
          posts.map(({ node: post }) => (
            <>
              <SongPageTemplate
                contentComponent={HTMLContent}
                image={post.frontmatter.image}
                title={post.frontmatter.title}
                singlename={post.frontmatter.singlename}
                bandname={post.frontmatter.bandname}
                singleoutdate={post.frontmatter.singleoutdate}
                storelink={post.frontmatter.storelink}
                buttontext={post.frontmatter.buttontext}
                content={post.html}
              />
              <hr />
            </>
          ))}
      </>
    )
  }
}

SongList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query SongListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "song-page" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              html
              frontmatter {
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                singlename
                bandname
                singleoutdate
                storelink
                buttontext
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <SongList data={data} count={count} />}
  />
)
