import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./SideBar.css";

const SideBar = ({ users }) => (
  <div className="sideBar">
    <div>
      <h1>
        Realtime Chat App
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2>
        Created with React, Express, Node and Socket.IO{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h2>
      <h2>
        Try it out right now!{" "}
        <span role="img" aria-label="emoji">
          ⬅️
        </span>
      </h2>
    </div>
    {users ? (
      <div>
        <h2>People currently chatting:</h2>
        <div className="activeContainer">
          <h3>
            {users.map(({ name, id }) => (
              <div key={id} className="activeItem">
                <img alt="Online Icon" src={onlineIcon} /> {name}
              </div>
            ))}
          </h3>
        </div>
      </div>
    ) : null}
  </div>
);

export default SideBar;
