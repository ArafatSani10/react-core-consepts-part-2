import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

function handlerClick() {
  alert('button clicked')
}
let handlerClick2 = ()=>{
  alert('button 2 clicked')
}


  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h4> React core consepts part 2 </h4>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
     
      <button onClick={handlerClick}>Click Me</button>
      <button onClick={handlerClick2}>click  2</button>
    </>
  )
}

export default App
