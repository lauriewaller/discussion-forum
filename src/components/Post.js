import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenPostClicked(props.id)}>
        <h3>{props.title}</h3>
        <p>{props.name}</p>
        <p>postText: {props.postText}</p>
        <p>hi</p>
        <p>
          <em>{props.formattedWaitTime}</em>
        </p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  postText: PropTypes.string,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func,
  formattedWaitTime: PropTypes.string,
};

export default Post;
