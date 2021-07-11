import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import ReactAudioPlayer from "react-audio-player";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

export const IndexNewTemplate = ({
  image,
  singlename,
  bandname,
  content,
  contentComponent,
  storelink,
  buttontext,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
      <div className="section margin-top-0" style={{ paddingBottom: 0 }}>
        <div className="container has-text-centered">
          <div className="columns is-centered">
            <div className="column is-half-desktop">
              <img
                src={`${
                  !!image.childImageSharp
                    ? image.childImageSharp.fluid.src
                    : image
                }`}
              />
            </div>
          </div>

          <h1 className="title is-3" style={{ marginBottom: 5 }}>
            {singlename}
          </h1>

          <h3 className="title is-4">{bandname}</h3>

          <ReactAudioPlayer
            src="/img/BeforetheDawn.mp3"
            controls
            controlsList="nodownload"
            onPlay={(e) => {
              trackCustomEvent({
                category: "Play Button",
                action: "Click",
                label: "Play button clicked",
              });
            }}
            onEnded={(e) => {
              trackCustomEvent({
                category: "End play",
                action: "play",
                label: "End play song",
              });
            }}
          />
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8">
              <PageContent className="content" content={content} />

              <div className="has-text-centered">
                <a href={storelink} target="_blank" rel="noreferrer">
                  <button
                    className="button is-link"
                    style={{ backgroundColor: "#9E492A" }}
                  >
                    {buttontext}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexNewTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  singlename: PropTypes.string,
  bandname: PropTypes.string,
  singleoutdate: PropTypes.string,
  content: PropTypes.string,
  storelink: PropTypes.string,
  buttontext: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <IndexNewTemplate
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
  query IndexNewTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-new" } }) {
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
`;
