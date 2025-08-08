import React from "react";
import { Link, Outlet } from "react-router";

export const Admin = () => {
  return <div>Admin</div>;
};

export const Teacher = () => {
  return <div>Teacher</div>;
};
export const Students = () => {
  const usersData = [
    { id: 1, name: "johnd" },
    { id: 2, name: "mor_2314" },
    { id: 3, name: "kevinryan" },
    { id: 4, name: "donero" },
  ];

  return (
    <div className="studentLayout">
      <div>
        {usersData.map((item) => (
          <h2>
            <Link to={"studentDetails/" + item.id}>{item.name}</Link>
          </h2>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
