import React from "react";

function NameList() {
  const onePiece = ["Luffy", "Zoro", "Sanji"];
  const opChars = onePiece.map((name,i) => <h2 key={i}>{name}</h2>);
  return <div>{opChars}</div>;
}

export default NameList;
