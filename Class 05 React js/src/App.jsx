import { useState } from "react";
import "./App.css";
import  {productData}  from "./utils/products";

function App() {

console.log(productData)

let userDetails=[
  {
    name: "sarim",
    email: "sarim@gmail.com",
    pass:"sarim123"
  },
   {
    name: "mirza",
    email: "mirza@gmail.com",
    pass:"mirza123"
  }
]

// console.log("userDetails",userDetails[1].email)

  return (
   <>
    <h1>React mapping</h1>


    {
      productData.map((product,index)=>(
        <div key={product.id} style={{border:"1px solid black", margin:"20px"}}>
          <h5>Title: {product.title}</h5>
          <p>id: {product.id}</p>
          <p>price: {product.price}</p>
          <p>description: {product.description}</p>
        </div>
      ))
    }

    

   </>
  );
}


export default App;


