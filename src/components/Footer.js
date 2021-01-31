import React from "react";
import instagram from "../img/social/instagram.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black" style={{ paddingTop: 0 }}>
        <div className="content has-text-centered has-background-black">
          <div className="container has-background-black">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4"></div>
              <div className="column is-4 social">
                <h5>Follow us on social media</h5>
                <a
                  title="instagram"
                  href="https://instagram.com/bluecognacmusic"
                  target="_blank"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>

                <p style={{ marginTop: "10px", fontSize: "14px" }}>
                  © 2021 Blue Cognac
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
