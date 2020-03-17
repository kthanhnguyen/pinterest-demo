import React, { Component } from "react";

export default class PageNotFound extends Component {
  render() {
    return <div className="page-404">
      <div className="page-404-content">
        <div className="container text-center text-white">
          <div className="display-1">404</div>
          <h1>Page Not Found</h1>
          <p>Oops!!!! You tried to access a page which is not available. Go back to Home</p>
          <a className="btn btn-primary" href="/">Back To Home</a>
        </div>
      </div>
    </div>;
  }
}
