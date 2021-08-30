import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import Moment from "moment";

function NewPostForm(props) {
  return (
    <>
      <form formSubmissionHandler={handleNewPostFormSubmission}>
        <input type="text" name="name" placeholder="Author Name" />
        <textarea type="text" name="post-text" placeholder="Write Your Post" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewFormCreation({
      name: event.target.name.value,
      post: event.target.post.value,
      issue: event.target.issue.value,
      id: v4(),
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true),
    });
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.issue.value);
  }
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default NewPostForm;
