import React from "react";
import { userContext, ChannelContext } from "../App";
function ComponentF() {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                 return <div>user name is {user},Channel context is {channel}</div>;
                  
              }}
            </ChannelContext.Consumer>
          );
        }}
      </userContext.Consumer>
    </div>
  );
}

export default ComponentF;
