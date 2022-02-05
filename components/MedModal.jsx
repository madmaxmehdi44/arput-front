import Login from "../pages/auth/login";
import { useEffect } from "react";


export default function MedModal() {
  useEffect(() => {
    // const overlay = document.querySelector("#overlay");
    const overlay = document.querySelector("#overlay");
    const loginIcon = document.querySelector("#loginIcon");
    loginIcon?.addEventListener("click", () => {
      overlay?.classList.remove("hidden");
      overlay?.classList.add("flex");
    });
  }, []);
  return (
    <div
      className="bg-black hidden justify-center items-center bg-opacity-50 absolute inset-0 z-[1008]"
      id="overlay"
    >
      <div className="bg-gray-200">
        <Login />
      </div>
    </div>
  );
}
