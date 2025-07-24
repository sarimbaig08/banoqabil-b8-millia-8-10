import { use, useEffect, useState } from 'react'
import './App.css'

function App() {

  const [isSeeMore, setIsSeeMore] = useState(false)
  const [productData, setProductData] =useState()

  let para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eius sit repellendus dignissimos quas cupiditate incidunt maxime culpa aspernatur earum."

useEffect(()=>{
 
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data =>  setProductData(data));

},[])

  return (
    <>

    <p>

    {
      isSeeMore ? para.slice(0,5) : para 
    }
    <a href="#"
    onClick={()=>setIsSeeMore(!isSeeMore)}
    >
    {
      isSeeMore ? "See More..": "See Less..."
    }

    </a>
    </p>  

<h1>
  {productData[0]?.title}
</h1>

    </>
  )
}

export default App
