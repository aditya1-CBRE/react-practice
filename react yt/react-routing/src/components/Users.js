import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'
function Users() {
   const [searchParams,setSearchParems]= useSearchParams()
   const showActiveUsers=searchParams.get('filter')==='active'
  return (
    <div>
      <h2>User1</h2 >
      <h2>User2</h2 >
      <h2>User3</h2 >
      <Outlet />
      <div>
        <button onClick={()=>setSearchParems({filter:'active'})}>Active Users</button>
        <button onClick={()=>setSearchParems({})}>Reset Filter</button>
      </div>
      {
        showActiveUsers ? <h2>Active Users</h2> : <h2>Shoing all users Users</h2>
      }
    </div>
    
  )
}

export default Users
