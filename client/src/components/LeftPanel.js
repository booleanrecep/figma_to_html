import React from "react";
import user from "../assets/user.png"
import home from "../assets/icons/home.png"
import chat from "../assets/icons/chat.png"
import calendar from "../assets/icons/calendar.png"
import person from "../assets/icons/person.png"
import power from "../assets/icons/power.png"
import bell from "../assets/icons/bell.png"
import chevrondown from "../assets/icons/chevron-down.png"
import settings from "../assets/icons/settings-2.png"
const LeftPanel = () => {
  return (
    <React.Fragment>
      <div className="leftside-panel">
        <div className="user">
          <img src={user} />
          <h6>Henry Jabbawockiez</h6><img src={chevrondown} style={{marginBottom:"-1.5em",marginLeft:"2.5em"}} />
        </div>
        <div className="leftside-tabs">
          <ul>
            <li><img src={home}/> HOME</li>
            <li><img src={chat}/> CHAT</li>
            <li><img src={person}/> CONTACT</li>
            <li><img src={bell}/> NOTIFICATIONS</li>
            <li><img src={calendar}/>  CALENDER</li>
            <li><img src={settings}/> SETTINGS</li>
            <li><img src={power}/> LOG OUT</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeftPanel