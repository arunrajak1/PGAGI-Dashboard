import React from 'react'
import { useNavigate } from 'react-router-dom'

const Overview = () => {
  const navigate = useNavigate();

  const handleGetStarted =()=>{
    navigate('/assistants')
  }

  return (
    <div className="mx-auto my-10 max-w-md rounded-xl px-6 py-10 text-gray-600 shadow  ">
    <div className="w-20 rounded-md px-2 py-1 text-sm font-medium">
      <span>
        <svg
          width="21.3574"
          height="18.1738"
          viewBox="0 0 21.3574 18.1738"
          fill="#6b7280"
          stroke="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mb-2 w-[80px] h-[80px] fill-icon/20 text-gray-500"
        >
          <g>
            <rect
              height="18.1738"
              opacity="0"
              width="21.3574"
              x="0"
              y="0"
            ></rect>
            <path
              d="M20.8887 6.41602C20.8887 7.37305 20.1074 8.1543 19.1504 8.1543C18.7692 8.1543 18.4158 8.03033 18.1298 7.81919L13.4913 10.5809C13.508 10.671 13.5156 10.7643 13.5156 10.8594C13.5156 11.8164 12.7441 12.5977 11.7871 12.5977C10.8301 12.5977 10.0488 11.8164 10.0488 10.8594C10.0488 10.6146 10.0999 10.3819 10.1926 10.1716L8.32877 8.57342C8.02286 8.8476 7.61898 9.01367 7.17773 9.01367C6.69154 9.01367 6.25072 8.81204 5.93529 8.48756L1.57227 11.0117L1.57227 9.6745L5.44767 7.4371C5.44199 7.38397 5.43945 7.32996 5.43945 7.27539C5.43945 6.31836 6.2207 5.54688 7.17773 5.54688C8.13477 5.54688 8.91602 6.31836 8.91602 7.27539C8.91602 7.37978 8.90672 7.48207 8.88731 7.58096L10.9477 9.34635C11.1965 9.20878 11.4829 9.13086 11.7871 9.13086C12.2238 9.13086 12.6218 9.29147 12.9244 9.55827L17.4695 6.85056C17.4314 6.71213 17.4121 6.56624 17.4121 6.41602C17.4121 5.45898 18.1934 4.67773 19.1504 4.67773C20.1074 4.67773 20.8887 5.45898 20.8887 6.41602Z"
              fill-opacity="0.85"
            ></path>
            <path
              d="M0 17.4023C0 17.8711 0.3125 18.1738 0.78125 18.1738L20.2051 18.1738C20.6348 18.1738 20.9961 17.832 20.9961 17.3926C20.9961 16.9629 20.6348 16.6113 20.2051 16.6113L1.8457 16.6113C1.64062 16.6113 1.57227 16.543 1.57227 16.3379L1.57227 0.898438C1.57227 0.478516 1.2207 0.117188 0.791016 0.117188C0.351562 0.117188 0 0.478516 0 0.898438Z"
              fill-opacity="0.85"
            ></path>
          </g>
        </svg>
      </span>
    </div>
    <p className="mb-2 text-2xl text-white">Phone Numbers</p>
    <p className="mb-4 text-white text-lg ">
    Assistants are able to be connected to phone numbers for calls.
    </p>
    <p className="mb-4 text-white text-lg">
      {" "}
      You can import from Twilio, vonage, or by one directly from Vapi for use with your assistants.
    </p>
  <div className='flex justify-center '>
  <button className="flex items-center justify-center whitespace-nowrap space-x-2 rounded-md border-2 px-2 py-2 font-medium text-white transition bg-pink-700 hover:bg-pink-600 hover:text-white w-full"
  onClick={handleGetStarted}
  >
      <span> Get Started </span>
      <span>
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
      </span>
    </button>
  </div>
  </div>  )
}

export default Overview