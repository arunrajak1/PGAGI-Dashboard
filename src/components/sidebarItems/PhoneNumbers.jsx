import React from "react";

const PhoneNumbers = () => {
  const handleDocumentation=()=>{
    window.location.href = 'https://www.toingg.com/docs/intro';
  }
  return (
    <div className="mx-auto my-10 max-w-md rounded-xl px-6 py-10 text-gray-600 shadow ">
      <div className="w-20 rounded-md px-2 py-1 text-sm font-medium">
        <span>
          <svg
            width="14.0234"
            height="20.127"
            viewBox="0 0 14.0234 20.127"
            fill="#6b7280"
            stroke="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mb-2 w-[80px] h-[80px] fill-icon/20"
          >
            <g>
              <rect
                height="20.127"
                opacity="0"
                width="14.0234"
                x="0"
                y="0"
              ></rect>
              <path
                d="M6.83594 20.127C11.0449 20.127 13.6621 17.7051 13.6621 13.4961L13.6621 5.47852C13.6621 3.92578 12.6367 2.93945 11.0059 2.93945L1.57227 2.93945L1.57227 0.800781C1.57227 0.371094 1.2207 0.00976562 0.78125 0.00976562C0.351562 0.00976562 0 0.371094 0 0.800781L0 13.4961C0 17.7051 2.61719 20.127 6.83594 20.127ZM6.83594 18.5938C3.62305 18.5938 1.57227 16.7676 1.57227 13.6035L1.57227 4.51172L10.8008 4.51172C11.6211 4.51172 12.0898 4.96094 12.0898 5.73242L12.0898 13.6035C12.0898 16.7676 10.0488 18.5938 6.83594 18.5938ZM3.4082 12.0801L10.2539 12.0801C10.791 12.0801 11.1133 11.7578 11.1133 11.2402L11.1133 6.33789C11.1133 5.81055 10.791 5.48828 10.2539 5.48828L3.4082 5.48828C2.88086 5.48828 2.54883 5.81055 2.54883 6.33789L2.54883 11.2402C2.54883 11.7578 2.88086 12.0801 3.4082 12.0801ZM5.44922 16.9141L8.16406 16.9141C8.53516 16.9141 8.82812 16.6211 8.82812 16.25C8.82812 15.8789 8.53516 15.5859 8.16406 15.5859L5.44922 15.5859C5.08789 15.5859 4.78516 15.8789 4.78516 16.25C4.78516 16.6211 5.08789 16.9141 5.44922 16.9141Z"
                fill-opacity="0.85"
              ></path>
            </g>
          </svg>
        </span>
      </div>
      <p className="mb-2 text-2xl text-white">Phone Numbers</p>
      <p className="mb-4 text-gray-400 text-lg ">
        Assistants are able to be connected to phone numbers for calls.
      </p>
      <p className="mb-4 text-gray-400 text-lg">
        {" "}
        You can import from Twilio, vonage, or by one directly from Vapi for use
        with your assistants.
      </p>
      <div className="flex justify-center ">
        <button className="flex items-center justify-center  whitespace-nowrap space-x-2 rounded-md border-2 px-2 py-2 font-medium text-white transition bg-pink-900  hover:text-white w-full"
        disabled>
          <span>Buy Number</span>
          <span>
            <svg
              width="20.2832"
              height="19.9316"
              viewBox="0 0 20.2832 19.9316"
              fill="'none' || '#000000"
              stroke="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="fill-white/50 group-hover:fill-teal-500 w-[16px] h-[16px]"
            >
              <g>
                <rect
                  height="19.9316"
                  opacity="0"
                  width="20.2832"
                  x="0"
                  y="0"
                ></rect>
                <path
                  d="M19.9219 9.96094C19.9219 15.4004 15.4102 19.9219 9.96094 19.9219C4.52148 19.9219 0 15.4004 0 9.96094C0 4.51172 4.51172 0 9.95117 0C15.4004 0 19.9219 4.51172 19.9219 9.96094ZM11.8164 5.47852L11.377 7.53906L9.51172 7.53906L9.89258 5.66406C9.98047 5.25391 9.6875 4.89258 9.27734 4.89258C8.86719 4.89258 8.61328 5.09766 8.53516 5.47852L8.10547 7.53906L7.05078 7.53906C6.65039 7.53906 6.36719 7.83203 6.36719 8.22266C6.36719 8.56445 6.61133 8.81836 6.95312 8.81836L7.83203 8.81836L7.41211 10.8594L6.33789 10.8594C5.9375 10.8594 5.6543 11.1523 5.6543 11.5332C5.6543 11.8848 5.89844 12.1289 6.23047 12.1289L7.13867 12.1289L6.72852 14.1113C6.65039 14.5312 6.95312 14.8828 7.36328 14.8828C7.76367 14.8828 8.00781 14.6777 8.07617 14.3066L8.54492 12.1387L10.4102 12.1387L10 14.1113C9.91211 14.5312 10.2051 14.8828 10.6152 14.8828C11.0254 14.8828 11.2891 14.6777 11.3672 14.3066L11.8164 12.1289L12.8613 12.1289C13.2617 12.1289 13.5449 11.8359 13.5449 11.4551C13.5449 11.1133 13.3008 10.8594 12.9688 10.8594L12.0898 10.8594L12.5195 8.81836L13.5742 8.81836C13.9746 8.81836 14.2578 8.52539 14.2578 8.13477C14.2578 7.79297 14.0137 7.53906 13.6816 7.53906L12.7832 7.53906L13.1836 5.66406C13.252 5.24414 12.959 4.89258 12.5391 4.89258C12.1484 4.89258 11.8945 5.09766 11.8164 5.47852ZM10.7324 10.9766L8.7207 10.9766L9.18945 8.71094L11.2207 8.71094Z"
                  fill-opacity="0.85"
                ></path>
              </g>
            </svg>
          </span>
        </button>
        <button className=" ml-2 flex items-center justify-center whitespace-nowrap space-x-2 rounded-md border-2 px-2 py-2 font-medium text-white transition bg-pink-700 hover:bg-pink-600 hover:text-white w-full">
          <span>Import</span>
          <span>
            <svg
              width="20.2832"
              height="19.9316"
              viewBox="0 0 20.2832 19.9316"
              fill="#FFFFFF"
              stroke="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="fill-white/50 group-hover:fill-white/70 w-[16px] h-[16px] group-hover:rotate-90 transition-all duration-150 ease-in-out"
            >
              <g>
                <rect
                  height="19.9316"
                  opacity="0"
                  width="20.2832"
                  x="0"
                  y="0"
                ></rect>
                <path
                  d="M19.9219 9.96094C19.9219 15.4004 15.4102 19.9219 9.96094 19.9219C4.52148 19.9219 0 15.4004 0 9.96094C0 4.51172 4.51172 0 9.95117 0C15.4004 0 19.9219 4.51172 19.9219 9.96094ZM9.11133 6.05469L9.11133 9.11133L6.05469 9.11133C5.54688 9.11133 5.19531 9.46289 5.19531 9.9707C5.19531 10.4688 5.54688 10.8008 6.05469 10.8008L9.11133 10.8008L9.11133 13.8672C9.11133 14.3652 9.45312 14.7266 9.95117 14.7266C10.459 14.7266 10.8105 14.375 10.8105 13.8672L10.8105 10.8008L13.877 10.8008C14.375 10.8008 14.7363 10.4688 14.7363 9.9707C14.7363 9.46289 14.375 9.11133 13.877 9.11133L10.8105 9.11133L10.8105 6.05469C10.8105 5.54688 10.459 5.18555 9.95117 5.18555C9.45312 5.18555 9.11133 5.54688 9.11133 6.05469Z"
                  fill-opacity="0.85"
                ></path>
              </g>
            </svg>
          </span>
        </button>
        <button className=" ml-2 flex items-center justify-center whitespace-nowrap  rounded-md border-2 px-2 py-2 font-medium text-white transition bg-transparent hover:bg-gray-600 hover:text-white w-full"
        onClick={handleDocumentation}
        >
          <span>Documentation</span>
        </button>
      </div>
    </div>
  );
};

export default PhoneNumbers;
