import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {


  const [userName,setUserName] = useState("Mirza")
  const [userEmail,setUserEmail] = useState("")
  const [cUserEmail,setCUserEmail] = useState("")
  const [isThemeLight,setIsThemeLight] = useState(true)

  // let user;

  const userFunc = () =>{
    let user = prompt("Please enter your name")
    setUserName(user)
  }

  const showAlert = ()=>{
    alert("Pharlo ab bhi time h")
  }

const checkEmail = () =>{
  if (userEmail == cUserEmail){
    alert("Validated Successfully")
  }
  else{
    alert("Email sahi daal")
  }
}

  return (
    <>


<div style={{backgroundColor: isThemeLight? "white" : "black", height:"100vh"}}>
    <button onClick={()=>setIsThemeLight(!isThemeLight)}>Change Theme</button>

    <h1>Functions </h1>
    <p>{userName}</p>
    {/* <button onClick={userFunc} > Button</button> */}

    <Button btnText={"Update UserName"} func={userFunc}/>
    <br />
    <br />

<p>User Email: {userEmail}</p>
<p>Confirm User Email: {cUserEmail}</p>
<br />
<br />
<Button btnText={"Validate Yourself"} func={checkEmail}/>
<br />
<br />

    <input type="email" placeholder="Enter your email" onChange={(e)=>{setUserEmail(e.target.value)}}/>
    <input type="email" placeholder="Confirm your email" onChange={(e)=>{setCUserEmail(e.target.value)}}/>

    <Button btnText={"Submit"} func={showAlert}/>
</div>
    </>
  );
}

export default App;
