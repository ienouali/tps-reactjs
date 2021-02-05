import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/">    TP- Calcul IMC </NavLink>
        </li>
        <li>
          <NavLink to="/tp-github-api">TP- Github API - (saga)</NavLink>
        </li>
        <li>
          <NavLink to="/tp-todolist">TP- Todo List - (saga)</NavLink>
        </li>
      </ul>
    </div>
  );
}
