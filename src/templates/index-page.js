import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const IndexPageTemplate = ({
  image,
  singlename,
  bandname,
  description,
  content,
  contentComponent,
  storelink,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
      <div className="section margin-top-0">
        <div className="container has-text-centered">
          <div class="columns is-mobile is-centered">
            <div class="column is-half">
              <img
                src={`${
                  !!image.childImageSharp
                    ? image.childImageSharp.fluid.src
                    : image
                }`}
              />
            </div>
          </div>

          <h1 class="title is-1" style={{ fontSize: "40px" }}>
            {singlename}
          </h1>
          <h3 class="title is-3">{bandname}</h3>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          {/* <div className="content">
          <div className="tile">
            <h1 className="title">{mainpitch.title}</h1>
          </div>
          <div className="tile">
            <h3 className="subtitle">{mainpitch.description}</h3>
          </div>
        </div> */}
          <div className="columns is-mobile is-centered">
            <div className="column is-8">
              <PageContent className="content" content={content} />

              <div className="has-text-centered">
                <button class="button is-link">Buy the song</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  singlename: PropTypes.string,
  bandname: PropTypes.string,
  singleoutdate: PropTypes.string,
  content: PropTypes.string,
  storelink: PropTypes.string,
};

const IndexPage = ({ data }) => {
  // const { frontmatter } = data.markdownRemark;
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <IndexPageTemplate
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        singlename={post.frontmatter.singlename}
        bandname={post.frontmatter.bandname}
        singleoutdate={post.frontmatter.singleoutdate}
        storelink={post.frontmatter.storelink}
        content={post.html}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image
        singlename
        bandname
        singleoutdate
        storelink
      }
    }
  }
`;
