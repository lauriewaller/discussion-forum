import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import Moment from "moment";

function NewPostForm(props) {
  return (
    <>
      <form onSubmit={handleNewPostFormSubmission}>
        <input type="text" name="name" placeholder="Author Name" />
        <input type="text" name="title" placeholder="Post Title" />
        <textarea type="text" name="postText" placeholder="Write Your Post" />
        <button type="submit">Submit</button>
      </form>
    </>
  );

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      name: event.target.name.value,
      post: event.target.postText.value,
      title: event.target.title.value,
      id: v4(),
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
    });
    console.log(event.target.name.value);
    console.log(event.target.title.value);
    console.log(event.target.postText.value);
  }
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default NewPostForm;
