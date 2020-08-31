import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/header";
import { setData } from "./store/action";

import "./index.less";

function Login() {
  let history = useHistory();
  const dispatch = useDispatch();
  const { myData } = useSelector((state) => state.login);
  // console.log("myData", myData);

  function gotoHome() {
    history.push("/home");
  }

  function updateMyData() {
    dispatch(setData("123456"));
    // reducer.setData("123456");
  }

  return (
    <div className="P-login">
      <Header />
      <h1>Login page</h1>
      <p>login : myData ={myData}</p>

      <button onClick={updateMyData}>更改 login 的 myData</button>
      <button onClick={gotoHome.bind(this)}>跳转 Home 页</button>
    </div>
  );
}

export default Login;
