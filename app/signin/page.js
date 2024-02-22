import React from "react";
import { poppins } from "../layout";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex">
      <div className=" mt-[100px] ml-[66px] flex flex-col gap-5 w-1/2">
        <p
          className={`text-black font-medium text-[64px] tracking-[-3px] ${poppins.className}`}
        >
          Sign in
        </p>
        <form action="" className="inline-flex flex-col w-[518px] gap-7">
          <div className="inline-flex flex-col w-auto">
            <label for="email" className={poppins.className}>
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className=" h-[40px] border-[1px] border-focused rounded-xl focus:border-2"
            />
          </div>
          <div className="inline-flex flex-col">
            <label for="password" className={poppins.className}>
              Password:
            </label>
            <input
              type="text"
              id="password"
              name="password"
              className=" h-[40px] border-[1px] border-focused rounded-xl focus:border-2"
            />
            <Link
              href={"/forgotpassword"}
              className={`${poppins.className} font-bold text-right underline mt-1`}
            >
              Forgot Password?
            </Link>
          </div>

          <button
            className={`${poppins.className} bg-blue-light w-[518px] h-10 text-center text-xl rounded-full `}
          >
            Continue
          </button>
        </form>
        <div className="flex gap-5 items-center">
          <div className="w-[220px] h-[1px] bg-greyscale"></div>
          <p className={`${poppins.className} font-medium text-greyscale`}>
            OR
          </p>
          <div className="w-[220px] h-[1px] bg-greyscale"></div>
        </div>
        <button
          className={`${poppins.className} border-2 border-gray-300 w-[518px] h-10 text-xl rounded-full flex items-center justify-start`}
        >
          <Image
            src={"/icons/googleicon.svg"}
            width={24}
            height={24}
            alt="Google Icon SVG"
            className="ml-2" // Add margin-right to separate icon from text
          />
          <p className="mx-auto">Sign in with Google</p>
        </button>
      </div>
    </div>
  );
}
