import React from "react";
import user from "../assets/user.png";
import chevrondown from "../assets/icons/chevron-down.png";
import search from "../assets/icons/search.png";

const MessagesMiddleSection = () => {
  return (
    <div className="middle-div">
    
      <div
        style={{
          width: "24.1em",
          height: "9em",
          //   border: "2px solid red",
          // filter: "blur(0em)",
          backgroundColor: "#efeded",
          position: "fixed",
          top: "-0.1em",
          zIndex: "5",
        }}
      ></div>
      <div
        style={{
          width: "24.1em",
          height: "2em",
          filter: "blur(1em)",
          backgroundColor: "#efeded",
          // backgroundColor: "aqua",
          position: "fixed",
          top: "9.4em",
          zIndex: "5",
        }}
      ></div>
      <div className="top">
        <div>
          <p>Chats</p>
          <p>Recent Chats &#9196;</p>
        </div>
        <div className="create">
          <p>+ Create New Chat</p>
        </div>
      </div>
      <div className="search">
        <input placeholder="🔍  Search" />
        <p>
          Messages
          <img src={chevrondown} style={{ marginLeft: "0.7em" }} />
        </p>
      </div>

      <div
        style={{
          // filter: "blur(1em)",
          marginTop: "10em",
        }}
      >
        <div className="message-card">
          <div className="message-head">
            <img src={user} />
            <p>
              Luy Robin <span>... writes</span>
            </p>
            <p>1 minute ago</p>
          </div>
          <div className="message-body">
            <p>
              Most of its text is made up from sections 1.10.32–3 of Cicero's De
              finibus bonorum et malorum (On the Boundaries of Goods and Evils;
              finibus may also be translated as purposes).
              <span>2</span>
            </p>
          </div>
        </div>

        <div className="message-card">
          <div className="message-head">
            <img src={user} />
            <p>
              Luy Robin <span>records voice message</span>
            </p>
            <p>1 minute ago</p>
          </div>
          <div className="message-body">
            <p>
              Voice message (01:15)
              <span>2</span>
            </p>
            <div className="files">
              <div>Files(x2)</div>
              <div>Photo</div>
            </div>
          </div>
        </div>

        <div
          className="message-card"
          style={{
            background: "linear-gradient(96.78deg, #7CB8F7 0%, #2A8BF2 100%)",
          }}
        >
          <div className="message-head">
            <img src={user} />
            <p>
              Luy Robin{" "}
              <span style={{ color: "white" }}>last online 5 hours ago</span>
            </p>
            <p style={{ color: "white" }}>3 days ago</p>
          </div>
          <div className="message-body" style={{ color: "white" }}>
            <p>
              Cicero famously orated against his political opponent Lucius
              Sergius Catilina.
              {/* <span></span> */}
            </p>
          </div>
        </div>

        <div
          className="message-card"
          style={{
            background: "linear-gradient(96.78deg, #7CB8F7 0%, #2A8BF2 100%)",
          }}
        >
          <div className="message-head">
            <img src={user} />
            <p>
              Luy Robin{" "}
              <span style={{ color: "white" }}>last online 5 hours ago</span>
            </p>
            <p style={{ color: "white" }}>3 days ago</p>
          </div>
          <div className="message-body" style={{ color: "white" }}>
            <p>
              Cicero famously orated against his political opponent Lucius
              Sergius Catilina.
              {/* <span></span> */}
            </p>
          </div>
        </div>
        <div
          className="message-card"
          style={{
            background: "linear-gradient(96.78deg, #7CB8F7 0%, #2A8BF2 100%)",
          }}
        >
          <div className="message-head">
            <img src={user} />
            <p>
              Luy Robin{" "}
              <span style={{ color: "white" }}>last online 5 hours ago</span>
            </p>
            <p style={{ color: "white" }}>3 days ago</p>
          </div>
          <div className="message-body" style={{ color: "white" }}>
            <p>
              Cicero famously orated against his political opponent Lucius
              Sergius Catilina.
              {/* <span></span> */}
            </p>
          </div>
        </div>
        <div
          className="message-card"
          style={{
            background: "linear-gradient(96.78deg, #7CB8F7 0%, #2A8BF2 100%)",
          }}
        >
          <div className="message-head">
            <img src={user} />
            <p>
              Luy Robin{" "}
              <span style={{ color: "white" }}>last online 5 hours ago</span>
            </p>
            <p style={{ color: "white" }}>3 days ago</p>
          </div>
          <div className="message-body" style={{ color: "white" }}>
            <p>
              Cicero famously orated against his political opponent Lucius
              Sergius Catilina.
              {/* <span></span> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesMiddleSection;
