import React from "react";

import "./Home.css";
import googleLogo from "../images/Google_logo.svg.png";

import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";

export default function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
          src={googleLogo}
          alt=""
        />
        <div className="home__inputContainer">
          <Search hideBottons/>
        </div>
      </div>
    </div>
  );
}
