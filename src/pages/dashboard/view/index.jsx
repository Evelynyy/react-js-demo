import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../actions";

export default function Index() {
  const dispatch = useDispatch();
  const { counter, summary } = useSelector(
    (state) =>
      // {
      // console.log("state :>> ", state);
      state.dashboard
    // }
  );

  return (
    <div>
      <div>{summary}</div>
      <div>{counter}</div>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
