import React, { Children } from "react";
import { Outlet } from "react-router-dom";

import "./Main.css";

const Main = ({ children }) => {
  return (
    <main>
      <div className="main-container">{children}</div>
    </main>
  );
};

export default Main;
