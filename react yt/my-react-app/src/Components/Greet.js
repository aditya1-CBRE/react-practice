import React from 'react';

// function Greet(){                           //using functional component
//     return <h1>Hello, Aditya!</h1>
// }

// const Greet =(props)=>{
//     console.log(props);
//     return (
//         <div>
//     <h1>Hello, {props.name} A.K.A {props.aka}</h1>
//     {/* {props.children} */}
//     </div>
// )           //using arrow function
// }

const Greet=props=>{
    const {name,aka}=props;
    return(
        <div>
            <h1>Hello, {name} A.K.A {aka}</h1>
        </div>
    )
}

// const Greet2=()=> <h1>Hello Munna</h1>
export default Greet;