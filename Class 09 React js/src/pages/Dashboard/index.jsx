import { Outlet } from "react-router";
import LeftSidebar from "../../components/LeftSidebar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <LeftSidebar />

      <div class="main-content">
        <h1>Welcome to the Dashboard</h1>
        <div className="content-area">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
