import React, { Component } from "react";
import { Link } from "react-router-dom";
import StackGrid from "react-stack-grid";

export class HomeContainer extends Component {
  render() {
    return (
      <div className="content">
        <div className="home__inner">
          <div className="gridCentered">
            <StackGrid columnWidth={236}>
              <div className="gridCentered__item">
                <Link to="/">
                  <div>
                    <img
                      alt=""
                      className="hCL kVc L4E MIw"
                      src="https://i.pinimg.com/236x/57/c2/0d/57c20dc2ecbdd2a6fa5aa178ff1add44.jpg"
                    />
                  </div>
                </Link>
              </div>
              <div className="gridCentered__item">
                <Link to="/">
                  <div>
                    <img
                      alt=""
                      className="hCL kVc L4E MIw"
                      src="https://i.pinimg.com/236x/57/c2/0d/57c20dc2ecbdd2a6fa5aa178ff1add44.jpg"
                    />
                  </div>
                </Link>
              </div>
              <div className="gridCentered__item">
                <Link to="/">
                  <div>
                    <img
                      alt=""
                      className="hCL kVc L4E MIw"
                      src="https://i.pinimg.com/236x/57/c2/0d/57c20dc2ecbdd2a6fa5aa178ff1add44.jpg"
                    />
                  </div>
                </Link>
              </div>
              <div className="gridCentered__item">
                <Link to="/">
                  <div>
                    <img
                      alt=""
                      className="hCL kVc L4E MIw"
                      src="https://i.pinimg.com/236x/57/c2/0d/57c20dc2ecbdd2a6fa5aa178ff1add44.jpg"
                    />
                  </div>
                </Link>
              </div>
              <div className="gridCentered__item">
                <Link to="/">
                  <div>
                    <img
                      alt=""
                      className="hCL kVc L4E MIw"
                      src="https://i.pinimg.com/236x/57/c2/0d/57c20dc2ecbdd2a6fa5aa178ff1add44.jpg"
                    />
                  </div>
                </Link>
              </div>
              <div className="gridCentered__item">
                <Link to="/">
                  <div>
                    <img
                      alt=""
                      className="hCL kVc L4E MIw"
                      src="https://i.pinimg.com/236x/57/c2/0d/57c20dc2ecbdd2a6fa5aa178ff1add44.jpg"
                    />
                  </div>
                </Link>
              </div>
            </StackGrid>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
