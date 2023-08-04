import React from "react";
import SideBar from "../components/Sidebar.js";
import Topbar from "../components/Topbar.js";

export default function HomePage() {
    return (
      <article>
        <Topbar title="Home"/>
        <SideBar active="home"/>
        <div className='content'>
          <p>Home Page</p>
        </div>
      </article>
    );
  }