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
            reviewed={post.reviewed}
            approved={post.approved}
            votes={post.votes}
            id={post.id}
            key={post.id}
            whenUpvoteClicked={props.onClickingUpvote}
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
