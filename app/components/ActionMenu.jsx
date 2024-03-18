import React, { useState } from "react";

export default function ActionMenu() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex gap-2 mt-3">
      <form
        action=""
        className="w-1/2 rounded-md border-2 border-gray-200 relative text-center"
      >
        <input
          type="search"
          className="w-full px-8 placeholder:text-search placeholder:font-medium"
          placeholder="Search"
        />
        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-3 ml-3"
        >
          <path
            d="M7.29199 13.884C10.767 13.884 13.584 11.067 13.584 7.59204C13.584 4.11707 10.767 1.30005 7.29199 1.30005C3.81702 1.30005 1 4.11707 1 7.59204C1 11.067 3.81702 13.884 7.29199 13.884Z"
            stroke="#666666"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.5 12.5L15 16.7"
            stroke="#666666"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </form>

      <button className="flex items-center justify-between px-2 border-2 border-gray-200 w-[25%] rounded-md">
        Status
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <button
        className="bg-black text-white px-3 rounded-md w-[25%] flex items-center justify-center"
        onClick={() => setModalOpen(!modalOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Add Creator
      </button>
      {}
    </div>
  );
}
