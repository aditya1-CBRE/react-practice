import { useNavigate } from "react-router-dom"

function OrderSummery() {
    const Navigate=useNavigate()
  return (
    <div>
      <div>order confirmed</div>
      <button onClick={()=>Navigate('/')}>Back to home</button>
    </div>
  )
}

export default OrderSummery
