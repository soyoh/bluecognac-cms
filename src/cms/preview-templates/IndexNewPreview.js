import React from "react";
import PropTypes from "prop-types";
import { IndexNewTemplate } from "../../templates/index-new";

const IndexPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexNewTemplate
        image={getAsset(data.image)}
        title={data.title}
        singlename={data.singlename}
        bandname={data.bandname}
        singleoutdate={data.singleoutdate}
        storelink={data.storelink}
        buttontext={data.buttontext}
        content={widgetFor("body")}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
};

export default IndexPagePreview;
