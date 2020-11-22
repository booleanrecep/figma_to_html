import React from "react";
import LeftPanel from "./LeftPanel";
import send from "../assets/icons/send.png";
import addicons from "../assets/icons/addicons.png";
import p from "../assets/icons/p.png";
import file from "../assets/icons/file.png";
import more from "../assets/icons/more.png";
import MessagesMiddleSection from "./MessagesMiddleSection";
import { set } from "mongoose";
const App = () => {
  return (
    <div>
      <LeftPanel />
      <div className="rightside">
        <MessagesMiddleSection />
        <div className="right-div">
          <div className="top">
            <img src={p} />
            <p>Nika Jerrardo</p>
            <p>last online 5 hours ago</p>
            <img src={file} />
            <img src={more} />
          </div>
          <div className="message-body">
            <div className="sent-message">
              <img src={p} />
              <p>
                Hello! Finally found the time to write to you) I need your help
                in creating interactive animations for my mobile application.
              </p>
              {/* <span>...</span> */}
              <p>Can I send you files?</p>
              {/* <span>...</span> */}
            </div>
            <div className="incoming-message  ">
              <p>Hey ! Okay, send out.</p>
            </div>
            <div className="sent-message">
              <img src={p} />
              <p
                style={{
                  marginLeft: "-1em",
                  marginTop: "3em",
                }}
              >
                {" "}
                &#9993; Style.zip
              </p>
              {/* <span>...</span> */}
            </div>
            <div className="incoming-message  ">
              <p style={{
                  marginLeft:"-6.5em",
                  width:"18em"
              }}>

                Hello! I tweaked everything you asked. I am sending the finished
                file.
              </p>
            </div>
          </div>
          <div className="input-area">
            <img src={addicons} />
            <hr />
            <input placeholder="Type a message here" />
            <img src={send} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
