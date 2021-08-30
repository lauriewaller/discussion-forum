import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props) {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.postList).map((post) => {
        return (
          <Post
            whenTicketClicked={props.onTicketSelection}
            name={post.name}
            title={post.title}
            postText={post.postText}
            formattedWaitTime={post.formattedWaitTime}
            id={post.id}
            key={post.id}
          />
        );
      })}
    </React.Fragment>
  );
}
//
PostList.propTypes = {
  postList: PropTypes.object,
  onTicketSelection: PropTypes.func,
};

export default PostList;
