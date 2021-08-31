import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      {/* <div onClick={() => props.whenPostClicked(props.id)}> */}
      <h3>Post Title: {props.title}</h3>
      <p>Author Name: {props.name}</p>
      <p>Post Body: {props.postText}</p>
      <p>Number of votes: {props.votes}</p>

      {console.log("reviewed: " + props.reviewed)}
      {console.log("approved: " + props.approved)}
      <p>
        <em>{props.formattedWaitTime}</em>
      </p>
      <button onClick={() => props.whenUpvoteClicked(props.id)}>Upvote</button>
      <hr />
      {/* </div> */}
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
  reviewed: PropTypes.bool,
  approved: PropTypes.bool,
};

export default Post;
