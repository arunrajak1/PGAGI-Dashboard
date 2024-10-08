import React from "react";

const Blocks = () => {
  return (
    <div className="mx-auto my-10 max-w-md rounded-xl px-6 py-10 text-gray-600 shadow ">
      <div className="w-20 rounded-md px-1 py-1 text-sm font-medium">
        <span>
          <svg
            width="21.3574"
            height="23.1299"
            viewBox="0 0 21.3574 23.1299"
            fill="#6b7280"          
            stroke="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mb-2 w-[80px] h-[80px] fill-icon/20"
          >
            <g>
              <rect
                height="23.1299"
                opacity="0"
                width="21.3574"
                x="0"
                y="0"
              ></rect>
              <path
                d="M2.33398 8.21045L18.6621 8.21045C20.127 8.21045 20.9961 7.35107 20.9961 5.91553L20.9961 2.61475C20.9961 1.1792 20.127 0.319824 18.6621 0.319824L2.33398 0.319824C0.869141 0.319824 0 1.1792 0 2.61475L0 5.91553C0 7.35107 0.869141 8.21045 2.33398 8.21045ZM2.36328 6.73584C1.80664 6.73584 1.47461 6.39404 1.47461 5.82764L1.47461 2.69287C1.47461 2.13623 1.80664 1.79443 2.36328 1.79443L18.6328 1.79443C19.1895 1.79443 19.5215 2.13623 19.5215 2.69287L19.5215 5.82764C19.5215 6.39404 19.1895 6.73584 18.6328 6.73584ZM9.79492 10.5347L11.2207 10.5347L11.2207 7.44873L9.79492 7.44873ZM2.33398 17.5073L18.6621 17.5073C20.127 17.5073 20.9961 16.6479 20.9961 15.2124L20.9961 11.9116C20.9961 10.4761 20.127 9.6167 18.6621 9.6167L2.33398 9.6167C0.869141 9.6167 0 10.4761 0 11.9116L0 15.2124C0 16.6479 0.869141 17.5073 2.33398 17.5073ZM2.36328 16.0327C1.80664 16.0327 1.47461 15.6909 1.47461 15.1343L1.47461 11.9995C1.47461 11.4331 1.80664 11.0913 2.36328 11.0913L18.6328 11.0913C19.1895 11.0913 19.5215 11.4331 19.5215 11.9995L19.5215 15.1343C19.5215 15.6909 19.1895 16.0327 18.6328 16.0327ZM9.78516 19.5483L11.2207 19.5483L11.2207 16.4722L9.78516 16.4722ZM9.98047 22.8589C10.2734 23.2202 10.7617 23.2202 11.0547 22.8589L13.291 20.0952C13.7207 19.5581 13.457 18.855 12.7637 18.855L8.26172 18.855C7.54883 18.855 7.27539 19.5483 7.72461 20.0952Z"
                fill-opacity="0.85"
              ></path>
            </g>
          </svg>
        </span>
      </div>
      <p className="mb-2 text-2xl text-white">Tools</p>
      <p className="mb-4 text-gray-400 text-lg ">
      Blocks is a conversational workflow tool that allows users to design and manage interactions.
      </p>
      {/* <p className="mb-4 text-gray-400 text-lg">
        {" "}
        You can connect external automation tools like Make, GoHighLevel, or
        create custom tools for assistants to use.
      </p> */}
      <div className="flex justify-center ">
        <button className="flex items-center justify-center whitespace-nowrap space-x-2 rounded-md border-2 px-1 py-2 font-medium text-white transition bg-pink-700 hover:bg-pink-600 hover:text-white w-full">
          <span>New Block</span>
          <span>
          <svg
            width="20.2832"
            height="19.9316"
            viewBox="0 0 20.2832 19.9316"
            fill='#FFFFFF'
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
      </div>
    </div>
  );
};

export default Blocks;
