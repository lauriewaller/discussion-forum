/* eslint-disable import/no-anonymous-default-export */
import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {
  const { name, postText, id, formattedWaitTime, timeOpen } = action;
  switch (action.type) {
    case c.ADD_POST:
      return Object.assign({}, state, {
        [id]: {
          name: name,
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
