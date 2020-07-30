import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/header";
import * as action from "./store/action";
import * as reducer from "./store/reducer";

import "./index.less";

function Login() {
  let history = useHistory();
  console.log("reducer", reducer);
  const [state, dispatch] = useReducer(reducer, action);
  console.log("state", state);

  function gotoHome() {
    history.push("/home");
  }

  function updateMyData() {
    console.log(1);
    dispatch({
      type: "setData",
      payload: "12345678",
    });
    // reducer.setData("123456");
  }

  return (
    <div className="P-login">
      <Header />
      <h1>Login page</h1>
      <p>login : myData ={state.myData}</p>

      <button onClick={updateMyData}>更改 login 的 myData</button>
      <button onClick={gotoHome.bind(this)}>跳转 Home 页</button>
    </div>
  );
}

export default Login;
