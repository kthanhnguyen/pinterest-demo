import React, { Component, Fragment } from "react";
import Header from "../components/Header/Header";
import HomeContainer from "../container/HomeContainer";

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <HomeContainer />
      </Fragment>
    );
  }
}
