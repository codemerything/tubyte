import React from "react";
import { signOut } from "next-auth/react";
export default function Logout() {
  return (
    <div className=" bg-[#F7F5F4] absolute mt-4 top-10 px-3 rounded">
      <button
        onClick={() => signOut()}
        className="text-black hover:bg-[#f3f3f3] hover:text-blue-400"
      >
        sign out
      </button>
    </div>
  );
}
