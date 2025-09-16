import React from "react";

const Home = ({ bgColor = "red", txtColor = "black", product }) => {
  const { name, color, size, price } = product;
  return (
    <div>
      <h1>Home</h1>
      <h3>Background color: {bgColor}</h3>
      <h3>Text Color: {txtColor}</h3>
      <hr />
      <h4>Product Name: {name}</h4>
      <h4>Product color: {color}</h4>
      <h4>Product size: {size}</h4>
      <h4>Product price: {price}</h4>
    </div>
  );
};

export default Home;
