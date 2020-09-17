import React, { Component } from "react";

class MainContainer extends Component {
  render() {
    return (
      <div id="Main">
        <div className="about-channel">
          <div className="name-channel"># Announcment</div>
          <div className="desc-channel">Something</div>
        </div>
        <div className="messages-list">
          <div className="message">
            <div className="left-block">
              <img
                src="https://ca.slack-edge.com/T0188513NTW-U01867WD8GK-ga631e27835b-72"
                alt="pic"
              />
            </div>
            <div className="right-block">
              <div className="user">
                Priyanshi <span>1:21 PM</span>
                <div>Hey</div>
              </div>
            </div>
          </div>
        </div>
        <div className="input">
          <textarea placeholder="Type Something and press enter...."></textarea>
        </div>
      </div>
    );
  }
}

export default MainContainer;
