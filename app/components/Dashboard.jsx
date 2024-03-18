import React, { useState } from "react";
import Logout from "./Logout";
import Tabs from "./Tabs";
import ActionMenu from "./ActionMenu";
import Table from "./Table";

export default function Dashboard() {
  const [hideButton, setHideButton] = useState(false);

  const showLogout = () => {
    setHideButton(!hideButton);
  };

  return (
    <div className=" w-full mt-6 bg-white mx-2 pt-[34px]">
      <div className="flex justify-between">
        <div>
          <h1 className="font-proxima font-bold text-[30px]">Dashboard</h1>
        </div>

        <div className="flex flex-col items-center px-4 relative">
          <button className="flex items-center" onClick={showLogout}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
              id="path1"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {hideButton && <Logout />}
        </div>
      </div>

      <div
        role="tablist"
        aria-labelledby="control-options"
        className="flex fit-content mt-[25px] relative border-b-[1px]"
      >
        <button
          id="tab-1"
          role="tab"
          aria-controls="tabPanel-1"
          aria-selected="true"
          tabindex="0"
          className="flex items-center gap-2 border-b-2 border-black"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.8125 4.5C2.8125 4.05245 2.99029 3.62323 3.30676 3.30676C3.62323 2.99029 4.05245 2.8125 4.5 2.8125H6.1875C6.63505 2.8125 7.06427 2.99029 7.38074 3.30676C7.69721 3.62323 7.875 4.05245 7.875 4.5V6.1875C7.875 6.63505 7.69721 7.06427 7.38074 7.38074C7.06427 7.69721 6.63505 7.875 6.1875 7.875H4.5C4.05245 7.875 3.62323 7.69721 3.30676 7.38074C2.99029 7.06427 2.8125 6.63505 2.8125 6.1875V4.5ZM2.8125 11.8125C2.8125 11.3649 2.99029 10.9357 3.30676 10.6193C3.62323 10.3028 4.05245 10.125 4.5 10.125H6.1875C6.63505 10.125 7.06427 10.3028 7.38074 10.6193C7.69721 10.9357 7.875 11.3649 7.875 11.8125V13.5C7.875 13.9476 7.69721 14.3768 7.38074 14.6932C7.06427 15.0097 6.63505 15.1875 6.1875 15.1875H4.5C4.05245 15.1875 3.62323 15.0097 3.30676 14.6932C2.99029 14.3768 2.8125 13.9476 2.8125 13.5V11.8125ZM10.125 4.5C10.125 4.05245 10.3028 3.62323 10.6193 3.30676C10.9357 2.99029 11.3649 2.8125 11.8125 2.8125H13.5C13.9476 2.8125 14.3768 2.99029 14.6932 3.30676C15.0097 3.62323 15.1875 4.05245 15.1875 4.5V6.1875C15.1875 6.63505 15.0097 7.06427 14.6932 7.38074C14.3768 7.69721 13.9476 7.875 13.5 7.875H11.8125C11.3649 7.875 10.9357 7.69721 10.6193 7.38074C10.3028 7.06427 10.125 6.63505 10.125 6.1875V4.5ZM10.125 11.8125C10.125 11.3649 10.3028 10.9357 10.6193 10.6193C10.9357 10.3028 11.3649 10.125 11.8125 10.125H13.5C13.9476 10.125 14.3768 10.3028 14.6932 10.6193C15.0097 10.9357 15.1875 11.3649 15.1875 11.8125V13.5C15.1875 13.9476 15.0097 14.3768 14.6932 14.6932C14.3768 15.0097 13.9476 15.1875 13.5 15.1875H11.8125C11.3649 15.1875 10.9357 15.0097 10.6193 14.6932C10.3028 14.3768 10.125 13.9476 10.125 13.5V11.8125Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          All
        </button>
      </div>
      <div className="flex justify-between gap-2">
        <Tabs className="bg-all" name={"All Creators"} number={23} />
        <Tabs className={`bg-contacted`} name={"Contacted"} number={23} />
        <Tabs className={`bg-observing`} name={"Observing"} number={23} />
        <Tabs className={`bg-sponsored`} name={"Sponsored"} number={23} />
        <Tabs className={`bg-declined`} name={"Declined"} number={23} />
      </div>

      <ActionMenu />
      <Table />
    </div>
  );
}
