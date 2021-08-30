/* eslint-disable import/no-anonymous-default-export */
import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {
  const { name, title, postText, id, formattedWaitTime, timeOpen } = action;
  switch (action.type) {
    case c.ADD_POST:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          title: title,
          postText: postText,
          id: id,
          timeOpen: timeOpen,
          formattedWaitTime: formattedWaitTime,
        },
      });
    default:
      return state;
  }
};
