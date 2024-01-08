import React from "react";
import { Outlet, Link } from "react-router-dom";

function Administration() {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/administration">Dashboard</Link>
        <Link to="/administration/articles">Articles</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Administration;
