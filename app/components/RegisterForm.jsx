"use client";

import React, { useState } from "react";
import { poppins } from "../layout";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are necessary");
      return;
    }

    try {
      setPending(true);
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/signin");
      } else {
        const errorData = await res.json();
        setError(errorData.message);
        setPending(false);
        console.log("user reg failed");
      }
    } catch (error) {
      console.log("error during reg", error);
      setError("Something went wrong");
    }
  };

  return (
    <div className="grid place-items-center mt-6 mx-auto">
      <div className=" shadow-sm shadow-greyscale h-[400px] w-[388px] px-8 rounded-xl my-auto">
        <p
          className={` mt-14 text-black text-center font-medium text-2xl tracking-[-1px] ${poppins.className}`}
        >
          Register
        </p>
        <p className="text-center text-greyscale">
          Tubyte is currently invite only
        </p>
        <form
          onSubmit={handleSubmit}
          className="inline-flex flex-col gap-3 w-[300px] mt-7"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="px-2 h-[40px] bg-gray-100 border-[1px] border-gray-200 rounded-xl focus:border-2 w-[324px]"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="px-2 h-[40px] bg-gray-100 border-[1px] border-gray-200 rounded-xl focus:border-2 w-[324px]"
          />
          <button
            className={`${poppins.className} bg-blue-light h-10 text-center text-sm font-bold text-white rounded-xl w-[324px]`}
            type="submit"
            disabled={pending ? true : false}
          >
            {pending ? "Registering..." : "Register"}
          </button>

          {error && (
            <div
              className={`${poppins.className} bg-red-500 w-fit px-1 py-1 text-sm text-white rounded-md`}
            >
              {error}
            </div>
          )}
        </form>
        <hr className="my-3" />
        <Link
          href={"/signin"}
          className={`flex justify-end text-sm gap-2 text-right mt-4 ${poppins.className}`}
        >
          Already have an account?
          <span className="underline"> Sign in here </span>
        </Link>
      </div>
    </div>
  );
}
