import React from "react";

export default function page() {
  return (
    <div className=" mt-[180px] ml-[66px] flex flex-col gap-5">
      <p className={`text-black font-medium text-[64px] tracking-[-3px]`}>
        Sign in
      </p>
      <form action="" className="inline-flex flex-col w-auto">
        <div className="inline-flex flex-col w-auto">
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" />
        </div>
        <div className="inline-flex flex-col">
          <label for="password">Password:</label>
          <input type="text" id="password" name="password" />
        </div>
      </form>
    </div>
  );
}
