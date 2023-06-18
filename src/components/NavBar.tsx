import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Monitor1 from "./resources/Monitor1.png";
import Monitor2 from "./resources/Monitor2.png";

function Navbar() {
  const location = useLocation();

  const isDogListActive = location.pathname === "/DogList";
  const isDogPhotoActive = location.pathname === "/DogPhoto";

  return (
    <div className="nav">
      <NavLink to="/DogList">
        <img
          src={Monitor1}
          alt="NavMonitor"
          width={100}
          style={{ opacity: isDogListActive ? 0.5 : 1, marginRight:18 }}
        />
      </NavLink>
      <NavLink to="/DogPhoto">
        <img
          src={Monitor2}
          alt="NavMonitor"
          width={100}
          style={{ opacity: isDogPhotoActive ? 0.5 : 1 }}
        />
      </NavLink>
    </div>
  );
}

export default Navbar;