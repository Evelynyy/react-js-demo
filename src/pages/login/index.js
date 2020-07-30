import React, { Component } from "react";

import Header from "../../components/header";
import "./index.less";

class Login extends Component {
  gotoHome() {
    this.props.history.push("/home");
  }

  render() {
    return (
      <div className="P-login">
        <Header />
        <h1>Login page</h1>
        <button onClick={this.gotoHome.bind(this)}>跳转 Home 页</button>
      </div>
    );
  }
}

export default Login;
