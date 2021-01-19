import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const GalleryPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      {/* <div className="container has-text-centered">
        <div className="columns is-mobile is-centered">
          <div className="column is-half">
            <img
              src={`${
                !!image.childImageSharp
                  ? image.childImageSharp.fluid.src
                  : image
              }`}
            />
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

GalleryPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  image: PropTypes.string,
  contentComponent: PropTypes.func,
};

const GalleryPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <GalleryPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  );
};

GalleryPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default GalleryPage;

export const galleryPageQuery = graphql`
  query GalleryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
      }
    }
  }
`;
