import React, { Component } from "react";
import Aux from "../Auxiliary/Auxiliary";
import classes from "./Layout.module.css";
import Navbar from "../../components/Navigation/Navbar/Navbar";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Navbar />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
