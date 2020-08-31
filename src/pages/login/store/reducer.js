import { handleActions } from "redux-actions";
import { SET_DATA } from "./constants";

const defaultState = {
  title: "Login",
  myData: null,
};

export const reducer = handleActions(
  {
    [SET_DATA]: (state, action) => ({
      ...defaultState,
      myData: state.myData,
    }),
  },
  defaultState
);
