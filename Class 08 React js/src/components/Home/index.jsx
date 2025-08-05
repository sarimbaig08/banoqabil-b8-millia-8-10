import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import "./home.css"

const Home = () => {
  return (
    <>
        <div className="homeToolbar">
          <ul>
            <li>
              <NavLink to="admin">Admins</NavLink>
            </li>
            <li>
              <NavLink to="teacher">Teacher</NavLink>
            </li>
            <li>
              <NavLink to="student">Student</NavLink>
            </li>
          </ul>
        </div>
        <div className="homeContentArea">
        <Outlet/>
        </div>
        </>
  );
};

export default Home;
