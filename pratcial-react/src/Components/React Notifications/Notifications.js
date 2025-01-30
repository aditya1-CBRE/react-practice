import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast=({closeToast})=>{
    return(
        <div>
            Something went wrong!
            <button onClick={closeToast}>Close</button>
        </div>
        
    )
}

function Notifications() {
  const Notify = () => {
    toast("Basic Notification !", { position: "top-right",autoClose:5000 });
    toast.success("Success Notification !", { position: "top-left",autoClose:2000 });
    toast.info("Info Notification !", { position: "top-center",autoClose:3000 });
    toast.error("error Notification !", { position: "bottom-left",autoClose:4000 });
    toast.warn(<CustomToast/>, { position: "bottom-right" });
  };
  return (
    <div>
      <button onClick={Notify}>Notify</button>
      <ToastContainer />
    </div>
  );
}

export default Notifications;
