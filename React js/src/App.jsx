import { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./components/Home";
import Analytics from "./components/Analytics";
import Projects from "./components/Projects";
import Users from "./components/Users";
import Settings from "./components/Settings";
import { Admin, Students, Teacher } from "./components/Home/Users";

function App() {
  return (
    <>
      {/* <h1>React Routing</h1>

    <ul>
      <Link to={"/"}>
        <li>
          home
        </li>
      </Link>
       <Link to={"/about"}>
        <li>
          about
        </li>
      </Link>

    </ul> */}

      <Routes>
        <Route index element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<Home />}>
            <Route path="admin" element={<Admin/>}/>
            <Route path="teacher" element={<Teacher/>}/>
            <Route path="student" element={<Students/>}/>
          </Route>
          <Route path="analytics" element={<Analytics />} />
          <Route path="projects" element={<Projects />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/*" element={<img src="https://blog.openreplay.com/images/creating-a-custom-404-error-page/images/image2.png" className="img404"/>}/>
      </Routes>
    </>
  );
}

export default App;
