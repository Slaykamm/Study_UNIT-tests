// import { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState(null)
//   const [toggle, setToggle] = useState(false)
//   const [value, setValue] = useState('')


//   const onClick = () => setToggle(prev => !prev)


//   useEffect(()=>{
//     setTimeout(()=>{
//       setData({})
//     }, 100)
//   }, [])
//   return (
//     <div >
//         <h1 data-testid='value-elem'>{value}</h1>

//         {toggle && <div data-testid='toggle-elem'>toggle</div>}

//         {data && <div style={{color: 'green'}}>data</div>}
        
//         <h1>Hello Study</h1>
//         <button 
//           onClick={onClick}
//           data-testid='toggle-btn'
//           >Click ME!</button>
//         <input 
//           type='text' 
//           placeholder='input value...'
//           onChange={e => setValue(e.target.value)}
//         />

//     </div>
//   );
// }

// export default App;


import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import MainPage from './pages/MainPage'
import AppRouter from './router/AppRouter'
import UserDetailPage from './users/userDetail/UserDetailPage'
import Users from './users/Users'


export default function App() {
  return (
    <div>
    <Navbar />
    <AppRouter />

    </div>
  )
}
