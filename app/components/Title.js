import Image from "next/image";
import React from "react";

export default function Title() {
  return (
    <div className="inline-flex mt-[33px] ml-[66px] gap-2">
      <Image src="/icons/logo.svg" alt="Tubyte logo" height="37" width="90" />
      <div className="bg-blue-light px-3 mt-1 h-6 flex font-medium rounded-lg font-poppins text-sm text-center items-center">
        Beta
      </div>
    </div>
  );
}
