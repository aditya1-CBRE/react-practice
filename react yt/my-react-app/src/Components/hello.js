import React from "react";

const Hello = () => {
  // return(
  //     <div>
  //         <h1>Hello Aditya.</h1>
  //     </div>
  // )
  return React.createElement(
    "div",
    {id:'hello',className:'sampleDiv'},
    React.createElement("h1", null, "Hello Munna")
  );
};
export default Hello;
