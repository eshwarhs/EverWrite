import React from "react";
import SideBar from "../components/Sidebar.js";
import Topbar from "../components/Topbar.js";
import NoteCard from "../components/NoteCard.js";

export default function HomePage() {
    return (
      <article>
        <Topbar title="Home"/>
        <SideBar active="home"/>
        <div className='content'>
          <NoteCard />
        </div>
      </article>
    );
  }