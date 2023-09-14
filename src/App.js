import React from "react";
import { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import Navbar from "./Navbar.js";
import Maindiv from "./Maindiv.js";

export default function App() {
  useEffect(() => {
    async function getdata() {
      const raw = await fetch(
        "https://academics.newtonschool.co/api/v1/music/album",
        {
          headers: {
            projectId: "f104bi07c490",
          },
        }
      );
      const json = await raw.json();
      console.log(json, "yes");
    }
    getdata();
  }, []);
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
    </div>
  );
}
