import React from "react";
import { useNavigate } from "react-router-dom";

const Assistants = () => {
  const navigate= useNavigate()
  const handleDocumentation=()=>{
    window.location.href = 'https://www.toingg.com/docs/intro';
  }
  return (
    <div className="mx-auto my-10 max-w-md rounded-xl px-6 py-10 text-gray-600 shadow  ">
      <div className="w-20 rounded-md px-2 py-1 text-sm font-medium">
        <span>
          <svg
            width="23.5352"
            height="21.2207"
            viewBox="0 0 23.5352 21.2207"
            fill="#6b7280"
            stroke="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mb-2 w-[80px] h-[80px] fill-icon/20"
          >
            <g>
              <rect
                height="21.2207"
                opacity="0"
                width="23.5352"
                x="0"
                y="0"
              ></rect>
              <path
                d="M22.9199 18.9941C22.9199 19.2969 22.6758 19.541 22.373 19.541C22.0801 19.541 21.8262 19.2969 21.8262 18.9941C21.8262 18.6914 22.0801 18.4473 22.373 18.4473C22.6758 18.4473 22.9199 18.6914 22.9199 18.9941ZM1.34766 18.9941C1.34766 19.2969 1.09375 19.541 0.800781 19.541C0.498047 19.541 0.253906 19.2969 0.253906 18.9941C0.253906 18.6914 0.498047 18.4473 0.800781 18.4473C1.09375 18.4473 1.34766 18.6914 1.34766 18.9941ZM4.55308 15.2067C4.23837 15.5952 3.97644 16.0027 3.7752 16.4185C3.38296 16.3685 3.07617 16.0299 3.07617 15.625C3.07617 15.1953 3.4375 14.834 3.87695 14.834C4.16037 14.834 4.41129 14.9843 4.55308 15.2067ZM20.0977 15.625C20.0977 16.0236 19.8003 16.358 19.4168 16.4157C19.2132 15.9963 18.9481 15.5853 18.6286 15.194C18.772 14.9787 19.0188 14.834 19.2969 14.834C19.7363 14.834 20.0977 15.1953 20.0977 15.625ZM22.9199 15.625C22.9199 15.9277 22.6758 16.1719 22.373 16.1719C22.0801 16.1719 21.8262 15.9277 21.8262 15.625C21.8262 15.332 22.0801 15.0781 22.373 15.0781C22.6758 15.0781 22.9199 15.332 22.9199 15.625ZM1.34766 15.625C1.34766 15.9277 1.09375 16.1719 0.800781 16.1719C0.498047 16.1719 0.253906 15.9277 0.253906 15.625C0.253906 15.332 0.498047 15.0781 0.800781 15.0781C1.09375 15.0781 1.34766 15.332 1.34766 15.625ZM4.92188 12.2656C4.92188 12.832 4.45312 13.3105 3.87695 13.3105C3.30078 13.3105 2.83203 12.832 2.83203 12.2656C2.83203 11.6895 3.30078 11.2109 3.87695 11.2109C4.45312 11.2109 4.92188 11.6895 4.92188 12.2656ZM20.3418 12.2656C20.3418 12.832 19.873 13.3105 19.2969 13.3105C18.7207 13.3105 18.252 12.832 18.252 12.2656C18.252 11.6895 18.7207 11.2109 19.2969 11.2109C19.873 11.2109 20.3418 11.6895 20.3418 12.2656ZM7.47307 11.3533C7.61832 11.6131 7.78845 11.8547 7.97988 12.0752C7.99209 12.1369 7.99805 12.2006 7.99805 12.2656C7.99805 12.4597 7.94303 12.6434 7.84653 12.8004C7.47998 12.9427 7.13751 13.1116 6.81735 13.3002C6.31214 13.2322 5.9082 12.786 5.9082 12.2656C5.9082 11.6895 6.38672 11.2109 6.95312 11.2109C7.14249 11.2109 7.32026 11.2626 7.47307 11.3533ZM17.2656 12.2656C17.2656 12.7815 16.8687 13.2244 16.3696 13.2981C16.041 13.1049 15.689 12.9324 15.3121 12.7874C15.2191 12.6332 15.166 12.4543 15.166 12.2656C15.166 12.2114 15.1702 12.1581 15.1797 12.1064C15.3858 11.8732 15.5682 11.616 15.723 11.3384C15.8718 11.2572 16.0415 11.2109 16.2207 11.2109C16.7871 11.2109 17.2656 11.6895 17.2656 12.2656ZM1.5918 12.2656C1.5918 12.6953 1.23047 13.0566 0.800781 13.0566C0.361328 13.0566 0 12.6953 0 12.2656C0 11.8262 0.361328 11.4648 0.800781 11.4648C1.23047 11.4648 1.5918 11.8262 1.5918 12.2656ZM23.1738 12.2656C23.1738 12.6953 22.8125 13.0566 22.373 13.0566C21.9336 13.0566 21.5723 12.6953 21.5723 12.2656C21.5723 11.8262 21.9336 11.4648 22.373 11.4648C22.8125 11.4648 23.1738 11.8262 23.1738 12.2656ZM20.3418 8.89648C20.3418 9.47266 19.873 9.94141 19.2969 9.94141C18.7207 9.94141 18.252 9.47266 18.252 8.89648C18.252 8.32031 18.7207 7.85156 19.2969 7.85156C19.873 7.85156 20.3418 8.32031 20.3418 8.89648ZM4.92188 8.89648C4.92188 9.47266 4.45312 9.94141 3.87695 9.94141C3.30078 9.94141 2.83203 9.47266 2.83203 8.89648C2.83203 8.32031 3.30078 7.85156 3.87695 7.85156C4.45312 7.85156 4.92188 8.32031 4.92188 8.89648ZM6.73828 8.64258C6.73828 9.09127 6.7929 9.52636 6.90075 9.93871C6.35737 9.9121 5.9082 9.45471 5.9082 8.89648C5.9082 8.37313 6.303 7.93841 6.80023 7.86437C6.7574 8.11552 6.73828 8.37612 6.73828 8.64258ZM17.2656 8.89648C17.2656 9.44916 16.8253 9.903 16.2893 9.93788C16.3993 9.52012 16.4551 9.07874 16.4551 8.62305C16.4551 8.36418 16.4373 8.11133 16.3972 7.86802C16.8832 7.9522 17.2656 8.38142 17.2656 8.89648ZM23.1738 8.89648C23.1738 9.33594 22.8125 9.69727 22.373 9.69727C21.9336 9.69727 21.5723 9.33594 21.5723 8.89648C21.5723 8.45703 21.9336 8.0957 22.373 8.0957C22.8125 8.0957 23.1738 8.45703 23.1738 8.89648ZM1.5918 8.89648C1.5918 9.33594 1.23047 9.69727 0.800781 9.69727C0.361328 9.69727 0 9.33594 0 8.89648C0 8.45703 0.361328 8.0957 0.800781 8.0957C1.23047 8.0957 1.5918 8.45703 1.5918 8.89648ZM20.0977 5.52734C20.0977 5.9668 19.7363 6.32812 19.2969 6.32812C18.8574 6.32812 18.4961 5.9668 18.4961 5.52734C18.4961 5.09766 18.8574 4.73633 19.2969 4.73633C19.7363 4.73633 20.0977 5.09766 20.0977 5.52734ZM17.0117 5.52734C17.0117 5.9668 16.6504 6.32812 16.2207 6.32812C16.1081 6.32812 16.0007 6.30442 15.9033 6.26148C15.7692 5.9828 15.6078 5.72305 15.4221 5.48555C15.4437 5.07436 15.7957 4.73633 16.2207 4.73633C16.6504 4.73633 17.0117 5.09766 17.0117 5.52734ZM7.75391 5.52734L7.75381 5.52922C7.58438 5.74917 7.43623 5.98815 7.31018 6.24225C7.20276 6.2974 7.08126 6.32812 6.95312 6.32812C6.52344 6.32812 6.16211 5.9668 6.16211 5.52734C6.16211 5.09766 6.52344 4.73633 6.95312 4.73633C7.39258 4.73633 7.75391 5.09766 7.75391 5.52734ZM4.67773 5.52734C4.67773 5.9668 4.31641 6.32812 3.87695 6.32812C3.4375 6.32812 3.07617 5.9668 3.07617 5.52734C3.07617 5.09766 3.4375 4.73633 3.87695 4.73633C4.31641 4.73633 4.67773 5.09766 4.67773 5.52734ZM22.9199 5.52734C22.9199 5.83008 22.6758 6.08398 22.373 6.08398C22.0801 6.08398 21.8262 5.83008 21.8262 5.52734C21.8262 5.23438 22.0801 4.98047 22.373 4.98047C22.6758 4.98047 22.9199 5.23438 22.9199 5.52734ZM1.34766 5.52734C1.34766 5.83008 1.09375 6.08398 0.800781 6.08398C0.498047 6.08398 0.253906 5.83008 0.253906 5.52734C0.253906 5.23438 0.498047 4.98047 0.800781 4.98047C1.09375 4.98047 1.34766 5.23438 1.34766 5.52734ZM13.9258 2.16797C13.9258 2.59766 13.5645 2.95898 13.125 2.95898C12.6855 2.95898 12.3242 2.59766 12.3242 2.16797C12.3242 1.72852 12.6855 1.36719 13.125 1.36719C13.5645 1.36719 13.9258 1.72852 13.9258 2.16797ZM10.8398 2.16797C10.8398 2.59766 10.4785 2.95898 10.0488 2.95898C9.60938 2.95898 9.24805 2.59766 9.24805 2.16797C9.24805 1.72852 9.60938 1.36719 10.0488 1.36719C10.4785 1.36719 10.8398 1.72852 10.8398 2.16797ZM22.9199 2.16797C22.9199 2.46094 22.6758 2.71484 22.373 2.71484C22.0801 2.71484 21.8262 2.46094 21.8262 2.16797C21.8262 1.86523 22.0801 1.62109 22.373 1.62109C22.6758 1.62109 22.9199 1.86523 22.9199 2.16797ZM19.8438 2.16797C19.8438 2.46094 19.5996 2.71484 19.2969 2.71484C18.9941 2.71484 18.75 2.46094 18.75 2.16797C18.75 1.86523 18.9941 1.62109 19.2969 1.62109C19.5996 1.62109 19.8438 1.86523 19.8438 2.16797ZM16.7676 2.16797C16.7676 2.46094 16.5137 2.71484 16.2207 2.71484C15.918 2.71484 15.6641 2.46094 15.6641 2.16797C15.6641 1.86523 15.918 1.62109 16.2207 1.62109C16.5137 1.62109 16.7676 1.86523 16.7676 2.16797ZM7.5 2.16797C7.5 2.46094 7.25586 2.71484 6.95312 2.71484C6.66016 2.71484 6.40625 2.46094 6.40625 2.16797C6.40625 1.86523 6.66016 1.62109 6.95312 1.62109C7.25586 1.62109 7.5 1.86523 7.5 2.16797ZM4.42383 2.16797C4.42383 2.46094 4.17969 2.71484 3.87695 2.71484C3.57422 2.71484 3.33008 2.46094 3.33008 2.16797C3.33008 1.86523 3.57422 1.62109 3.87695 1.62109C4.17969 1.62109 4.42383 1.86523 4.42383 2.16797ZM1.34766 2.16797C1.34766 2.46094 1.09375 2.71484 0.800781 2.71484C0.498047 2.71484 0.253906 2.46094 0.253906 2.16797C0.253906 1.86523 0.498047 1.62109 0.800781 1.62109C1.09375 1.62109 1.34766 1.86523 1.34766 2.16797Z"
                fill-opacity="0.425"
              ></path>
              <path
                d="M11.5918 12.334C13.3789 12.334 14.9609 10.7031 14.9609 8.62305C14.9609 6.54297 13.3789 5.0293 11.5918 5.0293C9.81445 5.0293 8.23242 6.58203 8.23242 8.64258C8.23242 10.7031 9.81445 12.334 11.5918 12.334ZM6.5918 19.7266L16.5918 19.7266C18.0371 19.7266 18.4766 19.3164 18.4766 18.5938C18.4766 16.4844 15.8496 13.5742 11.5918 13.5742C7.34375 13.5742 4.7168 16.4844 4.7168 18.5938C4.7168 19.3164 5.14648 19.7266 6.5918 19.7266Z"
                fill-opacity="0.85"
              ></path>
            </g>
          </svg>
        </span>
      </div>
      <p className="mb-2 text-2xl text-white">Assistants</p>
      <p className="mb-4 text-gray-400 text-lg ">
        Assistants are voice AI chat bots used for integrations into your
        applications.
      </p>
      <p className="mb-4 text-gray-400 text-lg">
        {" "}
        You can fully configure them to your businesses needs, and we support
        all major models and providers.{" "}
      </p>
      <div className="flex justify-center ">
        <button className="flex items-center justify-center whitespace-nowrap space-x-2 rounded-md border-2 px-4 py-2 font-medium text-white transition bg-pink-700 hover:bg-pink-600 hover:text-white w-full">
          <span>Create Assistants</span>
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
        <button className=" ml-2 flex items-center justify-center whitespace-nowrap space-x-2 rounded-md border-2 px-4 py-2 font-medium text-white transition bg-transparent hover:bg-gray-600 hover:text-white w-full"
        onClick={handleDocumentation}
        >
          <span>Documentation</span>
        </button>
      </div>
    </div>
  );
};

export default Assistants;
