import React,{useState} from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";

// import userData from './users.json';
import InfiScroll from "./Components/InfiScroll";
import UserInfo from "./Components/UserInfo";

// const userData1=userData.Users;

// function MovieList(){
//   const [listOfUsers,setListOfUsers]=useState(userData1);
//   const AddUser = ()=>{
//     setListOfUsers([
//       ...userData1,
//       {
//         id:11,
//         name:"Aditya",
//         email:"aditya@gmail.com",
//         role:"Admin",
//       }
//     ])
//   }
//   return(
//     <div>
//       <h2>User Data</h2>
//     <table className="Table">
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Role</th>
//         </tr>
//       </thead>
//       <tbody>
//         {listOfUsers.map((u)=>(
//             <tr>
//               <td>{u.id}</td>
//               <td>{u.name}</td>
//               <td>{u.email}</td>
//               <td>{u.role}</td>
//             </tr>
//         )
//         )}
//       </tbody>
//     </table>
//     <button onClick={AddUser}>Add User</button>
//     </div>
//   )
// }
function App() {
  return(
    <div className='MainDiv'>
      <UserInfo />
    {/* <MovieList /> */}
    {/* <InfiScroll /> */}
    </div>
  )

}

export default App;
