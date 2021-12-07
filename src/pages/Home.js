import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

export default function Home() {
  return (
      <div className="home">
        <h1>This home page</h1>

        <div className="home__header">
          <div className="home__headerLeft">
            <Link to='/about'>about</Link>
          </div>

          <div className="home__headerRight">
            
          </div>
        </div>

        <div className="home__body">

        </div>

      </div>
  );
}
