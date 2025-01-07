import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
    const parems=useParams()
    const userId=parems.userId
  return <div>Details about the user {userId}</div>;
};

export default UserDetails;
