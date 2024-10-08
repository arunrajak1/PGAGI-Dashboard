import React from "react";
import { useNavigate } from "react-router-dom";

const CallLogs = () => {
    const navigate = useNavigate()

    const handleGetStarted =()=>{
        navigate('/assistants')
    }
  return (
    <div className="mx-auto my-10 max-w-md rounded-xl px-6 py-10 text-gray-600 shadow ">
      <div className="w-20 rounded-md px-1 py-1 text-sm font-medium">
        <span>
          <svg
            width="23.3887"
            height="16.6895"
            viewBox="0 0 23.3887 16.6895"
            fill="#6b7280"
            stroke="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-gray-400 mb-2 w-[80px] h-[80px] fill-icon/20"
          >
            <g>
              <rect
                height="16.6895"
                opacity="0"
                width="23.3887"
                x="0"
                y="0"
              ></rect>
              <path
                d="M3.06641 16.6895L19.9609 16.6895C22.0117 16.6895 23.0273 15.6738 23.0273 13.6621L23.0273 8.27148C23.0273 7.39258 22.8906 6.98242 22.4707 6.41602L19.1016 1.85547C18.0371 0.400391 17.4512 0.0195312 15.7129 0.0195312L7.31445 0.0195312C5.57617 0.0195312 5 0.400391 3.93555 1.85547L0.556641 6.41602C0.146484 6.98242 0 7.39258 0 8.27148L0 13.6621C0 15.6836 1.02539 16.6895 3.06641 16.6895ZM11.5137 11.0352C10.0488 11.0352 9.11133 9.76562 9.11133 8.56445L9.11133 8.53516C9.11133 8.0957 8.84766 7.68555 8.30078 7.68555L2.08008 7.68555C1.75781 7.68555 1.68945 7.41211 1.8457 7.19727L5.45898 2.23633C5.9082 1.61133 6.48438 1.38672 7.19727 1.38672L15.8301 1.38672C16.543 1.38672 17.1191 1.61133 17.5684 2.23633L21.1816 7.19727C21.3281 7.41211 21.2695 7.68555 20.9473 7.68555L14.7266 7.68555C14.1797 7.68555 13.9258 8.0957 13.9258 8.53516L13.9258 8.56445C13.9258 9.76562 12.9883 11.0352 11.5137 11.0352ZM15.6152 2.82227L7.41211 2.82227C7.14844 2.82227 6.94336 3.02734 6.94336 3.29102C6.94336 3.55469 7.14844 3.75977 7.41211 3.75977L15.6152 3.75977C15.8789 3.75977 16.084 3.55469 16.084 3.29102C16.084 3.02734 15.8789 2.82227 15.6152 2.82227ZM16.9141 5.0293L6.11328 5.0293C5.83984 5.0293 5.625 5.27344 5.625 5.53711C5.625 5.80078 5.83984 6.02539 6.11328 6.02539L16.9141 6.02539C17.1875 6.02539 17.4023 5.80078 17.4023 5.53711C17.4023 5.27344 17.1875 5.0293 16.9141 5.0293Z"
                fill-opacity="0.85"
              ></path>
            </g>
          </svg>
        </span>
      </div>
      <p className="mb-2 text-2xl text-white">Tools</p>
      <p className="mb-4 text-gray-400 text-lg ">
        Call logs is where you manage and analyze the calls your assistants
        makes.
      </p>
      <p className="mb-4 text-gray-400 text-lg">
        {" "}
        You can view recordings, transcription, and more. looks like you have no
        logs, set up an assistant to start making calls!
      </p>
      <div className="flex justify-center ">
        <button className="flex items-center justify-center whitespace-nowrap space-x-2 rounded-md border-2 px-1 py-2 font-medium text-white transition bg-pink-700 hover:bg-pink-600 hover:text-white w-full"
        onClick={handleGetStarted}
        >
          <span>Get Started</span>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-6 w-6"
        >
          <path
            fill-rule="evenodd"
            d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
            clip-rule="evenodd"
          />
        </svg>
        </button>
        <button className=" ml-2 flex items-center justify-center whitespace-nowrap  rounded-md border-2 px-1 py-2 font-medium text-white transition bg-transparent hover:bg-gray-600 hover:text-white w-full">
          <span>Documentation</span>
        </button>
      </div>
    </div>
  );
};

export default CallLogs;
