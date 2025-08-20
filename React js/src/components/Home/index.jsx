import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import "./home.css";
import axios from "axios";

const Home = () => {
  // axios
  //   .get("https://fakestoreapi.com/products")
  //   .then((data) => console.log(data.data))
  //   .catch((err) => console.log(err));

  const fetchProductData = async () => {
    try {
      const products = await axios.get("https://fakestoreapi.com/products");
      console.log(products.data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchProductData();
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
        <Outlet />
      </div>
    </>
  );
};

export default Home;
