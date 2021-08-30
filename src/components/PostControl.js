import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from "./../actions";

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      editing: false,
    };
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(
      () => this.updatePostElapsedWaitTime(),
      60000
    );
  }

  componentWillUnmount() {
    console.log("component unmounted!");
    clearInterval(this.waitTimeUpdateTimer);
  }

  updatePostElapsedWaitTime = () => {
    const { dispatch } = this.props;
    Object.values(this.props.masterPostList).forEach((post) => {
      const newFormattedWaitTime = post.timeOpen.fromNow(true);
      const action = a.updateTime(post.id, newFormattedWaitTime);
      dispatch(action);
    });
  };

  handleClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  };

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const action = a.addPost(newPost);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.props.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />
      );
      buttonText = "Return to Post List";
    } else {
      currentlyVisibleState = (
        <PostList
          postList={this.props.masterPostList}
          //onPostSelection={this.handleChangingSelectedPost}
        />
      );
      buttonText = "Add Post";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

PostControl.propTypes = {
  masterPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    masterPostList: state.masterPostList,
    formVisibleOnPage: state.formVisibleOnPage,
  };
};

// Note: we are now passing mapStateToProps into the connect() function.

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;
