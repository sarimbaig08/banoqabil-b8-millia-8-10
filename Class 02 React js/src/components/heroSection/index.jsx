import { useState } from "react"
import "./herosection.css"

function HeroSection (){

    const [counter, setCounter] = useState(1)

let brandName = "Designers Rockwall"

    return(
        <div className="heroSection">
            <h1>{brandName}</h1>
            <h1>{counter}</h1>
            <button 
            // onClick={()=>{
            //     setCounter(counter+1)
            // }}
            onClick={()=>setCounter(counter+1)}
            >
                Plus 1</button>
                 
        
            <button 
            
            onClick={()=>setCounter(counter-1)}
            >
                Minus 1</button>

            <p>We are a company expert in Interior and Exterior wall Designs</p>

        </div>
    )

}

export default HeroSection