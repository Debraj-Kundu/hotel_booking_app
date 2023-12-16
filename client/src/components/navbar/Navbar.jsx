import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const linkStyle = { textDecoration: "none", color: "inherit" };

const Navbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <h1 className="topLogo">
          <Link to="/" style={linkStyle}>
            <b>Booker</b>
          </Link>
        </h1>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" style={linkStyle}>
              <b>HOME</b>
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/add-hotel" style={linkStyle}>
              <b>ADD HOTEL</b>
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/login" style={linkStyle}>
              <b>LOGIN</b>
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/register" style={linkStyle}>
              <b>REGISTER</b>
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://th.bing.com/th/id/OIP.CIC3DHumE5y6xdcKqSK4MgHaHa?pid=ImgDet&rs=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
