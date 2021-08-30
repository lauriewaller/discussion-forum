import * as c from "./ActionTypes";

export const toggleForm = () => ({
  type: c.TOGGLE_FORM,
});

export const addPost = (post) => {
  const { name, title, postText, id, formattedWaitTime, timeOpen } = post;
  return {
    type: c.ADD_POST,
    name: name,
    title: title,
    postText: postText,
    id: id,
    formattedWaitTime,
    timeOpen: timeOpen,
  };
};

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime,
});
