import React, { useRef } from 'react';

const Files = () => {
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };
  const handleDocumentation=()=>{
    window.location.href = 'https://www.toingg.com/docs/intro';
  }
  return (
    <div className="mx-auto my-10 max-w-md rounded-xl px-6 py-10 text-gray-600 shadow  ">
      <div class="w-full max-w-[330px] mb-2">
        <div class="space-y-2">
          <div
            role="presentation"
            tabindex="0"
            onClick={handleDivClick}
            class="dropzone group relative border  min-h-20 flex flex-col items-center justify-center text-wrap mx-auto rounded-xl p-4 cursor-pointer active:scale-[0.98] transition-all duration-150 ease-in-out bg-secondary border-border/80 hover:border-border"
          >
            <input
              accept="text/markdown,application/pdf,text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              type="file"
              tabindex="-1"
              name="file"
              ref={fileInputRef}
              className="hidden"
            />
            <svg
              width="29.375"
              height="27.2754"
              viewBox="0 0 29.375 27.2754"
              fill="#6b7280"       
              stroke="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-12 h-12 mb-2 fill-icon/30 group-hover:fill-icon/40"
            >
              <g>
                <rect
                  height="27.2754"
                  opacity="0"
                  width="29.375"
                  x="0"
                  y="0"
                ></rect>
                <path
                  d="M13.7988 10.332C13.7988 11.582 14.3945 12.1777 15.6445 12.1777L22.7148 12.1777L22.7148 21.0449C22.7148 23.0762 21.709 24.1016 19.6875 24.1016L11.7376 24.1016C12.279 23.182 12.5879 22.1158 12.5879 20.9863C12.5879 17.5293 9.74609 14.6875 6.28906 14.6875L6.28906 6.23047C6.28906 4.19922 7.30469 3.16406 9.31641 3.16406L13.7988 3.16406ZM16.4062 4.0918L21.7871 9.57031C22.2559 10.0488 22.5391 10.4395 22.5977 10.8398L15.6738 10.8398C15.3125 10.8398 15.1367 10.6641 15.1367 10.3125L15.1367 3.27148C15.5469 3.33984 15.9473 3.62305 16.4062 4.0918Z"
                  fill-opacity="0.85"
                ></path>
                <path
                  d="M11.25 20.9863C11.25 23.6914 8.98438 25.9473 6.28906 25.9473C3.57422 25.9473 1.32812 23.7109 1.32812 20.9863C1.32812 18.2617 3.57422 16.0254 6.28906 16.0254C9.01367 16.0254 11.25 18.2617 11.25 20.9863ZM5.69336 18.4766L5.69336 20.3809L3.7793 20.3809C3.42773 20.3809 3.18359 20.625 3.18359 20.9863C3.18359 21.3477 3.42773 21.582 3.7793 21.582L5.69336 21.582L5.69336 23.4961C5.69336 23.8477 5.92773 24.0918 6.28906 24.0918C6.66016 24.0918 6.89453 23.8477 6.89453 23.4961L6.89453 21.582L8.79883 21.582C9.16016 21.582 9.39453 21.3477 9.39453 20.9863C9.39453 20.625 9.16016 20.3809 8.79883 20.3809L6.89453 20.3809L6.89453 18.4766C6.89453 18.125 6.66016 17.8809 6.28906 17.8809C5.92773 17.8809 5.69336 18.125 5.69336 18.4766Z"
                  fill-opacity="0.85"
                ></path>
              </g>
            </svg>
            <p class="text-sm text-text/30 text-gray-400 font-semibold text-center">
              Drag and drop a file here or click to select file locally.
            </p>
            <ul class="justify-self-end mt-auto"></ul>
          </div>
        </div>
      </div>
      <p className="mb-2 text-2xl text-white">Knowledge Base</p>
      <p className="mb-4 text-gray-400 text-lg ">
      Knowledge base is a bank of files that are accessible by your assistants.
      </p>
      <p className="mb-4 text-gray-400 text-lg">
        {" "}
        You can upload a PDF, jpeg, etc and attached it to your assistants, 
        they pull from they for more context during conversations.
      </p>
      <div className="flex justify-center ">
        <button className="flex items-center justify-center whitespace-nowrap space-x-2 rounded-md border-2 px-2 py-2 font-medium text-white transition bg-pink-700 hover:bg-pink-600 hover:text-white w-full">
          <span>Choose File</span>
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
        <button className=" ml-2 flex items-center justify-center whitespace-nowrap space-x-2 rounded-md border-2 px-2 py-2 font-medium text-white transition bg-transparent hover:bg-gray-600 hover:text-white w-full"
        onClick={handleDocumentation}
        >
          <span>Documentation</span>
        </button>
      </div>
    </div>
  );
};

export default Files;
