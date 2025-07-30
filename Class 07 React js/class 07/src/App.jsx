import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './pages/Dashboard'
import Home from './components/Home'

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
      <Route index element={<Signup/>} />
      <Route path='login'  element={<Login />}/>

      <Route path='dashboard' element={<Dashboard/>} >
        <Route index element={<Home />} />
        <Route path='login'  element={<Login />}/>
      </Route>

    </Routes>

   </>
  )
}

export default App
