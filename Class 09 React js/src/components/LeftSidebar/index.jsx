import { Link } from "react-router";
import "./LeftSidebar.css";

function LeftSidebar() {
  return (
    <>
      <div class="sidebar">
        <div class="sidebar-logo">
          <h2>MyDash</h2>
        </div>
        <ul class="sidebar-menu">
          <li>
            <Link to="home">🏠 Dashboard</Link>
          </li>
          <li>
            <Link to="analytics">📊 Analytics</Link>
          </li>
          <li>
            <Link to="projects">📁 Projects</Link>
          </li>
          <li>
            <Link to="users">👥 Users</Link>
          </li>
          <li>
            <Link to="settings">⚙️ Settings</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LeftSidebar;
