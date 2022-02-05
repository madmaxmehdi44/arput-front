import React from "react";
import Login from "../pages/auth/login";

export default function ModalMed({props}) {
    
    return (
        
      <div className="bg-black flex justify-center items-center bg-opacity-50  inset-0 z-[1008]">
        <div className="bg-gray-200">
          {props}
        </div>
      </div>
        
    )
}