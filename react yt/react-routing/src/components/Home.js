import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
    const Navigate=useNavigate()
  return (
    <>
    <div>
      Home Page
    </div>
    <button onClick={()=>Navigate('order-summery',{replace:true})}>Place Order</button>
    </>
  )
}

export default Home
