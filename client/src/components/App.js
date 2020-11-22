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
